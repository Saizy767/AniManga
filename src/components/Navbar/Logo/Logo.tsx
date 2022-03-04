import Link from "next/link";
import React, { FC, useCallback } from "react";
import { useRouter } from "next/router";

import styles from './Logo.module.scss'

const Logo: FC = () => {
    const router = useRouter()
    const hangleClick = useCallback(()=>{
        setTimeout(()=>
        router.push('/'),3000)
    },[])
    return(
        <div className={styles.navbar__logo_place}>
        <Link href='/'>
            <div className={styles.navbar__logo_box}>
                <span className={styles.navbar__logo} style={{color:"#EC790F"}}>Ani</span>
                <span className={styles.navbar__logo} style={{color:"white"}}>Manga</span>
            </div>
        </Link>
    </div> 
    )
}

export default Logo