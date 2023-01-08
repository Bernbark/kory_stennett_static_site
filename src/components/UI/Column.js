import css from './Column.module.css';


function Column(props) {
    const classNameString = props.classNameToGive;
    let jSXElement = <div></div>;
    
    if(classNameString == "dark"){
        jSXElement= <div className={css.columnDark}>{props.children}</div>
    }
    else{
        jSXElement = <div className={css.columnLight}>{props.children}</div>
    }
    return jSXElement;
}

export default Column;