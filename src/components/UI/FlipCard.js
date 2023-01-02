import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import Card from './Card';
import css from './FlipCard.module.css';
const FlipCard = (props) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    }
    return <ReactCardFlip containerClassName={css.flipCard} isFlipped={isFlipped} flipDirection="horizontal">
        <Card >
            <h3>{props.frontMessage}</h3>
        
            {props.children}
            <button onClick={handleClick}>Read More</button>
        </Card>

        <Card >
            <h3>{props.backMessage}</h3>
            <button onClick={handleClick}>Read Less</button>
        </Card>
    </ReactCardFlip>
}

export default FlipCard;