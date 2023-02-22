import React from 'react';
import { auth } from '../../config/axios';
import { useNavigate } from 'react-router-dom';

export default function Auth() {

    const navigate = useNavigate();

    const [password, setPassword] = React.useState('');

    const handleChange = e => {
        setPassword(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        if(password.trim() == ''){
            alert('coloca una contraseña');
            return
        }

        auth(password);

        navigate('/admin');
    }

    return (
        <div>
            <h1>Auth</h1>

            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type='password' placeholder='password...' />
                <button type='submit' >Enviar</button>
            </form>
        </div>
    )
}
