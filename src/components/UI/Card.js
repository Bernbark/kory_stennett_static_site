import css from './Card.module.css';
import { useEffect, useState } from 'react'

function Card(props) {
    const classNameString = props.classNameToGive;
    let jSXElement = <div></div>;
    
    
    
    
    
    if(classNameString == "dark"){
        jSXElement= <div className={css.dark}>{props.children}</div>
    }
    else{
        jSXElement = <div className={css.light}>{props.children}</div>
    }
    return jSXElement;
}

export default Card;