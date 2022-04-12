import React, {FC} from "react";
import { Carousel } from "../Carousel/Carousel";
import styles from './CharactersCarousel.module.scss'
import Image from 'next/image'
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { changeCharacterScroll } from "../../../redux/reducer/charactersSlice";

interface Props{
    characters?: Array<object>
}

const CharactersCarousel:FC<Props> = ({characters}) => {
    const {numberCharacter} = useTypedSelector(state => state.scrollCharactersCarousel)
    const {weigthCharacter} = useTypedSelector(state => state.scrollCharactersCarousel)

    return(
        <div className={styles.charactersSlider}>
            <div className={styles.charactersSlider__header}>
                <span className={styles.charactersSlider__header_text}>Characters</span>
            </div>
            <Carousel changeScrollHome={changeCharacterScroll} number={numberCharacter} weigth={weigthCharacter} >
                {characters.map((el:any)=>{
                    return(
                        <div className={styles.character}>
                            <div className={styles.character__image} key={el.mal_id}>
                                <Image src={el.image_url} layout='fill'/>
                            </div>
                            <span className={styles.character__name}>{el.name}</span>
                        </div>
                        )
                })}
            </Carousel>
        </div>
    )
}

export default CharactersCarousel