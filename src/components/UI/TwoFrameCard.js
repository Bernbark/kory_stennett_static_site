import css from './TwoCardFrame.module.css';
function TwoFrameCard(props){
    if(props.classNameToGive == "dark"){
        return <div className={css.twoCardDark}>{props.children}</div>
    }
    else{
        return <div className={css.twoCard}>{props.children}</div>
    }
}

export default TwoFrameCard;