import acorn from '../Images/acorn_enemy.png';
import beam from '../Images/beam_4.png';
import acolyte from '../Images/blood_acolyte.png';
import mohawk from '../Images/blue_mohawk_man.png';
import cBack from '../Images/Card_Back.png';
import cFront from '../Images/Card_Front.png';
import ghostLady from '../Images/final project.jpg';
import lightning from '../Images/lightning.png';
import car from '../Images/myfushy.JPG';
import magazine from '../Images/roadsplitter mag.jpg';
import car2 from '../Images/sunroof.jpg';
import spaceship from '../Images/spaceship_idle_1.png';
import css from '../components/UI/Card.module.css';
import Card from '../components/UI/Card';
import TitleCard from '../components/UI/TitleCard';

function ArtworkPage(){
    return <div>
        
        <Card>
            <TitleCard>
                <h1>
                    The Gallery
                </h1>
            </TitleCard>
            <Card>
                <h2>Simple Spaceship</h2>
                <p>This fine looking pixelated mess is normally displayed much smaller, and has been used in several of my Unity projects! Simple pixel art like this reminds me of Mario Paint from the SNES.</p>
                <img className={css.gallery} src={spaceship} alt="My Pic Should Be Here..." />
            </Card>
            <Card>
                <h2>Acorn Enemy</h2>
                <p>Just a silly enemy design for a card game I was making.</p>
                <img className={css.gallery} src={acorn} alt="My Pic Should Be Here..." />
            </Card>
            <Card>
                <h2>Beam Attack</h2>
                <p>One of the attacks I made for my first game ever. It was a platformer that I used to learn Unity with, so the project never received a real name and was not completed.</p>
                <img className={css.gallery} src={beam} alt="My Pic Should Be Here..." />
            </Card>
            <Card>
                <h2>Blood Acolyte</h2>
                <p>These guys were sort of your followers in Custom Tower Defense, a game I never quite finished...</p>
                <img className={css.gallery} src={acolyte} alt="My Pic Should Be Here..." />
            </Card>
            <Card>
                <h2>Mohawk Man</h2>
                <p>This cool dude was the main character of my card game, why is he so aggro?!</p>
                <img className={css.gallery} src={mohawk} alt="My Pic Should Be Here..." />
            </Card>
            <Card>
                <h2>Card Back</h2>
                <p>My design for the backs of cards in that long forgotten card game.</p>
                <img className={css.gallery} src={cBack} alt="My Pic Should Be Here..." />
            </Card>
            <Card>
                <h2>Card Front</h2>
                <p>My design for the fronts of cards in that recently rememebered card game.</p>
                <img className={css.gallery} src={cFront} alt="My Pic Should Be Here..." />
            </Card>
            <Card>
                <h2>Final Project: Advanced Photoshop</h2>
                <p>This was one of the last images I made on my path to become a graphic designer, but I decided that art on a serious level wasn't for me! Good thing too, because I really like the path I'm on now.</p>
                <img className={css.gallery} src={ghostLady} alt="My Pic Should Be Here..." />
            </Card>
            <Card>
                <h2>Lightning Textures</h2>
                <p>Some cool textures I would often use to produce lightning effects in Unity. Feel free to use it at will. I don't mind.</p>
                <img className={css.gallery} src={lightning} alt="My Pic Should Be Here..." />
            </Card>
            <Card>
                <h2>My Car?</h2>
                <p>Okay, it's not really art but I like this picture. My precious hybrid, and I do highly suggest this particular year, make and model.<br></br>
                    It's a 2019 Ford Fusion Hyrbid for those curious!
                </p>
                <img className={css.gallery} src={car} alt="My Pic Should Be Here..." />
            </Card>
            <Card>
                <h2>Not My Car</h2>
                <p>Just one of many cool pics I took as a car dealership photographer. I got to see monster trucks, the Mustang Boss 302, and so many more unique vehicles. It was a great time.</p>
                <img className={css.gallery} src={car2} alt="My Pic Should Be Here..." />
            </Card>
            <Card>
                <h2>Roadsplitter Magazine</h2>
                <p>A fake magazine cover that I made for photoshop class.</p>
                <img className={css.gallery} src={magazine} alt="My Pic Should Be Here..." />
            </Card>
            
        </Card>
        
    </div>
}

export default ArtworkPage;