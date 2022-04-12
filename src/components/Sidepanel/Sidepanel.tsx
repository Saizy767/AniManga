import React, { FC, useCallback } from "react";
import Link from "next/link";

import { Array_category } from "../../api/Sidepanel";
import Search from "../Navbar/Search/Search";

import styles from './Sidepanel.module.scss'
import { useTypedDispatch } from "../../hooks/useTypedDispatch";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { changeGuideButton } from "../../redux/reducer/sidepanelGuideButton";


interface PropsType {
    mobileAdaptive?:string,
}

const SidePanel:FC<PropsType> = ({mobileAdaptive},) => {  
    const dispatch = useTypedDispatch()
    const {sidepanel} = useTypedSelector(state=> state.giudeButton)

    const handleClick = useCallback(() => {
        dispatch(changeGuideButton())
    },[dispatch])

    return (
        <aside className={sidepanel ? styles.sidepanel_active : styles.sidepanel} style={{width:mobileAdaptive}}>
                <div className={styles.sidepanel_active__search}>
                    <Search/>
                </div>
                <div className={styles.sidepanel_active__category}>
                    {Array_category.map((el)=>{
                        return(
                        <Link href={el.url} key={el.id}>
                            <div onClick={handleClick}>
                                {sidepanel ?
                                <li className={styles.sidepanel_active__li} key={el.id}>{el.icon}{el.name}</li>
                                :
                                <li className={styles.sidepanel__li} key={el.id} title={el.name}>{el.icon}</li>
                                }
                            </div>
                        </Link>
                        )}
                    )}
                </div>
        </aside>
    )
}


export default SidePanel