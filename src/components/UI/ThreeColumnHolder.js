import css from './ThreeColumnHolder.module.css';

function ThreeColumnHolder(props){
    return <div className={css.colHolder}>
        <div className={css.col1}>{props.col1}</div>
        <div className={css.col2}>{props.col2}</div>
        <div className={css.col3}>{props.col3}</div>
    </div>
    
}

export default ThreeColumnHolder;