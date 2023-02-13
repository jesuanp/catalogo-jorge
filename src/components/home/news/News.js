import React from "react";
import s from './news.module.css';
import image8 from '../../../images/image-robot-8.jpeg';

export default function News() {

    return (
        <div className={s.container}>

            <h2 style={{textAlign: 'center'}}>News</h2>

            <div className={s.postInstagram}>
                <img className={s.img} src={image8} alt='imagen de feed de instagram' />
            </div>
        </div>
    )
}