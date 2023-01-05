import css from './TitleCard.module.css';


function TitleCard(props) {
    if(props.classNameToGive == "dark")
        return <div className={css.titleCardDark}>{props.children}</div>
    else{
        return <div className={css.titleCard}>{props.children}</div>
    }
}

export default TitleCard;