import React,{ FC, useCallback, useRef } from "react"
import { IoIosArrowBack } from "react-icons/io"
import { useTypedDispatch } from "../../../hooks/useTypedDispatch"
import useHover from "../../../hooks/useHover"
import styles from './CarouselButton.module.scss'
import { ActionCreatorWithOptionalPayload } from "@reduxjs/toolkit"

interface Props{
    position: string,
    rotate: string,
    sign: string,
    changeScrool: ActionCreatorWithOptionalPayload<number, string>,
    children: any,
    number: number
}
const CarouselButton: FC<Props> = ({position, rotate, sign, changeScrool, children, number}) => {
    const hoverRef= useRef(null)
    const isHovered = useHover(hoverRef)
    const dispatch = useTypedDispatch()

    const handleScrool = useCallback((props)=>{
        if (props.sign === '-' && (number - 380) <= -children.length * 190){
            dispatch(changeScrool((-(children.length-1) * 190) - number))
        }
        else{
            dispatch(changeScrool(Number(`${props.sign}190`)))
        }
    },[number])

    const handleStopPropagation = useCallback((event)=>{
        event.stopPropagation()
    },[])
    return(
        <div className={styles.button} style={{left:position}} onClick={(e)=> handleStopPropagation(e)}>
            <input type='checkbox' className={styles.button__input}/>
            <label htmlFor={styles.button_input} className={styles.button__label}
                            style={{backgroundColor: isHovered? 'rgba(0,0,0, 0.7)': '',
                            transform:rotate}}
                            ref={hoverRef} onClick={()=>handleScrool({sign})}>
                <IoIosArrowBack style={{color:isHovered? 'white': ''}} className={styles.button__icon}/>
            </label>
        </div>
    )
}

export default CarouselButton