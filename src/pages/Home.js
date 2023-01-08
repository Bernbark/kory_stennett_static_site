import myPic from '../Images/My_Pic.jpg'
import Card from '../components/UI/Card';
import Warning from '../components/UI/Warning';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import LinkSlot from '../components/UI/LinkSlot';
import NeoCard from '../components/UI/NeoCard';
import NewMeetupPage from './NewMeetup';
import TitleCard from '../components/UI/TitleCard';
import Column from '../components/UI/Column';



function HomePage(props){

    const classNameString = props.classNameToGive;
    
    return (
        
        
            
        
        
        <div>
            
                <div>
                    
                        <TitleCard classNameToGive={props.classNameToGive}>
                            

                            
                            <h1>Kory Stennett</h1>
                            
                            <p>showcasing my projects, techniques and experiments</p>                    
                            
                            
                            
                        </TitleCard>
                        
                </div>
                
                
                
            
                <Card classNameToGive={classNameString}>
                    <h2>About Me</h2>
                    <p>I have been learning programming practices in Java, C#, Python, Javascript, HTML/CSS, PHP, SQL, and XML in order to one day obtain employment as a software developer.</p>

                    <p>It's time for me to get serious about creating a presence for myself while applying for positions.
                        I believe that building this website will help give a human element to the applications I send, and I hope that someone sees this and can tell just how hard I am trying to get my foot in the door of this exciting field.</p>
                    <NeoCard classNameToGive={classNameString}>
                        <p>I am here both as a learner and as someone who genuinely enjoys crafting programs to do my bidding. I have interests in:</p>
                        <ul>
                            <li>
                                <p>Game Programming</p>
                            </li>
                            <li>
                                <p>Web Programming/Design</p>
                            </li>
                            <li>
                                <p>UI/UX Design</p>
                            </li>
                            <li>
                                <p>Software Engineering</p>
                            </li>
                            <li>
                                <p>Data Science</p>
                            </li>
                            <li>
                                <p>Electronics</p>
                            </li>
                            <li>
                                <p>Database Management</p>
                            </li>
                        </ul>
                    </NeoCard>
                    <Card classNameToGive={classNameString}>
                        <p>I decided to become a programmer while already attending college, and so far it has been an awesome experience! Sure, sometimes the bugs can be frustrating, 
                            but the overall good feeling that comes from making something work the way I intended is hard to beat.
                        </p>
                        <br></br>
                        <p>My initial decision to start programming revolved around wanting to make my own fun games, specifically tower defense games, card games, rogue-lites, and shooters.
                            I think games are awesome, and I'd love to be a part of that industry.
                        </p>
                        <br></br>
                        <p>I'm ready to start working in the industry at an intern/junior level. With a solid company I believe I could soak in how to produce production-level code very quickly.
                            I eagerly anticipate the opportunity to work with a company that will take a chance on me, and I will not let them down!
                        </p>
                        
                    </Card>
                    <NeoCard classNameToGive={classNameString}>
                        <p>Feel free to leave me a message by clicking the link below, you don't need to leave a real email address, it sends the message to a personal MongoDB collection. 
                            Alternatively you can contact me at korystennett@gmail.com</p>
                        <p></p>
                        <p>Thank you!</p>
                    </NeoCard>
                    <Column>
                        <LinkSlot classNameToGive={classNameString}>
                        <a href='http://database-fun.herokuapp.com/'>Leave a Message!</a>
                        </LinkSlot>
                        <br></br>
                        <LinkSlot classNameToGive={classNameString}>
                        <a href="https://docs.google.com/document/d/1FuHNFoHAQAR9O71M0X-bYvt64PKxeqGm40HBqirFD9Y/edit?usp=sharing">Resum&ecirc;</a>
                        </LinkSlot>
                        
                    </Column>
                    <NeoCard classNameToGive={classNameString}>
                        <img src={myPic} alt="My Pic Should Be Here..." />
                    </NeoCard>
                    
                    
                </Card>
            
            
            
        </div>
            
        
            
    );
    
}

export default HomePage;