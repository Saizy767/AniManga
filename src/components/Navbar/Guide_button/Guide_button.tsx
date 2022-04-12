import React , {FC, useCallback} from "react";
import {VscMenu} from 'react-icons/vsc'

import styles from './Guide_button.module.scss'
import { useTypedDispatch } from "../../../hooks/useTypedDispatch";
import { changeGuideButton } from "../../../redux/reducer/sidepanelGuideButton";

interface Props{
    sidepanelChangerAction: ()=> void
}
const Guide_button: FC<Props> = ({sidepanelChangerAction}) =>{
    const dispatch = useTypedDispatch()

    const handleClick = useCallback(() => {
        dispatch(changeGuideButton())
    },[dispatch])

    return(
        <div className={styles.navbar__guide_button}>
            <VscMenu className={styles.navbar__guide_icon} onClick={handleClick}/>
        </div>

    )
}

export default Guide_button

