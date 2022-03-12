import React,{ FC } from "react";
import styles from '../components/Main/Main_Error/Main_Error.module.scss'
import Sidepanel from "../components/Sidepanel/Sidepanel";
import NextNProgress from "../components/Elements/ProgressBar/ProgressBar";
import Link from "next/link";

const errorPage:FC=()=>{
    return(
        <>
        <NextNProgress
          color="orange"
          startPosition={0.2}
          stopDelayMs={300}
          height={4}
          showOnShallow={true}
        /> 
        <Link href='/'>
            <div className={styles.text}>
                <h3 className={styles.text__main}>Error #404</h3>
                <span className={styles.text__second}>Sorry, we cant find this page</span>
            </div>
        </Link>
        <div className={styles.background}>
        </div>
        </>
    )
}

export default errorPage