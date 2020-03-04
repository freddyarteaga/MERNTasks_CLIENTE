import React, { Fragment, useContext } from 'react';
import Tarea from './Tarea'
import proyectoContext from '../../context/proyectos/proyectoContext'


const ListadoTareas = () => {

    const tareasProyecto = [
        { nombre: 'Elegir Plataforma', estado: true },
        { nombre: 'Elegir Colores', estado: false },
        { nombre: 'Elegir Plataformas de Pago', estado: true },
        { nombre: 'Elegir Hosting', estado: false },
    ]

    const proyectosContext = useContext(proyectoContext)
    const { proyecto } = proyectosContext

    // si no hay proyecTo seleccionado
    if (!proyecto) return <h2>Selecciona un proyecto</h2>

    // Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto

    return ( 
        <Fragment>
            <h2>Proyecto: { proyectoActual.nombre }</h2>

            <ul className='listado-tareas'>
                { tareasProyecto.length === 0
                    ? ( <li className='tareas'><p>No hay Tareas</p></li> )
                    :  tareasProyecto.map( tarea => (
                        <Tarea
                            tarea={tarea}
                        />
                    )) 
                }
            </ul>

            <button
                type='button'
                className='btn btn-eliminar'
            >Eliminar Proyecto &times;</button>
        </Fragment>
       
     );
}
 
export default ListadoTareas;