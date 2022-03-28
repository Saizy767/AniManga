import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useCallback, useEffect, useState } from "react";
import styles from './Top_Card.module.scss'

interface Props{
    name:string,
    id:number,
    image: string,
    shortname:string,
}
const TopCard:FC<Props> = ({name, id, image, shortname}) =>{
    const [isLoadImg, setIsLoadImg] = useState('')
    const [isLoadText, setIsLoadText] = useState('')

    useEffect(()=>{
        setIsLoadText(name)
    },[name])

    useEffect(()=>{
        setIsLoadImg(image)
    },[image])
    
    return (
        <div className={styles.Card}>
            <Link href={`/top/${id}${shortname}`} as={`/top/${id}${shortname}`}>
                <div className={styles.Card__main}>
                    {isLoadImg? <img className={styles.Card__logo} src={image}/>:
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