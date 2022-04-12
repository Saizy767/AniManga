import React,{ FC, useRef } from "react"
import { IoIosRemoveCircle, IoIosRemoveCircleOutline } from "react-icons/io"
import useHover from "../../../hooks/useHover"
import styles from './SavedMangaCell.module.scss'

const SavedMangaCell:FC=()=> {
    const hoverRef = useRef(null)
    const isHovered = useHover(hoverRef)
    return(
        <li className={styles.slider__li}>
            <img className={styles.slider__image}></img>
            <div className={styles.slider__name}>
                <span className={styles.slider__name_text}>Manga</span>
            </div>
            <div className={styles.slider__delete} ref={hoverRef}>
                {isHovered ?
                <IoIosRemoveCircle className={styles.slider__delete_icon_active} title='Remove manga'/> :
                <IoIosRemoveCircleOutline className={styles.slider__delete_icon} title='Remove manga'/>
                }
            </div>
        </li>
    )
}
export default SavedMangaCell