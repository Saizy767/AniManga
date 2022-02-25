import React , {FC} from "react";
import { connect } from "react-redux";
import {VscMenu} from 'react-icons/vsc'
import { sidepanelChangerAction } from "../../../redux/action/SidepanelChangeAction";

import styles from './Guide_button.module.scss'

interface Props{
    sidepanelChangerAction: ()=> void
}
const Guide_button: FC<Props> = ({sidepanelChangerAction}) =>{
    return(
        <div className={styles.navbar__guide_button}>
            <VscMenu className={styles.navbar__guide_icon} onClick={() => sidepanelChangerAction()}/>
        </div>

    )
}
const mapDispatchToProps = {
    sidepanelChangerAction
}

export default connect(null, mapDispatchToProps) (Guide_button)

