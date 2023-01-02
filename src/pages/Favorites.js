import Card from '../components/UI/Card';
import ImageSlot from '../components/UI/ImageSlot';
import TitleCard from '../components/UI/TitleCard';
import TwoFrameCard from '../components/UI/TwoFrameCard';
import relic from '../Images/Relic_of_OW.PNG';
import theBoiz from '../Images/me_and_the_boiz.jpg';
import imageStyles from '../components/UI/ImageSlot.module.css'
import MidTitleCard from '../components/UI/MidTitleCard';
import { useMediaQuery, useState } from 'react-responsive';
import ReactCardFlip from 'react-card-flip';
import flipStyles from '../components/UI/FlipCard.module.css';
import React from 'react';
import FlipCard from '../components/UI/FlipCard';
function FavoritesPage() {
    
    

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1782px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1772px)' })
    //onst isTabletOrMobile = useMediaQuery({ query: '(min-width: 1224px)' })
    const isLessBig = useMediaQuery({ query: '(min-width: 1314px) and (max-width: 1771px)' })
    const isSmall = useMediaQuery({ query: '(min-width: 1314px) and (max-width: 1781px)' })
    const isMiniscule = useMediaQuery({ query: '(min-width: 677px) and (max-width: 1313px)' })
    const isTiny = useMediaQuery({ query: '(max-width: 676px)' })


    return (<div>
            <TitleCard>
                <h1>
                Favorite Things
                </h1>
                
            </TitleCard>
            
            <Card>
                
                <MidTitleCard><h1>Overwatch Love: September, 2022</h1></MidTitleCard>
                {isDesktopOrLaptop && 
                <TwoFrameCard>
                    
                    <FlipCard  backMessage={<Card className={flipStyles.flipCard}>
                        <h2>Oh Overwatch...</h2>
                        <h3>I love this game, but to put it simply, these 1100 loot boxes were the culmination of 1300 hours of gameplay. I diiiid kind of hope to open them while recording, 
                            but that's okay. At least I got to keep all the items within, almost completing my entire OW 1 collection of cosmetics.
                        </h3>
                        <br></br>
                        <h3>To say that I like the game is an understatement. I have never played a game like this one before, my usual choice 
                            of shooter being Call of Duty type games. I like the arcadey style of OW along with the variations in gameplay that 
                            different hero abilities can bring.
                        </h3>
                    </Card>
                    
                                            
                    }>
                        <h2>That time my years of loot boxes I had saved were opened for me &#128151;</h2>
                    </FlipCard>
                    <Card>
                        <ImageSlot>
                            <img className={imageStyles.large} src={relic} alt="My Pic Should Be Here..." />
                        </ImageSlot>
                    </Card>
                </TwoFrameCard>}
                {isSmall && 
                            <div>
                                <FlipCard backMessage={<Card>
                        <h2>Oh Overwatch...</h2>
                        <h3>I love this game, but to put it simply, these 1100 loot boxes were the culmination of 1300 hours of gameplay. I diiiid kind of hope to open them while recording, 
                            but that's okay. At least I got to keep all the items within, almost completing my entire OW 1 collection of cosmetics.
                        </h3>
                        <br></br>
                        <h3>To say that I like the game is an understatement. I have never played a game like this one before, my usual choice 
                            of shooter being Call of Duty type games. I like the arcadey style of OW along with the variations in gameplay that 
                            different hero abilities can bring.
                        </h3>
                    </Card>
                    
                                            
                    }>
                        <h2>That time my years of loot boxes I had saved were opened for me &#128151;</h2>
                    </FlipCard>
                                <Card>
                                    <ImageSlot>
                                        <img className={imageStyles.large} src={relic} alt="My Pic Should Be Here..." />
                                    </ImageSlot>
                                </Card>
                            </div>
                }
                {isMiniscule && 
                            <div>
                                <FlipCard backMessage={<Card>
                        <h2>Oh Overwatch...</h2>
                        <h3>I love this game, but to put it simply, these 1100 loot boxes were the culmination of 1300 hours of gameplay. I diiiid kind of hope to open them while recording, 
                            but that's okay. At least I got to keep all the items within, almost completing my entire OW 1 collection of cosmetics.
                        </h3>
                        <br></br>
                        <h3>To say that I like the game is an understatement. I have never played a game like this one before, my usual choice 
                            of shooter being Call of Duty type games. I like the arcadey style of OW along with the variations in gameplay that 
                            different hero abilities can bring.
                        </h3>
                    </Card>
                    
                                            
                    }>
                        <h2>That time my years of loot boxes I had saved were opened for me &#128151;</h2>
                    </FlipCard>
                                <Card>
                                    <ImageSlot>
                                        <img className={imageStyles.medium} src={relic} alt="My Pic Should Be Here..." />
                                    </ImageSlot>
                                </Card>
                            </div>
                }
                {isTiny && 
                            <div>
                                <FlipCard backMessage={<Card>
                        <h2 style={{ fontSize:'1.5rem' }}>Oh Overwatch...</h2>
                        <h3 style={{ fontSize:'1rem' }}>I love this game, but to put it simply, these 1100 loot boxes were the culmination of 1300 hours of gameplay. I diiiid kind of hope to open them while recording, 
                            but that's okay. At least I got to keep all the items within, almost completing my entire OW 1 collection of cosmetics.
                        </h3>
                        <br></br>
                        <h3 style={{ fontSize:'1rem' }}>To say that I like the game is an understatement. I have never played a game like this one before, my usual choice 
                            of shooter being Call of Duty type games. I like the arcadey style of OW along with the variations in gameplay that 
                            different hero abilities can bring.
                        </h3>
                    </Card>
                    
                                            
                    }>
                        <h2 style={{ fontSize:'1.6rem' }}>That time my years of loot boxes I had saved were opened for me &#128151;</h2>
                    </FlipCard>
                                <Card>
                                    <ImageSlot>
                                        <img className={imageStyles.tiny} src={relic} alt="My Pic Should Be Here..." />
                                    </ImageSlot>
                                </Card>
                            </div>
                }

            </Card>
            <Card>
                <MidTitleCard><h1>Found the Coolest Friends: February 2020</h1></MidTitleCard>
                {isDesktopOrLaptop && 
                <TwoFrameCard>
                    
                    <FlipCard backMessage={<Card>
                        <h2>My Friends!</h2>
                        <h3>I have to thank them for being patient with me as I zoned out in Discord chats while focusing on studies or programming for these last three years.
                        </h3>
                        <br></br>
                        <h3>My friends made it so much easier to get through college, because when I was proud of something I had people to show it to, and when I needed advice or
                            support, they were always there to help me. Thank you my friends!
                        </h3>
                    </Card>
                    
                                            
                    }>
                        <h2>I found a dope group of friends who supported me throughout my programming degree.</h2>
                    </FlipCard>
                    <Card>
                        <ImageSlot>
                            <img className={imageStyles.large} src={theBoiz} alt="My Pic Should Be Here..." />
                        </ImageSlot>
                    </Card>
                </TwoFrameCard>}
                {isSmall && 
                            <div>
                                <FlipCard backMessage={<Card>
                        <h2>My Friends!</h2>
                        <h3>I have to thank them for being patient with me as I zoned out in Discord chats while focusing on studies or programming for these last three years.
                        </h3>
                        <br></br>
                        <h3>My friends made it so much easier to get through college, because when I was proud of something I had people to show it to, and when I needed advice or
                            support, they were always there to help me. Thank you my friends!
                        </h3>
                    </Card>
                    
                                            
                    }>
                        <h2>I found a dope group of friends who supported me throughout my programming degree.</h2>
                    </FlipCard>
                                <Card>
                                    <ImageSlot>
                                        <img className={imageStyles.large} src={theBoiz} alt="My Pic Should Be Here..." />
                                    </ImageSlot>
                                </Card>
                            </div>
                }
                {isMiniscule && 
                            <div>
                                <FlipCard backMessage={<Card>
                        <h2>My Friends!</h2>
                        <h3>I have to thank them for being patient with me as I zoned out in Discord chats while focusing on studies or programming for these last three years.
                        </h3>
                        <br></br>
                        <h3>My friends made it so much easier to get through college, because when I was proud of something I had people to show it to, and when I needed advice or
                            support, they were always there to help me. Thank you my friends!
                        </h3>
                    </Card>
                    
                                            
                    }>
                        <h2>I found a dope group of friends who supported me throughout my programming degree.</h2>
                    </FlipCard>
                                <Card>
                                    <ImageSlot>
                                        <img className={imageStyles.medium} src={theBoiz} alt="My Pic Should Be Here..." />
                                    </ImageSlot>
                                </Card>
                            </div>
                }
                {isTiny && 
                            <div>
                                <FlipCard backMessage={<Card>
                        <h2 style={{ fontSize:'1.5rem' }}>My Friends!</h2>
                        <h3 style={{ fontSize:'1rem' }}>I have to thank them for being patient with me as I zoned out in Discord chats while focusing on studies or programming for these last three years.
                        </h3>
                        <br></br>
                        <h3 style={{ fontSize:'1rem' }}>My friends made it so much easier to get through college, because when I was proud of something I had people to show it to, and when I needed advice or
                            support, they were always there to help me. Thank you my friends!
                        </h3>
                    </Card>
                    
                                            
                    }>
                        <h2 style={{ fontSize:'1.6rem' }}>I found a dope group of friends who supported me throughout my programming degree.</h2>
                    </FlipCard>
                                <Card>
                                    <ImageSlot>
                                        <img className={imageStyles.tiny} src={theBoiz} alt="My Pic Should Be Here..." />
                                    </ImageSlot>
                                </Card>
                            </div>
                }

            </Card>       
        </div>
    );
}

export default FavoritesPage;