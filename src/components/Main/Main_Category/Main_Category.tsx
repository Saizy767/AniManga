import React,{FC} from "react";

import styles from "./Main_Category.module.scss"
import Search_Filter from "src/components/Elements/Search_Filter/Search_Filter";
import Card from "src/components/Elements/Card/Home_Card/Home_Card";
import { useTypedSelector } from "src/hooks/useTypedSelector";



interface Props{
    idType: any,
    allManga:any,
}

const Main:FC<Props> = ({idType, allManga}) => {
    const {sidepanel} = useTypedSelector(state => state.giudeButton)
    
    return(
        <main className={sidepanel ? styles.main__background_active : styles.main__background}>
            <Search_Filter idType={idType}/>
            <div className={styles.main__form_card}>
                { 
                allManga && allManga.map((el: any)=>{
                    return <Card key={el.mal_id}
                                    {...el}
                                />
                })}
            </div>
        </main>
    )
}

export default Main