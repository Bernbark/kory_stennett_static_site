import css from './TwoCardFrame.module.css';
function TwoFrameCard(props){
    return <div className={css.twoCard}>{props.children}</div>
}

export default TwoFrameCard;