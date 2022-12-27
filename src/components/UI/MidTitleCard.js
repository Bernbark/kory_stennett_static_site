import css from './MidTitleCard.module.css';


function MidTitleCard(props) {
    return <div className={css.midTitleCard}>{props.children}</div>
}

export default MidTitleCard;