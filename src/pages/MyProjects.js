import TitleCard from '../components/UI/TitleCard';
import Card from '../components/UI/Card';
import TwoFrameCard from '../components/UI/TwoFrameCard';
import LinkSlot from '../components/UI/LinkSlot';
import Warning from '../components/UI/Warning';
import React, { useState, useEffect, useCallback } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
function ProjectsPage(){
    const { unityProvider } = useUnityContext({
        loaderUrl: "kory_stennett_static_site/UnityBuilds/WebGl.loader.js",
        dataUrl: "kory_stennett_static_site/UnityBuilds/WebGl.data",
        frameworkUrl: "kory_stennett_static_site/UnityBuilds/WebGl.framework.js",
        codeUrl: "kory_stennett_static_site/UnityBuilds/WebGl.wasm",
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
    return <div>
        <div>
            <TitleCard>
                <h1>
                    Projects
                </h1>
            </TitleCard>
            <TwoFrameCard>
                <Unity unityProvider={unityProvider} style={{ width: 1200, height: 800}} devicePixelRatio={devicePixelRatio}/>
                <Card><h2>Streamer Simulator Idle</h2><br></br><h3>DOES NOT CURRENTLY SAVE IN WEBGL!!! <br></br>This game definitely has some porting issues, I'm working on it! Hit Tab to open
                    and close the Chat and Stats windows. It's an idle game where you are a streamer who is
                    trying to earn enough money and fame to get back to the Intergalactic War with the Stats
                    and money they earned during their time on Earth.</h3></Card>
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