import React, { FC } from "react";

import styles from "./Adding_btn.module.scss"

interface Props{
    text:string,
    element: JSX.Element,
}

const Adding_btn: FC<Props> = ({text,element}) =>{
    return(
        <div className={styles.adding_btn} role='button'>
            <div className={styles.adding_btn_box}>
                {element}
                <span className={styles.adding_btn_text}>{text}</span>
            </div>
        </div>
    )    
}

export default Adding_btn