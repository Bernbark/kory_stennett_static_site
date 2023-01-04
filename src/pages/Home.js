import myPic from '../Images/My_Pic.jpg'
import Card from '../components/UI/Card';
import Warning from '../components/UI/Warning';
import { useState } from 'react';



function HomePage(props){

    const classNameString = props.classNameToGive;
    
    return (
        
        
            
        
        
        <div>
            
                <div>
                    <Warning>
                        <Card classNameToGive={props.classNameToGive}>
                            

                            
                            <h2>Welcome to my website!</h2>
                            <p>Let's talk about why this website exists.<br></br></p>
                            <p>This is a place to post my projects and thoughts to the internet. It exists also as a 
                                place for me to practice programming techniques, so in a way this is an experimental playground as well.
                            </p>
                            
                            
                            
                            
                        </Card>
                    </Warning>
                </div>
                
                
                
            <Warning>
                <Card classNameToGive={classNameString}>
                    <h2>About Me</h2>
                    <p>I have been learning programming practices in Java, C#, Python, Javascript, HTML/CSS, PHP, SQL, and XML for the last three years in order to one day obtain employment as a software developer.</p>

                    <p>It's time for me to get serious about creating a presence for myself while applying for positions.
                        I believe that building this website will help give a human element to the applications I send, and I hope that someone sees this and can tell just how hard I am trying to get my foot in the door of this exciting field.</p>
                    
                    <Card classNameToGive={classNameString}>
                        <a href="https://docs.google.com/document/d/1FuHNFoHAQAR9O71M0X-bYvt64PKxeqGm40HBqirFD9Y/edit?usp=sharing">Resume</a>
                    </Card>
                    <img src={myPic} alt="My Pic Should Be Here..." />
                    
                </Card>
            </Warning>
            
            
        </div>
            
        
            
    );
    
}

export default HomePage;