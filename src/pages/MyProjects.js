import TitleCard from '../components/UI/TitleCard';
import Card from '../components/UI/Card';
import LinkSlot from '../components/UI/LinkSlot';
import React, { useState, useEffect, useCallback, Component } from "react";
import {  useUnityContext } from "react-unity-webgl";
import { useMediaQuery } from 'react-responsive'
import MidTitleCard from '../components/UI/MidTitleCard';
import NeoCard from '../components/UI/NeoCard';
import Column from '../components/UI/Column';
import ThreeColumnHolder from '../components/UI/ThreeColumnHolder';
import android1 from '../Images/android_1.PNG';
import android2 from '../Images/android_2.PNG';
import androidCode1 from '../Images/android_code_1.PNG';
import android4 from '../Images/android_4.PNG';
import Modal from 'react-modal';
import css from './MyModal.module.css';
import unity1 from '../Images/unity_1.PNG';
import homie1 from '../Images/homiebot_1.PNG';
import homie2 from '../Images/homiebot_3.PNG';
import homie3 from '../Images/homiebot_4.PNG';
import homie4 from '../Images/homiebot_5.PNG';

Modal.setAppElement(document.getElementById('root'));
    
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };


function ProjectsPage (props){
  const [androidModal1, setIsOpen1] = React.useState(false);
  const [androidModal2, setIsOpen2] = React.useState(false);
  const [androidModal3, setIsOpen3] = React.useState(false);
  function openModal1() {
    setIsOpen1(true);
  }

  function closeModal1() {
    setIsOpen1(false);
  }

  function openModal2() {
    setIsOpen2(true);
  }

  function closeModal2() {
    setIsOpen2(false);
  }
  function openModal3() {
    setIsOpen3(true);
  }

  function closeModal3() {
    setIsOpen3(false);
  }

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 800px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1201px)' })
  const isSmall = useMediaQuery({ query: '(max-width: 799px)' })

  const { unityProvider, unload, isLoaded, loadingProgression  } = useUnityContext({
      loaderUrl: "kory_stennett_static_site/projects/#/UnityBuilds/Build.loader.js",
      dataUrl: "kory_stennett_static_site/projects/#/UnityBuilds/Build.data",
      frameworkUrl: "kory_stennett_static_site/projects/#/UnityBuilds/Build.framework.js",
      codeUrl: "kory_stennett_static_site/projects/#/UnityBuilds/Build.wasm",
      webglContextAttributes: {
          preserveDrawingBuffer: true,
        },
    });

  const [devicePixelRatio, setDevicePixelRatio] = useState(
    window.devicePixelRatio
  );
  
  const classNameString = props.classNameToGive;
      
    return <div >
        <div>
            <TitleCard classNameToGive={classNameString}>
                <h1>
                    Projects
                </h1>
            </TitleCard>
            <ThreeColumnHolder col1={<Column>
                      <MidTitleCard classNameToGive={classNameString}>
                          <h1>
                              Android Studio
                              
                          </h1>
                      </MidTitleCard>
                      <ul style={{listStyle:'none'}}>
                        <li>One of my favorite projects was an app called the SMARTPrototype, which was meant to help make difficult decisions easier by breaking them down into small parts,
                          asking questions based on what's more important to the user, and then weighing those results with numbers the user can evaluate their options with.
                        </li>
                        <br></br>
                        <li>It's easier to show this project while explaining it, so let's explore a little bit.</li>
                        <br></br>
                        <li>SMARTPrototype was an idea created by people trying to make complicated decisions with many moving parts. In our example let's say you have 3 jobs you're considering
                          and it's a tough choice between Programmer, Web Developer, or Internet Troll.
                        </li>
                        <br></br>
                        <li><img src={android1}></img></li>
                        <br></br>
                        <li>The program will prompt you for a few things before beginning, such as how many things are you choosing between, and how many deciding factors are there.
                          Deciding factors could be things like traffic versus enjoyability of working at a certain place. The things you're choosing between in that scenario are jobs.
                        </li>
                        <br></br>
                        <li><img src={android2}></img></li>
                        {isDesktopOrLaptop && <button onClick={openModal1}>Enlarge Image</button>}
                        
                        <br></br>
                        <Modal
                          isOpen={androidModal1}
                          className={css.fitModal}
                          onRequestClose={closeModal1}
                          style={customStyles}
                          contentLabel="Android Example"
                          contentElement={(props, children) => <div {...props}>{children}</div>}
                        ><p>Notice how the app doesn't ask your opinion on Traffic vs. Gas, because it knows we've answered that question in reverse</p><img src={android2}></img></Modal>
                        <li>I had to do some fancy footwork to get the program to automatically reverse answer some of the questions, otherwise we could be asking the user twice as many
                           questions as would be necessary. That's because if we have already rated Gas versus Traffic, for example, why would we need to know Traffic vs Gas?
                        </li>
                        <br></br>
                        <li>
                          To break it down further, each Deciding Factor is going to get a weight from 1-5 based on you the value you give it here. This is the first level of abstraction that 
                          helps to break down big problems into smaller, bit sized pieces. So if we rate Gas at a 5 compared to Traffic, the program automatically knows that Traffic is 
                          a 1 compared to Gas right? And here is the fun snippet of code that helped me accomplish that.
                        </li>
                        <br></br>
                        <li><img src={androidCode1}></img></li>
                        {isDesktopOrLaptop && <button onClick={openModal2}>Enlarge Image</button>}
                        <br></br>
                        <Modal
                          id='code1'
                          isOpen={androidModal2}
                          
                          onRequestClose={closeModal2}
                          style={customStyles}
                          contentLabel="Android Example"
                          contentElement={(props, children) => <div {...props}>{children}</div>}>
                            <p>
                              <ul>
                                <li>
                                  results: An ArrayList of all of the Deciding Factors. Today I would label this variable something more like decidingFactors for clarity.
                                </li>
                                <br></br>
                                <li>
                                  weights: An ArrayList of all of the weights provided by the user, which will be used to populate the weightedValues list.
                                </li>
                                <br></br>
                                <li>
                                  weightedValues: A list of all of the weighted values which is populated in order for creation of the chart at the end of the program's flow.
                                </li>
                                </ul>
                              </p><img src={androidCode1}></img>
                          </Modal>
                          <br></br>
                          <li>
                            The fancy footwork here is in the inner for loop, where I needed to start halfway in from the chart in order to successfully populate the rest of the
                             weightedValues list. It took visualisation of the problem using diagrams and quite a few hours of pulling my hair out to finally get this working, but
                             now it works like a dream!
                          </li>
                          <br></br>
                          <li><img src={android4}></img></li>
                          {isDesktopOrLaptop && <button onClick={openModal3}>Enlarge Image</button>}
                        <br></br>
                        <Modal
                          isOpen={androidModal3}
                          
                          onRequestClose={closeModal3}
                          style={customStyles}
                          contentLabel="Android Example"
                          contentElement={(props, children) => <div {...props}>{children}</div>}>
                            <p>
                              <ul>
                                <h2 style={{fontWeight:'700'}}>Choices</h2>
                                <li>
                                  Programmer: Weighed highly by the user for all three Deciding Factors.
                                </li>
                                <br></br>
                                <li>
                                  Web Designer: Weighed highly by the user for all three Deciding Factors.
                                </li>
                                <br></br>
                                <li>
                                  Troll: Rated low as possible for all three Deciding Factors.
                                </li>
                                <h2 style={{fontWeight:'700'}}>Deciding Factors</h2>
                                <li>Gas: The user decided whether gas prices to get to this job were affordable or not and weighed this value against the other factors.</li>
                                <br></br>
                                <li>Traffic: The user decided how long each job would make them spend in traffic and weighed this value against the other factors.</li>
                                <br></br>
                                <li>Enjoyment: The user decided whether this job would be enjoyable or not and weighed this value against the other factors.</li>
                                <br></br>
                                
                                </ul>
                              </p><img src={android4}></img>
                          </Modal>
                          <br></br>
                          <li>In this example, we've whittled away Troll as a particular job choice, not only was it expensive to be one according to the user, but it wasn't
                                   enjoyable AND they spent all day in traffic! With this information so easily broken down in front of us, it's easy to imagine how we could break 
                                   down more serious problems.
                                </li>
                                <br></br>
                                <li>The program allowed for up to 7 choices and 7 Deciding Factors, and the chart would change depending on these numbers. I stopped at 7 because
                                  it made sense for the screen size of most phones, but technically it could be an infinite number of rows and columns if desired.
                                </li>
                                <br></br>
                                <li>This was my first experience with Android Studio and overall a very fun project to make, especially since it can actually be useful in real life.</li>
                                <br></br>
                                <li>Github repo: <a href='https://github.com/Bernbark/SMARTPrototype'>SMARTPrototype</a></li>
                      </ul>
                    </Column>
                  }


                  /* column 2 */


                  col2={<Column>
                    <MidTitleCard classNameToGive={classNameString}>
                        <h1>
                            Unity
                            
                        </h1>
                    </MidTitleCard>
                    <ul style={{listStyle:'none'}}>
                      <li>One of my favorite tools to work with is Unity. And my favorite project has certainly been Custom Tower Defense, a game where you get to build the 
                        path that enemies take by placing down towers to block their way. I accomplished the pathfinding by using A* pathfinding, a free library for Unity developers
                        to help give life to how objects move and follow in the game.
                      </li>
                      <br></br>
                      <li>Custom TD was not just a tower defense game, but also an idle game, with multiple currencies to be earned over time, including gold, blood magic, and kills.
                        Yes, even kills eventually became a currency you could spend, and begin to automatically earn over time. ustom TD is definitely still a WIP and I revisit it from time to time.
                      </li>
                      <br></br>
                      <li>
                        I learned a lot from this project, including the beginnings of AGILE methodologies, where I went from making every script interact with each other in various ways, to 
                        trying to only have one endpoint and one entrance for each method/class. One example is this tooltip class which allows for creating tooltips dynamically from any other
                        class:
                      </li>
                      <br></br>
                      <li><img src={unity1}></img></li>
                      <br></br>
                      <li>As you can see, I am using a single script to control the tooltips. The only regretful thing about this method is that we need to keep track of where all these static
                        tooltip calls are being made. Of course, Visual Studio, they track those references for me, but in a project with 100's of tooltips it may become a problem to track all
                        of them. In that case I would probably make a TooltipManager class that could keep all of my tooltip references in one place, although it would make dynamic tooltips 
                        more difficult, and we often need tooltips to change based on the cost of an item or some other value.
                      </li>
                      <br></br>
                      <li>Here's a video demo-ing some of the features of the game!</li>
                      <br></br>
                      <iframe width="300" height="240" src="https://www.youtube.com/embed/hR7CuXOqgn8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                      
                      <li>Feel free to check out my YouTube for other Unity projects I've worked on!
                      </li>
                      <br></br>
                      <li>Github repo: <a href='https://github.com/Bernbark/CustomTowerDefense'>Custom TD</a></li>
                    </ul>
                  </Column>}


                  /* column 3 */


                  col3={<Column>
                      <MidTitleCard classNameToGive={classNameString}>
                          <h1>
                              Discord API
                              
                          </h1>
                      </MidTitleCard>
                      <ul style={{listStyle:'none'}}>
                        <li>I like working with and learning new APIs, including Discord's which allowed me to create the Homiebot using Python.
                        </li>
                        <br></br>
                        <li>Homiebot is a snarky Discord bot that allows for all of the usual moderation of a server, such as banning, blacklisting, erasing messages, and more.</li>
                        <br></br>
                        <li><img src={homie1}></img></li>
                        <br></br>
                        <li>It also saved user profiles to a local Mongo database, which allowed me to have games and other fun functionality available. All of the games were tied
                          together by the gold you earned from them. There was Math Wizard, gambling, and the battle system.
                        </li>
                        <br></br>
                        <li><img src={homie2}></img></li>
                        <br></br>
                        <li>Users had their own profiles, plus they could view the profiles of other users at any times. Profiles allowed for saving of Gifs and images for even more
                          personalization. This was accomplished through Mongo libraries imported to my Python project that allowed for easy update, insert, and deletion of records.
                        </li>
                        <br></br>
                        <li><img src={homie3}></img></li>
                        <br></br>
                        <li>The battle system allowed users to earn stats and more gold as well as items that could also bolster their stats. The inventory system required a unique
                          solution because I wanted items to be unique, and generated randomly. My solution was to create a second database collection to store the items as they were made, 
                          and those items had a reference ID that would always be a unique number, so I kept an array of numbers in each character's profile. When the user wanted to see their
                          inventory, the database would read their array of item IDs, and then go into the item collection and seek those IDs to be displayed.
                        </li>
                        <br></br>
                        
                        <li><img src={homie4}></img></li>
                        
                        <br></br>
                        <li>While Homiebot is still a WIP, production has slowed down on it, but my friends definitely beg me to activate the bot for the occasional Math Wizard game!</li>
                        <br></br>
                        <li>GitHub repo: <a href='https://github.com/Bernbark/HomieBot'>Homiebot</a></li>
                        
                      </ul>
                    </Column>}>
            
                    
            </ThreeColumnHolder>
            <Card classNameToGive={classNameString}>
            <MidTitleCard classNameToGive={classNameString}>
                          <h1>
                              External Links
                              
                          </h1>
                      </MidTitleCard>
            <NeoCard classNameToGive={classNameString}>
              <div >
                <h3>Here is a collection of some of my past works, including GitHub portfolios, a second, more experimental website, and my prototype game collection on Itch.io!</h3>
              </div>
              
              <div>
            
                    
                    <Card classNameToGive={classNameString}>
                      
                        <LinkSlot classNameToGive={classNameString}>
                            
                            <a href='http://database-fun.herokuapp.com/'>Leave a Message!</a>
                            
                            
                        </LinkSlot>
                        <br></br>
                        <LinkSlot classNameToGive={classNameString}>
                            
                            <a href='https://github.com/Bernbark'>Personal Github</a>
                            
                            
                        </LinkSlot>
                        
                        <br></br>
                        <LinkSlot classNameToGive={classNameString}>
                            
                            <a href='https://github.com/BernbarkProfessional'>Secondary Github</a>
                            
                            
                        </LinkSlot>
                        
                        
                        <br></br>
                        
                        <LinkSlot classNameToGive={classNameString}>
                            
                            <a href='https://bernbarkprofessional.github.io/'>Experimental Website</a>
                            
                            
                        </LinkSlot>
                        <br></br>
                        <LinkSlot classNameToGive={classNameString}>
                  
                          <a href='https://bernbark.itch.io/'>Itch Collection</a>
                          
                          
                        </LinkSlot>
                    </Card>
                        
                    
            </div>
            </NeoCard>
            </Card>
      
            
        </div>
    </div>
    
}
export default ProjectsPage;