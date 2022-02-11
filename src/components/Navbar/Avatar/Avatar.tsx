import React, {FC} from "react";

import {BsFillPersonFill} from 'react-icons/bs'

import styles from './Avatar.module.scss'

const Avatar:FC = () => {
    return (
        <div className={styles.navbar__avatar}>
        <div className={styles.avatar__place}>
            <div className={styles.avatar__box}>
                <BsFillPersonFill className={styles.avatar__icon}/>
            </div>
        </div>
    </div>
    )
}
export default Avatar