import React,{ FC } from "react";
import Image from "next/image";
import BackGround from './back.jpg'
import styles from '../components/Main/Main_Error/errorPage.module.scss'

const errorPage:FC=()=>{
    return(
        <>
        <div className={styles.text}>
                    <h3 className={styles.text__main}>Error #404</h3>
                    <span className={styles.text__second}>Sorry, we cant find this page</span>
                </div>  
            <div className={styles.background}>
                <Image src={BackGround} alt='background'></Image>
            </div>
        </>
    )
}

export default errorPage