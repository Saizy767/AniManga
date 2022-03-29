import React,{ FC, useEffect } from "react";
import styles from '../components/Main/Main_Error/Main_Error.module.scss'
import NextNProgress from "../components/Elements/ProgressBar/ProgressBar";
import { useRouter } from "next/router";
import Link from "next/link";

const ErrorPage404:FC=()=>{
    const router = useRouter()
    useEffect(()=>{
        setTimeout(()=>{
            router.push('/')
        })
    },[])
    return(
        <>
            <NextNProgress
            color="orange"
            startPosition={0.2}
            stopDelayMs={300}
            height={4}
            showOnShallow={true}
            />
            <Link href='/' as='/'>
                <div className={styles.text}>
                    <h3 className={styles.text__main}>Error #404</h3>
                    <span className={styles.text__second}>Sorry, we cant find this page</span>
                </div>
            </Link>
            <div className={styles.background}></div>
        </>
    )
}

export default ErrorPage404