import React, { FC } from "react";
import { connect } from "react-redux";
import Link from "next/link";

import { rootReducerType } from "../../redux/rootReducer/rootReducer";
import { Array_category } from "./Categoty";

import styles from './Sidepanel.module.scss'

interface PropsType {
    sidepanel: boolean,
}

const SidePanel:FC<PropsType> = ({sidepanel}) => {  
    return (
        <>
        <aside className={sidepanel ? styles.sidepanel_active : styles.sidepanel}>
                {Array_category.map((el)=>{
                    return(
                    <Link href={el.url} key={el.id}>
                        <div>
                            {sidepanel ?
                            <li className={styles.sidepanel_active__li} key={el.id}>{el.icon}{el.name}</li>
                            :
                            <li className={styles.sidepanel__li} key={el.id}>{el.icon}</li>
                            }
                        </div>
                    </Link>
                    )}
                )}
        </aside>
        </>
    )
}

const mapDispatchToProps = {
    
}
const mapStateToProps = (state: rootReducerType) => ({ 
    sidepanel: state.sidepanel.activity
})
export default connect(mapStateToProps,mapDispatchToProps)(SidePanel)