import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext'


const FormTarea = () => {

    // extraer si un prpoyecto estas activo
    const proyectosContext = useContext(proyectoContext)
    const { proyecto } = proyectosContext
    
    // si no hay proyecTo seleccionado
    if (!proyecto) return null

    // Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto

    const onSubmit = e => {
        e.preventDefault()

        // validar

        // pasar la validacion

        // agregar la nueva tarea al state de tareas

        // reiniciar el form
    }

    return ( 
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input
                        type='text'
                        className='input-text'
                        placeholder='Nombre Tarea...'
                        name='nombre'
                    />
                </div>
                <div className="contenedor-input">
                    <input
                        type='submit'
                        className='btn btn-primario btn-submit btn-block'
                    />
                </div>
            </form>
        </div>
        
     );
}
 
export default FormTarea;