import React, { FC } from "react";
import Avatar_User from "../Avatar_User/Avatar_User";
import { Array_settings } from "../../../api/Menu_conteiner";

import styles from './Menu_User.module.scss'

const Menu_User:FC = () =>{
    return(
        <div className={styles.menu_conteiner}>
            <div className={styles.menu_conteiner__box}>
                <div className={styles.menu_conteiner__user}>
                    <Avatar_User/>
                    <div className={styles.menu_conteiner__user_box}>
                        <span className={styles.menu_conteiner__user_name}>User name</span>
                    </div>
                </div>
                <div className={styles.menu_conteiner__setting}>
                    <div className={styles.menu_conteiner__table}>
                        {Array_settings.map((el)=>{
                            return(
                            <div className={styles.menu_conteiner__row} key={el.id} role='button'>
                                {el.icon}
                                <span className={styles.menu_conteiner__row_name}>{el.name}</span>
                            </div>
                        )})}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Menu_User