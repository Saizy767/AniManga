import React, {FC, useCallback, useRef, useState} from "react";

import styles from './Avatar.module.scss'
import Avatar_User from "../../../components/Elements/Avatar_User/Avatar_User";
import Menu_User from "../../../components/Elements/Menu_User/Menu_User";

const Avatar:FC = () => {
    const[isActive, setActive] = useState(false)
    const avatarRef = useRef(null)

    const onFocus = useCallback(()=>{
        setActive(true)
        window.addEventListener('click', onClick)
    },[])

    const onClick = useCallback((event)=>{
        if (avatarRef.current && !avatarRef.current.contains(event.target)){
            setActive(false)
            window.removeEventListener('click', onClick)}
    },[avatarRef.current])
    return (
    <div className={styles.avatar} ref={avatarRef}>
        <Avatar_User onClick={()=>onClick} onFocus={onFocus}/>
        {isActive &&
            <Menu_User/>
            }
    </div>
    )
}
export default Avatar