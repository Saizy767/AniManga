import React,{ FC } from "react";
import styles from '../components/Main/Main_Error/Main_Error.module.scss'
import NextNProgress from "../components/Elements/ProgressBar/ProgressBar";
import { useRouter } from "next/router";

const ErrorPage404:FC=()=>{
    const router = useRouter()
    setTimeout(()=>{
        //router.push('/')
    },3)
    return(
        <>
            <NextNProgress
            color="orange"
            startPosition={0.2}
            stopDelayMs={300}
            height={4}
            showOnShallow={true}
            />
            <div className={styles.text}>
                <h3 className={styles.text__main}>Error #404</h3>
                <span className={styles.text__second}>Sorry, we cant find this page</span>
            </div>
            <div className={styles.background}></div>
        </>
    )
}

export default ErrorPage404