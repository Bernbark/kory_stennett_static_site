import TitleCard from '../components/UI/TitleCard';
import Card from '../components/UI/Card';
import TwoFrameCard from '../components/UI/TwoFrameCard';
import LinkSlot from '../components/UI/LinkSlot';
import Warning from '../components/UI/Warning';
import React, { useState, useEffect, useCallback, Component } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { withRouter } from 'react-router'
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
    query: '(min-width: 1782px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1201px)' })
  //onst isTabletOrMobile = useMediaQuery({ query: '(min-width: 1224px)' })
  
  const isSmall = useMediaQuery({ query: '(max-width: 1200px)' })
  
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
      const handleChangePixelRatio = useCallback(
        function () {
          // A function which will update the device pixel ratio of the Unity
          // Application to match the device pixel ratio of the browser.
          const updateDevicePixelRatio = function () {
            setDevicePixelRatio(window.devicePixelRatio);
          };
          // A media matcher which watches for changes in the device pixel ratio.
          const mediaMatcher = window.matchMedia(
            `screen and (resolution: ${devicePixelRatio}dppx)`
          );
          // Adding an event listener to the media matcher which will update the
          // device pixel ratio of the Unity Application when the device pixel
          // ratio changes.
          mediaMatcher.addEventListener("change", updateDevicePixelRatio);
          return function () {
            // Removing the event listener when the component unmounts.
            mediaMatcher.removeEventListener("change", updateDevicePixelRatio);
          };
        },
        [devicePixelRatio]
      );

      /**
       * <TwoFrameCard>
              {isBigScreen && <div>
                <p>Loading Application... {Math.round(loadingProgression * 100)}%</p>
              <Unity unityProvider={unityProvider} style={{ width: 1200, height: 800, visibility: isLoaded ? "visible" : "hidden" }} devicePixelRatio={devicePixelRatio}/>
              </div>}
              {isSmall && <h1>Try playing on a larger screen for this game to appear here!</h1>}
                <Card><h2>Pinball Roguelite</h2><br></br><h3>***NOTE***<br></br>This game will continue running while you are on the site, and this is not intentional. Working on a fix, sorry!
                in the meantime, you'll have to do a site refresh to get it to stop running in the background. 
                <br></br><br></br>This is a really rough first draft of a pinball styled roguelite game.<br></br>It's made in 3D but is topdown which
                allows for some more fluid movement using Rigidbody.AddForce() and allowing the player to speed up or slow down by adding velocity to its rigidbody, instead of
                the 2D method, where the objects are essentially "teleporting" from one pixel to the next.</h3></Card>
            </TwoFrameCard>
       */
      
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
                        <button onClick={openModal1}>Enlarge Image</button>
                        <br></br>
                        <Modal
                          isOpen={androidModal1}
                          
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
                        <button onClick={openModal2}>Enlarge Image</button>
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
                        <button onClick={openModal3}>Enlarge Image</button>
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
              <Card classNameToGive={classNameString}>
                <h3>Here is a collection of some of my past works, including GitHub portfolios, a second, more experimental website, and my prototype game collection on Itch.io!</h3>
              </Card>
              
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