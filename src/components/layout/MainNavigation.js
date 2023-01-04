import { Link } from 'react-router-dom';
import css from './MainNavigation.module.css';
import { useMediaQuery } from 'react-responsive';
import LinkSlot from '../UI/LinkSlot';
import GlitchButton from '../UI/GlitchButton';
import Card from '../UI/Card';
import { useLocation } from "react-router-dom";
import { useState, } from 'react';
import React from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";

function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    console.log("forcing update")
    return () => setValue(value => value + 1); // update state to force render
    // An function that increment 👆🏻 the previous state like here 
    // is better than directly setting `value + 1`
  }

function MainNavigation(props) {

    const currentLocation = useLocation();
    
    //const forceUpdate = useForceUpdate();

    const { unityProvider, unload, isLoaded } = useUnityContext({
        loaderUrl: "kory_stennett_static_site/UnityBuilds/Build.loader.js",
        dataUrl: "kory_stennett_static_site/UnityBuilds/Build.data",
        frameworkUrl: "kory_stennett_static_site/UnityBuilds/Build.framework.js",
        codeUrl: "kory_stennett_static_site/UnityBuilds/Build.wasm",
        webglContextAttributes: {
            preserveDrawingBuffer: true,
          },
      });

    const toggleTheme = props.toggleTheme;
    
       
    var bgColors = { "Default": "#81b71a",
                    "Purple": "#B967FF",
                    "Blue": "#01CDFE",
                    "Green": "#05FFA1",
                    "Red": "#E9573F",
                    "Yellow": "#FFFB96",
    };
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    //onst isTabletOrMobile = useMediaQuery({ query: '(min-width: 1224px)' })
    const isSmall = useMediaQuery({ query: '(min-width: 800px) and (max-width: 1223px)' })
    const isTiny = useMediaQuery({ query: '(min-width: 555px) and (max-width: 799px)' })
    const isMiniscule = useMediaQuery({ query: '(min-width: 236px) and (max-width: 554px)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    
    return(
        <div>
            
            {isDesktopOrLaptop && <header className={css.header}>
                <GlitchButton>
                    
                    Portfolio
                </GlitchButton>
                <nav >
                    <ul>
                        <li >
                            <LinkSlot >
                                <div >
                                    <Link style={{color: "white"}} to='/home'>Home</Link>
                                </div>
                                
                            </LinkSlot>
                            
                        </li>
                        <li >
                            <LinkSlot >
                                <div> 
                                    <Link style={{color: "white"}} to='/projects'>Projects</Link>
                                </div>
                                
                            </LinkSlot>
                        </li>
                        <li > 
                            <LinkSlot>
                                <div>
                                    <Link style={{color: "white"}} to='/favorites'>Faves</Link>
                                </div>
                                
                            </LinkSlot>
                        </li>
                        <li >
                            <LinkSlot >
                                <div>
                                    <Link style={{color: "white"}} to='/artwork'>"Art"</Link>
                                </div>
                            </LinkSlot>
                        </li>
                       
                    </ul>
                </nav>
            </header>}
            
            {isSmall && <header className={css.headerPortrait}>
                <GlitchButton>
                    Portfolio
                </GlitchButton>
                <nav>
                    <ul>
                        <li >
                            <LinkSlot >
                                <div>
                                    <Link style={{color: "white"}} to='/home'>Home</Link>
                                </div>
                                
                            </LinkSlot>
                            
                        </li>
                        <li >
                            <LinkSlot>
                                <div>
                                    <Link style={{color: "white"}} to='/projects'>Projects</Link>
                                </div>
                                
                            </LinkSlot>
                        </li>
                        <li >
                            <LinkSlot>
                                <div>
                                    <Link style={{color: "white"}} to='/favorites'>Faves</Link>
                                </div>
                                
                            </LinkSlot>
                        </li>
                        <li >
                            <LinkSlot>
                                <div>
                                    <Link style={{color: "white"}} to='/artwork'>"Art"</Link>
                                </div>
                            </LinkSlot>
                        </li>
                    </ul>
                </nav>
            </header>}
            {isTiny && <header className={css.headerTiny}>
                <GlitchButton>
                    Portfolio
                </GlitchButton>
                <nav>
                    <ul>
                        <li >
                            <LinkSlot>
                                <div>
                                    <Link style={{color: "white"}} to='/home'>Home</Link>
                                </div>
                                
                            </LinkSlot>
                            
                        </li>
                        <li >
                            <LinkSlot>
                                <div>
                                    <Link style={{color: "white"}} to='/projects'>Projects</Link>
                                </div>
                                
                            </LinkSlot>
                        </li>
                        <li >
                            <LinkSlot>
                                <div>
                                    <Link style={{color: "white"}} to='/favorites'>Faves</Link>
                                </div>
                                
                            </LinkSlot>
                        </li>
                        <li >
                            <LinkSlot>
                                <div>
                                    <Link style={{color: "white"}} to='/artwork'>"Art"</Link>
                                </div>
                            </LinkSlot>
                        </li>
                    </ul>
                </nav>
            </header>}
            {isMiniscule && <header className={css.headerMini}>
                <GlitchButton>
                    Portfolio
                </GlitchButton>
                <nav>
                    <ul>
                        <Card>
                        <li >
                            
                            <LinkSlot >
                                <div >
                                    <Link style={{color: "white"}} to='/home'>Home</Link>
                                </div>
                                
                            </LinkSlot>
                            
                        </li>
                        <li >
                            <LinkSlot>
                                <div > 
                                    <Link style={{color: "white"}} to='/projects'>Projects</Link>
                                </div>
                                
                            </LinkSlot>
                        </li>
                        </Card>
                        <Card>
                        <li >
                            <LinkSlot >
                                <div >
                                    <Link style={{color: "white"}} to='/favorites'>Faves</Link>
                                </div>
                                
                            </LinkSlot>
                        </li>
                        <li >
                            <LinkSlot>
                                <div >
                                    <Link style={{color: "white"}} to='/artwork'>"Art"</Link>
                                </div>
                            </LinkSlot>
                        </li>
                        </Card>
                        
                    </ul>
                </nav>
            </header>}
        </div>);
        
        
    
}

export default MainNavigation;