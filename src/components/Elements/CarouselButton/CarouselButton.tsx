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
    children?: Array<object>,
    number: number,
    weigthCard: number
}
const CarouselButton: FC<Props> = ({position, rotate, sign, changeScrool, children, number, weigthCard}) => {
    const hoverRef= useRef(null)
    const isHovered = useHover(hoverRef)
    const dispatch = useTypedDispatch()

    const handleScrool = useCallback((props)=>{
        if (props.sign === '-' && (number - (weigthCard*2)) <= -children.length * weigthCard){
            dispatch(changeScrool((-(children.length-1) * weigthCard) - number))
        }
        else{
            dispatch(changeScrool(Number(`${props.sign}${weigthCard}`)))
        }
    },[number])

    const handleStopPropagation = useCallback((event)=>{
        event.stopPropagation()
    },[])

    console.log(-children.length * weigthCard)
    console.log(number - (weigthCard*2))
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