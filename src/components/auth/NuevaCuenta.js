import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import AlertaContext from '../../context/alertas/alertaContext'

const NuevaCuenta = () => {

    // extraer los valores del context
    const alertaContext = useContext(AlertaContext)
    const { alerta, mostrarAlerta } = alertaContext

    // state para iniciar Sesion
    const [usuario, guardarUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    })

    // extraer de usuario
    const { nombre, email, password, confirmar } = usuario

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    // cuando el usuario quiere iniciar sesion
    const onSubmit = e => {
        e.preventDefault()

        // validar que no haya campos vacios
        if ( nombre.trim() === '' ||
             email.trim() === '' || 
             password.trim() === '' || 
             confirmar.trim() === '' ) {
                 mostrarAlerta('Todos los campos son obligatorios', 'alerta-error')
                 return
             }

        // password minimo de 6 caracteres

        if ( password.length < 6 ) {
            mostrarAlerta('El password debe ser de almenos 6 caracteres', 'alerta-error')
            return
        }

        // los 2 password sean iguales

        if ( password !== confirmar ){
            mostrarAlerta('Los passwords no son iguales', 'alerta-error')
            return
        }

        // pasarlo al action
    }

    return ( 
        <div className='form-usuario'>
            { alerta ? ( <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div> ) 
            : null }
            <div className='contenedor-form sombra-dark'>
                <h1>Obtener una Cuenta</h1>

                <form
                    onSubmit={onSubmit}
                >

                    <div className='campo-form'>
                        <label htmlFor='nombre'>Nombre</label>
                        <input 
                            type='text'
                            id='nombre'
                            name='nombre'
                            placeholder='Tu nombre'
                            value={nombre}
                            onChange={onChange}
                        />
                    </div>

                    <div className='campo-form'>
                        <label htmlFor='email'>Email</label>
                        <input 
                            type='email'
                            id='email'
                            name='email'
                            placeholder='Tu Email'
                            value={email}
                            onChange={onChange}
                        />
                    </div>
                    <div className='campo-form'>
                        <label htmlFor='password'>Password</label>
                        <input 
                            type='password'
                            id='password'
                            name='password'
                            placeholder='Tu password'
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <div className='campo-form'>
                        <label htmlFor='confirmar'>Confirmar Password</label>
                        <input 
                            type='password'
                            id='confirmar'
                            name='confirmar'
                            placeholder='Repite tu password'
                            value={confirmar}
                            onChange={onChange}
                        />
                    </div>

                    <div className='campo-form'>
                        <input type='submit' className='btn btn-primario btn-block'
                        value='Registrarme' />

                    </div>
                </form>

                <Link to={'/'} className='enlace-cuenta'>
                    Volver a Iniciar Sesion
                </Link>
            </div>
        </div>
     );
}
 
export default NuevaCuenta;