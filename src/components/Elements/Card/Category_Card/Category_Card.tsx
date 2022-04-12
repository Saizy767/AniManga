import React, { FC, useEffect, useMemo, useRef, useState} from "react";
import Link from "next/link";
import Image from "next/image";

import {AiOutlineCheck, AiOutlineClockCircle} from 'react-icons/ai'

import styles from "./Category_Card.module.scss"
import button from "../../Adding_btn/Adding_btn.module.scss"
import Adding_btn from "../../Adding_btn/Adding_btn"


interface PropsType{
    image_url:string,
    title:string,
    volumes: number,
    mal_id:number,
    minWidth?:string,
    type:string,
    maxHeigth?:string,
}

const Category_Card: FC<PropsType> = ({image_url,title,mal_id,type, minWidth, maxHeigth}) => {
    const [isWatched, setIsWatched] = useState(false)
    const [isLoadImg, setIsLoadImg] = useState('')
    const [isLoadText, setIsLoadText] = useState('')
    
    const lazyRoot = useRef(null)

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
                <div className={styles.Card__image} ref={lazyRoot}>
                    {isLoadImg? <Image lazyRoot={lazyRoot} className={styles.Card__logo} src={image_url} layout='fill'/>:
                                <div className={styles.Card__logo} style={{backgroundColor:'gray'}}></div>
                    }
                </div>
                <div className={styles.Card__name_box}>
                            {isLoadText ?   <p className={styles.Card__name}>{title}</p>:
                                            <p className={styles.Card__name}></p>}
                </div>
                </div>
            </Link>
            <div onClick={()=>{setIsWatched(!isWatched)}}>
            { useMemo(()=>isWatched,[isWatched]) ?   <Adding_btn text='Added' element={<AiOutlineCheck className={button.adding_btn_icon}/>}/>
            :               <Adding_btn text='Watch later' element={<AiOutlineClockCircle className={button.adding_btn_icon}/>}/> }
            </div>
        </div>
    )
}
export default Category_Card