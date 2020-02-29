import React, { Fragment } from 'react';
import Tarea from './Tarea'

const ListadoTareas = () => {

    const tareasProyecto = [
        { nombre: 'Elegir Plataforma', estado: true },
        { nombre: 'Elegir Colores', estado: false },
        { nombre: 'Elegir Plataformas de Pago', estado: true },
        { nombre: 'Elegir Hosting', estado: false },
    ]

    return ( 
        <Fragment>
            <h2>Proyecto: Tienda Virtual</h2>

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
        </Fragment>
       
     );
}
 
export default ListadoTareas;