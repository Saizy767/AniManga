import React, { FC} from "react";
import Link from "next/link";

import styles from "./Card.module.scss"

interface PropsType{
    image_url:string,
    title:string,
    score:number,
    mal_id:number,
    minWidth:string
}

const Card: FC<PropsType> = ({image_url,title,score,mal_id, minWidth}) => {
    return(
        <div className={styles.Card} style={{minWidth:minWidth}}>
            <Link href={'/' + mal_id}>
                <div className={styles.Card__main}>
                    <img src={image_url} className={styles.Card__logo}/>
                    <div className={styles.Card__name_box}>
                        <p className={styles.Card__name}>{title}</p>
                    </div>
                    <div className={styles.Card__description}>
                        <p className={styles.Card__last_episod}>Rating: {score}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
export default Card