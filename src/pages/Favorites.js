import Card from '../components/UI/Card';
import ImageSlot from '../components/UI/ImageSlot';
import TitleCard from '../components/UI/TitleCard';
import TwoFrameCard from '../components/UI/TwoFrameCard';
import relic from '../Images/Relic_of_OW.PNG';
import theBoiz from '../Images/me_and_the_boiz.jpg';
import imageStyles from '../components/UI/ImageSlot.module.css'
import MidTitleCard from '../components/UI/MidTitleCard';
import { useMediaQuery } from 'react-responsive';

function FavoritesPage() {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1782px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1772px)' })
    //onst isTabletOrMobile = useMediaQuery({ query: '(min-width: 1224px)' })
    const isLessBig = useMediaQuery({ query: '(min-width: 1314px) and (max-width: 1771px)' })
    const isSmall = useMediaQuery({ query: '(min-width: 1314px) and (max-width: 1781px)' })
    const isMiniscule = useMediaQuery({ query: '(min-width: 600px) and (max-width: 1313px)' })
    const isTiny = useMediaQuery({ query: '(max-width: 600px)' })


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
                    
                    <Card>
                        <h2>That time my years of loot boxes I had saved were opened for me &#128151;</h2>
                    </Card>
                    <Card>
                        <ImageSlot>
                            <img className={imageStyles.large} src={relic} alt="My Pic Should Be Here..." />
                        </ImageSlot>
                    </Card>
                </TwoFrameCard>}
                {isSmall && 
                            <div>
                                <Card>
                                    <h2>That time my years of loot boxes I had saved were opened for me &#128151;</h2>
                                </Card>
                                <Card>
                                    <ImageSlot>
                                        <img className={imageStyles.large} src={relic} alt="My Pic Should Be Here..." />
                                    </ImageSlot>
                                </Card>
                            </div>
                }
                {isMiniscule && 
                            <div>
                                <Card>
                                    <h2>That time my years of loot boxes I had saved were opened for me &#128151;</h2>
                                </Card>
                                <Card>
                                    <ImageSlot>
                                        <img className={imageStyles.medium} src={relic} alt="My Pic Should Be Here..." />
                                    </ImageSlot>
                                </Card>
                            </div>
                }
                {isTiny && 
                            <div>
                                <Card>
                                    <h2>That time my years of loot boxes I had saved were opened for me &#128151;</h2>
                                </Card>
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
                    
                    <Card>
                        <h2>I found a dope group of friends who supported me throughout my programming degree.</h2>
                    </Card>
                    <Card>
                        <ImageSlot>
                            <img className={imageStyles.large} src={theBoiz} alt="My Pic Should Be Here..." />
                        </ImageSlot>
                    </Card>
                </TwoFrameCard>}
                {isSmall && 
                            <div>
                                <Card>
                                    <h2>I found a dope group of friends who supported me throughout my programming degree.</h2>
                                </Card>
                                <Card>
                                    <ImageSlot>
                                        <img className={imageStyles.large} src={theBoiz} alt="My Pic Should Be Here..." />
                                    </ImageSlot>
                                </Card>
                            </div>
                }
                {isMiniscule && 
                            <div>
                                <Card>
                                    <h2>I found a dope group of friends who supported me throughout my programming degree.</h2>
                                </Card>
                                <Card>
                                    <ImageSlot>
                                        <img className={imageStyles.medium} src={theBoiz} alt="My Pic Should Be Here..." />
                                    </ImageSlot>
                                </Card>
                            </div>
                }
                {isTiny && 
                            <div>
                                <Card>
                                    <h2>I found a dope group of friends who supported me throughout my programming degree.</h2>
                                </Card>
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