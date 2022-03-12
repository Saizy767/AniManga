import React, { FC } from "react";
import { connect } from "react-redux";
import { rootReducerType } from "../../../redux/rootReducer/rootReducer";
import {IoIosRemoveCircleOutline, IoIosRemoveCircle} from 'react-icons/io'

import Avatar from '../../Navbar/Avatar/Avatar'
import { useHover } from "../../../hooks/useHover";

import styles from './Main_Liked.module.scss'

interface Props{
    sidepanel:boolean
}
const Main:FC<Props> = ({sidepanel}) =>{
    const [hoverRef, isHovered] = useHover<HTMLDivElement>()

    return(
        <>
        <main className={ sidepanel ? styles.main__background_active : styles.main__background}>
            <div className={styles.main__box}>
                <div className={styles.selected__box}>
                        <div className={styles.selected__img}>
                            <img alt='first added manga' className={styles.selected__img_poster}></img>
                        </div>
                        <div className={styles.selected__text}>
                            <span className={styles.selected__title}>Liked manga</span>
                            <div className={styles.selected__description}>
                                <span className={styles.selected__part}>0 mangas</span>
                                <span className={styles.selected__part}>Last added : Date</span>
                            </div>
                        </div>
                        <hr className={styles.selected__row}/>
                        <div className={styles.selected__user}>
                            <Avatar/>
                            <span className={styles.selected__user_name}>User Name</span>
                        </div>
                </div>
                <div className={styles.slider__box}>
                    <div className={styles.slider__place}>
                        <ul className={styles.slider__ul}>
                                {[...Array(5)].map((volume, index)=>{
                                const [hoverRef, isHovered]= useHover<HTMLDivElement>()
                                index+=1
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
                                </li>)})}
                        </ul>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}

const mapStateToProps = (state: rootReducerType) => ({ 
    sidepanel: state.sidepanel.activity
})
export default connect(mapStateToProps,null)(Main)