import css from './LinkSlot.module.css';


function LinkSlot(props) {
    if(props.classNameToGive == "dark"){
        return <div className={css.linkSlotDark}>{props.children}</div>
    }
    else{
        return <div className={css.linkSlot}>{props.children}</div>
    }
}

export default LinkSlot;