import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import styles from './Top_Card.module.scss'

interface Props{
    name:string,
    id:number,
}
const TopCard:FC<Props> = ({name, id}) =>{
    const [isLoadImg, setIsLoadImg] = useState()
    const [isLoadText, setIsLoadText] = useState('')

    useEffect(()=>{
        setIsLoadText(name)
    },[name])
    return (
        <div className={styles.Card}>
            <Link href={`/${name}`} as={`/${name}`}>
                <div className={styles.Card__main}>
                    {isLoadImg? <img className={styles.Card__logo} />:
                                <div className={styles.Card__logo} style={{backgroundColor:'gray'}}></div>
                    }
                    <div className={styles.Card__name_box}>
                        {isLoadText ?   <p className={styles.Card__name}>{name}</p>:
                                        <p className={styles.Card__name}></p>}
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default TopCard