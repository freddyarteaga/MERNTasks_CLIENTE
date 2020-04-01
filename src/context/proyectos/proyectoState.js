import React,{ useReducer } from 'react';

// import {v4 as uuidv4} from 'uuid';

import proyectoContext from './proyectoContext'
import proyectoReducer from './proyectoReducer'
import { 
            FORMULARIO_PROYECTO, 
            OBTENER_PROYECTOS,
            AGREGAR_PROYECTO,
            VALIDAR_FORMULARIO,
            PROYECTO_ACTUAL,
            ELIMINAR_PROYECTO 
        } from '../../types'

import clienteAxios from '../../config/axios'

const ProyectoState = props => {

    const initialState = {
        proyectos : [],      
        formulario : false ,
        errorformulario: false,
        proyecto: null
    }

    // Dispatch para ejecutar las acciones
    const [ state, dispatch ] = useReducer(proyectoReducer, initialState)

    // Serie de funciones para el CRUD
    
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    // Obtener los proyectos
    const obtenerProyectos =  async () => {
        try {
            const resultado = await clienteAxios.get('/api/proyectos')
            dispatch({
                type: OBTENER_PROYECTOS,
                payload: resultado.data.proyectos
            })
        } catch (error) {
            console.log(error)
        }
    }

    // agregar nuevo proyecto
    const agregarProyecto = async proyecto => {
        // proyecto.id = uuidv4();


        try {
            const resultado = await clienteAxios.post('/api/proyectos', proyecto)
            console.log(resultado)
            // insertamos el proyecto en el state
            dispatch({
                type: AGREGAR_PROYECTO,
                payload: resultado.data
            })                
        } catch (error) {
            console.log(error)
        }
    }

    // validar el formulario por errores
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    } 

    // selecciona el proyecto que el usuario dio click
    const proyectoActual = proyectoId => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        })
    }

    // Elimina un proyecto
    const eliminarProyecto = async proyectoId => {
       try {
            await clienteAxios.delete(`/api/proyectos/${proyectoId}`)
            dispatch({
                type: ELIMINAR_PROYECTO,
                payload: proyectoId
            })
       } catch (error) {
           console.log(error)
       }
    }

    return(
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorformulario: state.errorformulario,
                proyecto: state.proyecto,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoActual,
                eliminarProyecto
            }}
        >
            { props.children }
        </proyectoContext.Provider>
    )
}

export default ProyectoState

