import Card from '../components/UI/Card';
import ImageSlot from '../components/UI/ImageSlot';
import TitleCard from '../components/UI/TitleCard';
import TwoFrameCard from '../components/UI/TwoFrameCard';
import relic from '../Images/Relic_of_OW.PNG';
import imageStyles from '../components/UI/ImageSlot.module.css'
function FavoritesPage() {
    return (<div>
            <TitleCard>
                <h1>
                Favorite Things
                </h1>
                
            </TitleCard>
            <Card>
                <TwoFrameCard>
                    
                    <Card>
                        <h2>That time my years of loot boxes I had saved were opened for me &#128151;</h2>
                    </Card>
                    <Card>
                        <ImageSlot>
                            <img className={imageStyles.large} src={relic} alt="My Pic Should Be Here..." />
                        </ImageSlot>
                    </Card>
                </TwoFrameCard>
            </Card>        
        </div>
    );
}

export default FavoritesPage;