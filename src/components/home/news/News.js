import React from "react";
import s from './news.module.css';
import image2 from '../../../images/image-robot-2.jpeg';

export default function News() {

    return (
        <div className={s.container}>

            <h2 style={{textAlign: 'center'}}>News</h2>

            <div className={s.postInstagram}>
                <img className={s.img} src={image2} alt='imagen de feed de instagram' />
            </div>
        </div>
    )
}