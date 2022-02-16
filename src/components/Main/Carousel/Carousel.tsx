import React, {FC} from "react";


import styles from './Carousel.module.scss'

interface Props{
    children?: Array<object>,
}

export const Carousel: FC<Props> = ({children}) =>{
    
    return(
        <>
        <div className={styles.conteiner}>
            <div className={styles.conteiner__window}>
                <div className={styles.conteiner__all_items}>
                    {children}
                </div>
            </div>
        </div>
        </>
    )
}