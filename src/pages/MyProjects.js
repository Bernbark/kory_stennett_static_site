import TitleCard from '../components/UI/TitleCard';
import Card from '../components/UI/Card';
import TwoFrameCard from '../components/UI/TwoFrameCard';
import LinkSlot from '../components/UI/LinkSlot';
import Warning from '../components/UI/Warning';
import React, { useState, useEffect, useCallback, Component } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { withRouter } from 'react-router'
import { useMediaQuery } from 'react-responsive'
function ProjectsPage (props){
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1782px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1201px)' })
  //onst isTabletOrMobile = useMediaQuery({ query: '(min-width: 1224px)' })
  
  const isSmall = useMediaQuery({ query: '(max-width: 1200px)' })
  
    const { unityProvider, unload } = useUnityContext({
        loaderUrl: "kory_stennett_static_site/UnityBuilds/Build.loader.js",
        dataUrl: "kory_stennett_static_site/UnityBuilds/Build.data",
        frameworkUrl: "kory_stennett_static_site/UnityBuilds/Build.framework.js",
        codeUrl: "kory_stennett_static_site/UnityBuilds/Build.wasm",
        webglContextAttributes: {
            preserveDrawingBuffer: true,
          },
      });

      const [devicePixelRatio, setDevicePixelRatio] = useState(
    window.devicePixelRatio
  );
  
  const { isLoaded } = useUnityContext();
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

      async function handleClickBack() {
        
        console.log("Awaiting unload - Kory")
        
          unload();
          
        
        
            
        // Ready to navigate to another page.
      }
    return <div >
        <div>
            <TitleCard>
                <h1>
                    Projects
                </h1>
            </TitleCard>
            <TwoFrameCard>
              {isBigScreen && <Unity unityProvider={unityProvider} style={{ width: 1200, height: 800}} devicePixelRatio={devicePixelRatio}/>}
              {isSmall && <h1>Try playing on a larger screen for this game to appear here!</h1>}
                <Card><h2>Pinball Roguelite</h2><br></br><h3>***NOTE***<br></br>This game will continue running while you are on the site, and this is not intentional. Working on a fix, sorry!
                in the meantime, you'll have to do a site refresh to get it to stop running in the background. 
                <br></br><br></br>This is a really rough first draft of a pinball styled roguelite game.<br></br>It's made in 3D but is topdown which
                allows for some more fluid movement using Rigidbody.AddForce() and allowing the player to speed up or slow down by adding velocity to its rigidbody, instead of
                the 2D method, where the objects are essentially "teleporting" from one pixel to the next.</h3></Card>
            </TwoFrameCard>
            
            <section>
            
                    <Card>
                        <h2>
                            External Links
                            
                        </h2>
                    </Card>
                        <Warning>
                        <LinkSlot>
                            <div>
                            <a href='https://github.com/Bernbark'>Personal Github</a>
                            </div>
                            
                        </LinkSlot>
                        
                        </Warning>
                        <Warning>
                        <LinkSlot>
                            <div>
                            <a href='https://github.com/BernbarkProfessional'>Secondary Github</a>
                            </div>
                            
                        </LinkSlot>
                        
                        </Warning>
                    
                        <Warning>
                        <LinkSlot>
                            <div>
                            <a href='https://bernbarkprofessional.github.io/'>Experimental Website</a>
                            </div>
                            
                        </LinkSlot>
                        </Warning>
                    
            </section>
            
        </div>
    </div>
    
}
export default ProjectsPage;