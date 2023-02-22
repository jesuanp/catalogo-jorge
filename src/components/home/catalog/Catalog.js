import React from "react";
import s from './catalog.module.css';
import {NavLink} from 'react-router-dom';
import image2 from '../../../images/image-robot-2.jpeg';
import image3 from '../../../images/image-robot-3.jpeg';
import image4 from '../../../images/image-robot-4.jpeg';
import image5 from '../../../images/image-robot-5.jpeg';
import image6 from '../../../images/image-robot-6.jpeg';
import image7 from '../../../images/image-robot-7.jpeg';


export default function Catalog() {

    return (
        <>

            <h2 style={{textAlign: 'center'}}>CATALOGUE</h2>

            <div className={s.container}>
                <div className={s.carrousel}>
                    <NavLink to='/projects'>
                        <div className={s.divImg}>
                            <img className={s.img} src={image2} alt='imagen del proyecto' />
                        </div>
                    </NavLink>

                    <NavLink to='/projects'>
                        <div className={s.divImg}>
                            <img className={s.img} src={image3} alt='imagen del proyecto' />
                        </div>
                    </NavLink>

                    <NavLink to='/projects'>
                        <div className={s.divImg}>
                            <img className={s.img} src={image4} alt='imagen del proyecto' />
                        </div>
                    </NavLink>
                </div>
            </div>

            <div className={s.container}>
                <div className={s.carrousel}>
                    <NavLink to='/projects'>
                        <div className={s.divImg}>
                            <img className={s.img} src={image5} alt='imagen del proyecto' />
                        </div>
                    </NavLink>

                    <NavLink to='/projects'>
                        <div className={s.divImg}>
                            <img className={s.img} src={image6} alt='imagen del proyecto' />
                        </div>
                    </NavLink>

                    <NavLink to='/projects'>
                        <div className={s.divImg}>
                            <img className={s.img} src={image7} alt='imagen del proyecto' />
                        </div>
                    </NavLink>
                </div>
            </div>
        </>
    )


    // return (
    //     <div className={s.container}>

    //         <h2 style={{textAlign: 'center'}}>CATALOG</h2>

    //         <div className={s.catalog}>
    //             <div className={s.divImg}>
    //                 <img className={s.img} src={image2} alt='imagen del proyecto' />
    //             </div>

    //             <div className={s.divImg}>
    //                 <img className={s.img} src={image3} alt='imagen del proyecto' />
    //             </div>

    //             <div className={s.divImg}>
    //                 <img className={s.img} src={image4} alt='imagen del proyecto' />
    //             </div>

    //             <div className={s.divImg}>
    //                 <img className={s.img} src={image5} alt='imagen del proyecto' />
    //             </div>
    //         </div>
    //     </div>
    // )
}