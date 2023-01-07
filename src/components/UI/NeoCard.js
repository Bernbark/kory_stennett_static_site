import css from './NeoCard.module.css';
import { useEffect, useState } from 'react'

function NeoCard(props) {
    const classNameString = props.classNameToGive;
    let jSXElement = <div></div>;
    
    
    
    
    
    if(classNameString == "dark"){
        jSXElement= <div className={css.neodark}>{props.children}</div>
    }
    else{
        jSXElement = <div className={css.neolight}>{props.children}</div>
    }
    return jSXElement;
}

export default NeoCard;