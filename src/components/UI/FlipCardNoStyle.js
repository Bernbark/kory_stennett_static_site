import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import Card from './Card';
import css from './FlipCard.module.css';

const FlipCardNoStyle = (props) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const classNameString = props.classNameToGive;
    const handleClick = () => {
        setIsFlipped(!isFlipped);
    }
    let jSXElement = <div></div>;
    
    
    
    
    
    
        jSXElement= <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        
            {props.children}
            <button onClick={handleClick}>Read More</button>
    </ReactCardFlip>
    
    
    return jSXElement;
    
}

export default FlipCard;