import React, {FC} from "react";
import CarouselButton from "../CarouselButton/CarouselButton";
import styles from './Carousel.module.scss'
import { ActionCreatorWithOptionalPayload } from "@reduxjs/toolkit";

interface Props{
    children?: Array<object>,
    changeScrollHome: ActionCreatorWithOptionalPayload<number, string>,
    number: number,
}

export const Carousel: FC<Props> = ({children, changeScrollHome, number}) =>{
    return(
        <div className={styles.conteiner}>
            { number <= -190 ? <CarouselButton position={'15%'}
                                               rotate={'rotate(0deg)'}
                                               sign={'+'}
                                               changeScrool={changeScrollHome}
                                               children={children}
                                               number={number}
                            /> : ''}
            <div className={styles.conteiner__window}>
                <div className={styles.conteiner__all_items} style={{transform:`translateX(${number}px)`}}>
                    {children}
                </div>
            </div>
            {number-190 >= -(children?.length - 1 )* 190 ? <CarouselButton position={'85%'}
                                                                       rotate={'rotate(180deg)'}
                                                                       sign={'-'}
                                                                       changeScrool={changeScrollHome}
                                                                       children={children}
                                                                       number={number}
                            />: ''}
                            
        </div>
    )
}