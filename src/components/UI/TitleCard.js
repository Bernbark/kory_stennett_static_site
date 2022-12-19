import css from './TitleCard.module.css';


function TitleCard(props) {
    return <div className={css.titleCard}>{props.children}</div>
}

export default TitleCard;