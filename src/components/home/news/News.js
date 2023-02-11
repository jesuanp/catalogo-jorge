import React from "react";
import s from './news.module.css';

export default function News() {

    return (
        <div className={s.container}>

            <h2 style={{textAlign: 'center'}}>News</h2>

            <div className={s.postInstagram}>
                feed de ig
            </div>
        </div>
    )
}