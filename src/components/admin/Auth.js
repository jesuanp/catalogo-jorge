import React from 'react';
import { auth } from '../../config/axios';
import { useNavigate } from 'react-router-dom';
import s from './admin.module.css';

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
            <h1 style={{textAlign: 'center'}}>Auth</h1>

            <form className={s.form} onSubmit={handleSubmit}>
                <input className={s.input} onChange={handleChange} type='password' placeholder='password...' />
                <button className={s.btn} type='submit' >Enviar</button>
            </form>
        </div>
    )
}
