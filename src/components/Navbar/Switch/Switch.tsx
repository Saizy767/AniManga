
import React, { FC } from "react";

import {BsFillMoonFill} from 'react-icons/bs'

import styles from './Switch.module.scss'


const Switch: FC = () =>{
    return(
        <div className={styles.navbar__switch}>
            <div className={styles.switch__place}>
                <div className={styles.switch__box}></div>
                <div className={styles.switch__switcher}>
                    <BsFillMoonFill className={styles.switch__switcher_logo}/>
                </div>
            </div>
        </div>
    )
}
export default Switch;
