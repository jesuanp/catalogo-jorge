import React from "react";
import s from './footer.module.css';

export default function Footer() {

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className={s.container}>
            <div>
                <h2 style={{textAlign: 'center'}}>CONTACT US</h2>

                <p style={{textAlign: 'center'}}>
                    Lorem laboris sint ex ex minim voluptate incididunt ea ut culpa voluptate. Cupidatat aliqua eiusmod et id adipisicing.
                </p>
            </div>

            <div style={{display: 'flex', justifyContent: 'center'}}>
                <form className={s.form} onSubmit={handleSubmit}>
                    <input className={s.inputs} type='text' placeholder="What's your name?" />
                    <input className={s.inputs} type='email' placeholder='Your email?' />
                    <textarea style={{borderRadius: '1.5rem'}} className={s.inputs} rows={5} placeholder='Message' />
                    
                    <button className={s.btn} type="submit">
                        <strong>Send message</strong>
                    </button>
                    
                </form>
            </div>
        </div>
    )
}
