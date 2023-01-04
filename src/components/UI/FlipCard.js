import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import Card from './Card';
import css from './FlipCard.module.css';

const FlipCard = (props) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const classNameString = props.classNameToGive;
    const handleClick = () => {
        setIsFlipped(!isFlipped);
    }
    let jSXElement = <div></div>;
    
    
    
    
    console.log(classNameString);
    if(classNameString == "dark"){
        jSXElement= <ReactCardFlip containerClassName={css.flipCardDark} isFlipped={isFlipped} flipDirection="horizontal">
        <Card classNameToGive={classNameString}>
            <h3>{props.frontMessage}</h3>
        
            {props.children}
            <button onClick={handleClick}>Read More</button>
        </Card>

        <Card classNameToGive={classNameString}>
            <h3>{props.backMessage}</h3>
            <button onClick={handleClick}>Read Less</button>
        </Card>
    </ReactCardFlip>
    }
    else{
        jSXElement = <ReactCardFlip containerClassName={css.flipCard} isFlipped={isFlipped} flipDirection="horizontal">
        <Card classNameToGive={classNameString}>
            <h3>{props.frontMessage}</h3>
        
            {props.children}
            <button onClick={handleClick}>Read More</button>
        </Card>

        <Card classNameToGive={classNameString}>
            <h3>{props.backMessage}</h3>
            <button onClick={handleClick}>Read Less</button>
        </Card>
    </ReactCardFlip>
    }
    return jSXElement;
    
}

export default FlipCard;