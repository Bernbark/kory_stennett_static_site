import css from './LinkSlot.module.css';


function LinkSlot(props) {
    return <div className={css.linkSlot}>{props.children}</div>
}

export default LinkSlot;