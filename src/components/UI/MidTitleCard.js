import css from './MidTitleCard.module.css';


function MidTitleCard(props) {
    if(props.classNameToGive == "dark"){
        return <div className={css.midTitleCardDark}>{props.children}</div>
    }
    else{
        return <div className={css.midTitleCard}>{props.children}</div>
    }
}

export default MidTitleCard;