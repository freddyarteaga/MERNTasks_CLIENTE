import React from 'react';

const Login = () => {

    const onChange = () => {

    }

    return ( 
        <div className='form-usuario'>
            <div className='contenedor-form sombra-dark'>
                <h1>Iniciar Sesion</h1>

                <form>
                    <div className='campo-form'>
                        <label htmlfor='email'>Email</label>
                        <input 
                            type='email'
                            id='email'
                            name='email'
                            placeholder='Tu Email'
                            onChange={onChange}
                        />
                    </div>
                    <div className='campo-form'>
                        <label htmlfor='password'>Password</label>
                        <input 
                            type='password'
                            id='password'
                            name='password'
                            placeholder='Tu password'
                            onChange={onChange}
                        />
                    </div>

                    <div className='campo-form'>
                        <input type='submit' className='btn btn-primario btn-block'
                        value='Iniciar Sesion' />

                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Login;