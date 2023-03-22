import React, { useState } from 'react'
import styles from "./CustomeNavbar.module.css"
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";


const CustomeNavbar = () => {
    const [state, setState] = useState(false);

    return (
        <div className={styles.CustomeNavbarContainer}>
            <div className={styles.imageContainer}>
                <img src="https://cdn.icon-icons.com/icons2/2368/PNG/512/github_logo_icon_143772.png" alt="" />
                <h2>Onclick</h2>
                <span>|</span>
            </div>
            <FaBars className={styles.menuIcon} onClick={() => setState(true)} />

            <div className={state ? styles.uiAndButtonVisible : styles.ulAndButtonContainer}>
                <FaTimes className={styles.cancelIcon} onClick = { () => setState(false)}/>
                <ul>
                    <li>Home</li>
                    <li>Service</li>
                    <li>Contact</li>
                    <li>About Us</li>
                </ul>
                <div className={state ? styles.visibleButtonContainer : styles.ButtonContainer}>
                    <button>Login</button>
                    <button>Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default CustomeNavbar