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
import TwoFrameCard from '../UI/TwoFrameCard';

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
    
    const resume = "Resum"  
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
    if(props.classNameToGive == "dark"){
        return(
        
            <div>
                
                {isDesktopOrLaptop && <header className={css.headerDark}>
                    <GlitchButton classNameToGive={props.classNameToGive}>
                        
                        <a href="https://docs.google.com/document/d/1FuHNFoHAQAR9O71M0X-bYvt64PKxeqGm40HBqirFD9Y/edit?usp=sharing">{resume}&ecirc;</a> 
                    </GlitchButton>
                    <nav >
                        <ul>
                            <li >
                                <LinkSlot classNameToGive={props.classNameToGive}>
                                    
                                        <Link style={{color: "white"}} to='/home'>Home</Link>
                                    
                                    
                                </LinkSlot>
                                
                            </li>
                            <li >
                                <LinkSlot classNameToGive={props.classNameToGive}>
                                    
                                        <Link style={{color: "white"}} to='/projects'>Projects</Link>
                                    
                                    
                                </LinkSlot>
                            </li>
                            <li > 
                                <LinkSlot classNameToGive={props.classNameToGive}>
                                    
                                        <Link style={{color: "white"}} to='/favorites'>Faves</Link>
                                    
                                    
                                </LinkSlot>
                            </li>
                            <li >
                                <LinkSlot classNameToGive={props.classNameToGive}>
                                    
                                        <Link style={{color: "white"}} to='/artwork'>"Art"</Link>
                                    
                                </LinkSlot>
                            </li>
                            <li>
                                <LinkSlot classNameToGive={props.classNameToGive}>
                                    <button className={css.themeButton} onClick={event => {
                                        toggleTheme();
                                        
                                    }}>Toggle Theme</button>
                                </LinkSlot>
                           
                           </li>
                        </ul>
                    </nav>
                </header>}
                
                {isSmall && <header className={css.headerPortraitDark}>
                    <GlitchButton classNameToGive={props.classNameToGive}>
                    <a href="https://docs.google.com/document/d/1FuHNFoHAQAR9O71M0X-bYvt64PKxeqGm40HBqirFD9Y/edit?usp=sharing">{resume}&ecirc;</a> 
                    </GlitchButton>
                    <nav>
                        <ul>
                            <li >
                                <LinkSlot classNameToGive={props.classNameToGive}>
                                    
                                        <Link style={{color: "white"}} to='/home'>Home</Link>
                                    
                                    
                                </LinkSlot>
                                
                            </li>
                            <li >
                                <LinkSlot classNameToGive={props.classNameToGive}>
                                    
                                        <Link style={{color: "white"}} to='/projects'>Projects</Link>
                                    
                                    
                                </LinkSlot>
                            </li>
                            <li >
                                <LinkSlot classNameToGive={props.classNameToGive}>
                                    
                                        <Link style={{color: "white"}} to='/favorites'>Faves</Link>
                                    
                                    
                                </LinkSlot>
                            </li>
                            <li >
                                <LinkSlot classNameToGive={props.classNameToGive}>
                                    
                                        <Link style={{color: "white"}} to='/artwork'>"Art"</Link>
                                    
                                </LinkSlot>
                            </li>
                            <li>
                                <LinkSlot classNameToGive={props.classNameToGive}>
                                    <button className={css.themeButtonSmall} onClick={event => {
                                        toggleTheme();
                                        
                                    }}>Toggle Theme</button>
                                </LinkSlot>
                           
                           </li>
                        </ul>
                    </nav>
                </header>}
                {isTiny && <header className={css.headerTinyDark}>
                    <GlitchButton classNameToGive={props.classNameToGive}>
                    <a href="https://docs.google.com/document/d/1FuHNFoHAQAR9O71M0X-bYvt64PKxeqGm40HBqirFD9Y/edit?usp=sharing">{resume}&ecirc;</a> 
                    </GlitchButton>
                    <nav>
                        <ul>
                            <li >
                                <LinkSlot classNameToGive={props.classNameToGive}>
                                    
                                        <Link to='/home'>Home</Link>
                                    
                                    
                                </LinkSlot>
                                
                            </li>
                            <li >
                                <LinkSlot classNameToGive={props.classNameToGive}>
                                    
                                        <Link to='/projects'>Projects</Link>
                                    
                                    
                                </LinkSlot>
                            </li>
                            <li >
                                <LinkSlot classNameToGive={props.classNameToGive}>
                                    
                                        <Link to='/favorites'>Faves</Link>
                                    
                                    
                                </LinkSlot>
                            </li>
                            <li >
                                <LinkSlot classNameToGive={props.classNameToGive}>
                                    
                                        <Link to='/artwork'>"Art"</Link>
                                    
                                </LinkSlot>
                            </li>
                            <li>
                                <LinkSlot classNameToGive={props.classNameToGive}>
                                    <button className={css.themeButtonTiny} onClick={event => {
                                        toggleTheme();
                                        
                                    }}>Toggle Theme</button>
                                </LinkSlot>
                           
                           </li>
                        </ul>
                    </nav>
                </header>}
                {isMiniscule && <header className={css.headerMiniDark}>
                    <GlitchButton classNameToGive={props.classNameToGive}>
                    <a href="https://docs.google.com/document/d/1FuHNFoHAQAR9O71M0X-bYvt64PKxeqGm40HBqirFD9Y/edit?usp=sharing">{resume}&ecirc;</a> 
                    </GlitchButton>
                    <nav>
                        <ul>
                            
                            <li >
                                
                                <LinkSlot classNameToGive={props.classNameToGive}>
                                    
                                        <Link style={{color: "white"}} to='/home'>Home</Link>
                                    
                                    
                                </LinkSlot>
                                
                            </li>
                            <li >
                                <LinkSlot classNameToGive={props.classNameToGive}>
                                    
                                        <Link style={{color: "white"}} to='/projects'>Projects</Link>
                                    
                                    
                                </LinkSlot>
                            </li>
                            
                            
                            <li >
                                <LinkSlot classNameToGive={props.classNameToGive}>
                                    
                                        <Link style={{color: "white"}} to='/favorites'>Faves</Link>
                                    
                                    
                                </LinkSlot>
                            </li>
                            <li >
                                <LinkSlot classNameToGive={props.classNameToGive}>
                                    
                                        <Link style={{color: "white"}} to='/artwork'>"Art"</Link>
                                    
                                </LinkSlot>
                            </li>
                            <li>
                                <LinkSlot classNameToGive={props.classNameToGive}>
                                    <button className={css.themeButtonMini} onClick={event => {
                                        toggleTheme();
                                        
                                    }}>Theme</button>
                                </LinkSlot>
                           
                           </li>
                            
                            
                        </ul>
                    </nav>
                </header>}
            </div>);
            
            
        
    }
    
    else{
        return(
        
            <div>
                
                {isDesktopOrLaptop && <header className={css.header}>
                    <GlitchButton classNameToGive={props.classNameToGive}>
                        
                    <a href="https://docs.google.com/document/d/1FuHNFoHAQAR9O71M0X-bYvt64PKxeqGm40HBqirFD9Y/edit?usp=sharing">{resume}&ecirc;</a> 
                    </GlitchButton>
                    <nav >
                        <ul>
                            <li >
                                <LinkSlot classNameToGive={props.classNameToGive}>
                                    
                                        <Link  to='/home'>Home</Link>
                                    
                                    
                                </LinkSlot>
                                

                            </li>
                            <li >
                                <LinkSlot classNameToGive={props.classNameToGive}>
                                    
                                        <Link to='/projects'>Projects</Link>
                                    
                                    
                                </LinkSlot>
                            </li>
                            <li > 
                                <LinkSlot classNameToGive={props.classNameToGive}>
                                    
                                        <Link to='/favorites'>Faves</Link>
                                    
                                    
                                </LinkSlot>
                            </li>
                            <li >
                                <LinkSlot classNameToGive={props.classNameToGive}>
                                    
                                        <Link to='/artwork'>"Art"</Link>
                                    
                                </LinkSlot>
                            </li>
                            <li>
                                <LinkSlot classNameToGive={props.classNameToGive}>
                                <button className={css.themeButton} onClick={event => {
                                    toggleTheme();
                                    
                                }}>Toggle Theme</button>
                                </LinkSlot>
                           
                           </li>
                        </ul>
                    </nav>
                </header>}
                
                {isSmall && <header className={css.headerPortrait}>
                    <GlitchButton classNameToGive={props.classNameToGive}>
                    <a href="https://docs.google.com/document/d/1FuHNFoHAQAR9O71M0X-bYvt64PKxeqGm40HBqirFD9Y/edit?usp=sharing">{resume}&ecirc;</a> 
                    </GlitchButton>
                    <nav>
                        <ul>
                            <li >
                                <LinkSlot classNameToGive={props.classNameToGive}>
                                    
                                        <Link to='/home'>Home</Link>
                                    
                                    
                                </LinkSlot>
                                
                            </li>
                            <li >
                                <LinkSlot classNameToGive={props.classNameToGive}>
                                    
                                        <Link to='/projects'>Projects</Link>
                                    
                                    
                                </LinkSlot>
                            </li>
                            <li >
                                <LinkSlot classNameToGive={props.classNameToGive}>
                                    
                                        <Link to='/favorites'>Faves</Link>
                                    
                                    
                                </LinkSlot>
                            </li>
                            <li >
                                <LinkSlot classNameToGive={props.classNameToGive}>
                                    
                                        <Link to='/artwork'>"Art"</Link>
                                    
                                </LinkSlot>
                            </li>
                            <li>
                                <LinkSlot classNameToGive={props.classNameToGive}>
                                    <button className={css.themeButtonSmall} onClick={event => {
                                        toggleTheme();
                                        
                                    }}>Toggle Theme</button>
                                </LinkSlot>
                           
                           </li>
                        </ul>
                    </nav>
                </header>}
                {isTiny && <header className={css.headerTiny}>
                    <GlitchButton classNameToGive={props.classNameToGive}>
                    <a href="https://docs.google.com/document/d/1FuHNFoHAQAR9O71M0X-bYvt64PKxeqGm40HBqirFD9Y/edit?usp=sharing">{resume}&ecirc;</a> 
                    </GlitchButton>
                    <nav>
                        <ul>
                            <li >
                                <LinkSlot classNameToGive={props.classNameToGive}>
                                    
                                        <Link to='/home'>Home</Link>
                                    
                                    
                                </LinkSlot>
                                
                            </li>
                            <li >
                                <LinkSlot classNameToGive={props.classNameToGive}>
                                    
                                        <Link to='/projects'>Projects</Link>
                                    
                                    
                                </LinkSlot>
                            </li>
                            <li >
                                <LinkSlot classNameToGive={props.classNameToGive}>
                                    
                                        <Link to='/favorites'>Faves</Link>
                                    
                                    
                                </LinkSlot>
                            </li>
                            <li >
                                <LinkSlot classNameToGive={props.classNameToGive}>
                                    
                                        <Link to='/artwork'>"Art"</Link>
                                    
                                </LinkSlot>
                            </li>
                            <li>
                                <LinkSlot classNameToGive={props.classNameToGive}>
                                    <button className={css.themeButtonTiny} onClick={event => {
                                        toggleTheme();
                                        
                                    }}>Toggle Theme</button>
                                </LinkSlot>
                           
                           </li>
                        </ul>
                    </nav>
                </header>}
                {isMiniscule && <header className={css.headerMini}>
                    <GlitchButton classNameToGive={props.classNameToGive}>
                    <a href="https://docs.google.com/document/d/1FuHNFoHAQAR9O71M0X-bYvt64PKxeqGm40HBqirFD9Y/edit?usp=sharing">{resume}&ecirc;</a> 
                    </GlitchButton>
                    <nav>
                        <ul>
                            
                            <li >
                                
                                <LinkSlot classNameToGive={props.classNameToGive}>
                                    
                                        <Link style={{color: "white"}} to='/home'>Home</Link>
                                    
                                    
                                </LinkSlot>
                                
                            </li>
                            <li >
                                <LinkSlot classNameToGive={props.classNameToGive}>
                                    
                                        <Link style={{color: "white"}} to='/projects'>Projects</Link>
                                    
                                    
                                </LinkSlot>
                            </li>
                            
                            
                            <li >
                                <LinkSlot classNameToGive={props.classNameToGive}>
                                    
                                        <Link style={{color: "white"}} to='/favorites'>Faves</Link>
                                    
                                    
                                </LinkSlot>
                            </li>
                            <li >
                                <LinkSlot classNameToGive={props.classNameToGive}>
                                    
                                        <Link style={{color: "white"}} to='/artwork'>"Art"</Link>
                                    
                                </LinkSlot>
                            </li>
                            <li>
                                <LinkSlot classNameToGive={props.classNameToGive}>
                                    <button className={css.themeButtonMini} onClick={event => {
                                        toggleTheme();
                                        
                                    }}>Theme</button>
                                </LinkSlot>
                           
                           </li>
                            
                            
                        </ul>
                    </nav>
                </header>}
            </div>);
            
            
        
    }
    }
    

export default MainNavigation;