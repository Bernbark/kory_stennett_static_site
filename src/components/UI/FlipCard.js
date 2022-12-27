import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import Card from './Card';
const FlipCard = (props) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    }
    return <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <Card>
            <h3>{props.frontMessage}</h3>
        
            {props.children}
            <button onClick={handleClick}>Click to flip</button>
        </Card>

        <Card>
            <h3>{props.backMessage}</h3>
            <button onClick={handleClick}>Click to flip</button>
        </Card>
    </ReactCardFlip>
}

export default FlipCard;