import myPic from '../Images/My_Pic.jpg'
import Card from '../components/UI/Card';
import Warning from '../components/UI/Warning';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import LinkSlot from '../components/UI/LinkSlot';
import NeoCard from '../components/UI/NeoCard';
import NewMeetupPage from './NewMeetup';
import TitleCard from '../components/UI/TitleCard';



function HomePage(props){

    const classNameString = props.classNameToGive;
    
    return (
        
        
            
        
        
        <div>
            
                <div>
                    
                        <TitleCard classNameToGive={props.classNameToGive}>
                            

                            
                            <h1>- Kory Stennett -</h1>
                            
                            <p>showcasing my projects, techniques and experiments</p>                    
                            
                            
                            
                        </TitleCard>
                        
                </div>
                
                
                
            
                <Card classNameToGive={classNameString}>
                    <h2>About Me</h2>
                    <p>I have been learning programming practices in Java, C#, Python, Javascript, HTML/CSS, PHP, SQL, and XML in order to one day obtain employment as a software developer.</p>

                    <p>It's time for me to get serious about creating a presence for myself while applying for positions.
                        I believe that building this website will help give a human element to the applications I send, and I hope that someone sees this and can tell just how hard I am trying to get my foot in the door of this exciting field.</p>
                    
                    <NeoCard classNameToGive={classNameString}>
                        <LinkSlot classNameToGive={classNameString}>
                        <a href='http://database-fun.herokuapp.com/'>Leave a Message!</a>
                        </LinkSlot>
                        <br></br>
                        <LinkSlot classNameToGive={classNameString}>
                        <a href="https://docs.google.com/document/d/1FuHNFoHAQAR9O71M0X-bYvt64PKxeqGm40HBqirFD9Y/edit?usp=sharing">Resum&ecirc;</a>
                        </LinkSlot>
                        
                    </NeoCard>
                    <NeoCard classNameToGive={classNameString}>
                        <img src={myPic} alt="My Pic Should Be Here..." />
                    </NeoCard>
                    
                    
                </Card>
            
            
            
        </div>
            
        
            
    );
    
}

export default HomePage;