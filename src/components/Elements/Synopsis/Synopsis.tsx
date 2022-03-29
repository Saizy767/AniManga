import React,{FC, useState} from "react";
import styles from './Synopsis.module.scss'

interface Props {
    element:string
}

const Synopsis:FC<Props> = ({element}) =>{
    const[isAcriveDiscription, setIsActiveDiscription] = useState(true)
    return(
        <>
            <div className={styles.description__synopsis}>
                {isAcriveDiscription ? 
                    <p className={`${styles.description__synopsis_short} 
                                   ${styles.description__synopsis_short_active}`}>
                        {element}
                    </p> :
                    <p className={`${styles.description__synopsis_short}`}>{element}</p>}
            </div>
            <div role='button' className={styles.description__button}
                               onClick={()=>setIsActiveDiscription(!isAcriveDiscription)}>
                <span className={styles.description__button_text}>
                    {isAcriveDiscription ? 'Read more' : 'Read less'}
                </span>
            </div>
        </>
    )
}

export default Synopsis