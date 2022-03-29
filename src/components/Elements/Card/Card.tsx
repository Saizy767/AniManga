import React, { FC, useEffect, useState} from "react";
import Link from "next/link";

import {AiOutlineCheck, AiOutlineClockCircle} from 'react-icons/ai'

import styles from "./Card.module.scss"
import button from "../Adding_btn/Adding_btn.module.scss"

import Adding_btn from "../Adding_btn/Adding_btn"

interface PropsType{
    image_url:string,
    title:string,
    volumes: number,
    mal_id:number,
    minWidth?:string,
    type:string,
    maxHeigth?:string,
}

const Card: FC<PropsType> = ({image_url,title,mal_id,type, minWidth, maxHeigth}) => {
    const [isWatched, setIsWatched] = useState(false)
    const [isLoadImg, setIsLoadImg] = useState('')
    const [isLoadText, setIsLoadText] = useState('')

    useEffect(()=>{
        setIsLoadImg(image_url)
    },[image_url])

    useEffect(()=>{
        setIsLoadText(title)
    },[title])
    return(
        <div className={styles.Card} style={{minWidth:minWidth, maxWidth:maxHeigth}}>
            <Link href={`/${type}/${mal_id}`} as={`/${type}/${mal_id}`}>
                <div className={styles.Card__main}>
                    {isLoadImg? <img className={styles.Card__logo} src={image_url}/>:
                                <div className={styles.Card__logo} style={{backgroundColor:'gray'}}></div>
                    }
                    <div className={styles.Card__name_box}>
                        {isLoadText ?   <p className={styles.Card__name}>{title}</p>:
                                        <p className={styles.Card__name}></p>}
                    </div>
                </div>
            </Link>
            <div onClick={()=>{setIsWatched(!isWatched)}}>
            { isWatched ?   <Adding_btn text='Added' element={<AiOutlineCheck className={button.adding_btn_icon}/>}/>
            :               <Adding_btn text='Watch later' element={<AiOutlineClockCircle className={button.adding_btn_icon}/>}/> }
            </div>
        </div>
    )
}
export default Card