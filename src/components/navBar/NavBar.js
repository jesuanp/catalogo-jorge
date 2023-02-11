import React, {useState} from "react";
import s from './navBar.module.css';


export default function NavBar() {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className={s.container}>
            <div className={s.menu} onClick={() => setShowMenu(state => !state)}>
                {
                    showMenu
                    ? <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/></svg>
                    : <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/></svg>
                }
                
            </div>
            {
                showMenu
                && <ul className={s.ulNav}>
                    <li>NEWS</li>
                    <li>ABOUT US</li>
                    <li>CATALOG</li>
                    <li>CANTACT</li>
                </ul>
            }
        </nav>
    )
}
