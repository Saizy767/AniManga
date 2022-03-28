import React, { FC } from "react"
import { BsFillPersonFill } from "react-icons/bs"
import styles from './Avatar_User.module.scss'

interface Props{
    onClick?:()=> void,
    onFocus?:()=> void
}
const AvatarUser:FC<Props> = ({onClick,onFocus})=>{
    return(
    <>
        <div className={styles.navbar__avatar}>
            <div className={styles.avatar__place}>
                <div className={styles.avatar__box} onClick={onClick} onFocus={onFocus} tabIndex={0}>
                    <BsFillPersonFill className={styles.avatar__icon}/>
                </div>
            </div>
        </div>
    </>
    )
}
export default AvatarUser