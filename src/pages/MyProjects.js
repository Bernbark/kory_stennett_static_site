import TitleCard from '../components/UI/TitleCard';
import Card from '../components/UI/Card';
import TwoFrameCard from '../components/UI/TwoFrameCard';
import LinkSlot from '../components/UI/LinkSlot';
import Warning from '../components/UI/Warning';
import React, { useState, useEffect, useCallback, Component } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { withRouter } from 'react-router'
function ProjectsPage (props){
    
    const { unityProvider, unload } = useUnityContext({
        loaderUrl: "kory_stennett_static_site/UnityBuilds/WebGL.loader.js",
        dataUrl: "kory_stennett_static_site/UnityBuilds/WebGL.data",
        frameworkUrl: "kory_stennett_static_site/UnityBuilds/WebGL.framework.js",
        codeUrl: "kory_stennett_static_site/UnityBuilds/WebGL.wasm",
        webglContextAttributes: {
            preserveDrawingBuffer: true,
          },
      });

      const [devicePixelRatio, setDevicePixelRatio] = useState(
    window.devicePixelRatio
  );
  useEffect(()=>{
    return ()=> unload
    },[])
    //<Unity unityProvider={unityProvider} style={{ width: 1200, height: 800}} devicePixelRatio={devicePixelRatio}/>
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
    return <div>
        <div>
            <TitleCard>
                <h1>
                    Projects
                </h1>
            </TitleCard>
            <TwoFrameCard>
                
                <Card><h2>Placeholder Title</h2><br></br><h3>Can't Decide Which Game To Post<br></br></h3></Card>
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