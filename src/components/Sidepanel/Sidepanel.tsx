import React, { FC } from "react";
import { connect } from "react-redux";
import Link from "next/link";

import { rootReducerType } from "../../redux/rootReducer/rootReducer";
import { Array_category } from "./Categoty";
import Search from "../Navbar/Search/Search";

import styles from './Sidepanel.module.scss'


interface PropsType {
    sidepanel?: boolean,
    sidepanelChangerAction?:()=>void,
    mobileAdaptive?:string,
}

const SidePanel:FC<PropsType> = ({sidepanel, sidepanelChangerAction,mobileAdaptive},) => {  
    return (
        <aside className={sidepanel ? styles.sidepanel_active : styles.sidepanel} style={{width:mobileAdaptive}}>
                <div className={styles.sidepanel_active__search}>
                    <Search/>
                </div>
                <div className={styles.sidepanel_active__category}>
                    {Array_category.map((el)=>{
                        return(
                        <Link href={el.url} key={el.id}>
                            <div>
                                {sidepanel ?
                                <li className={styles.sidepanel_active__li} key={el.id} onClick={()=>sidepanelChangerAction()}>{el.icon}{el.name}</li>
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


const mapStateToProps = (state: rootReducerType) => ({ 
    sidepanel: state.sidepanel.activity
})
export default connect(mapStateToProps,null)(SidePanel)