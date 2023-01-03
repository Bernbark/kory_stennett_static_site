import { Link } from 'react-router-dom';
import css from './MainNavigation.module.css';
import { useMediaQuery } from 'react-responsive';
import LinkSlot from '../UI/LinkSlot';
import GlitchButton from '../UI/GlitchButton';
import Card from '../UI/Card';



function MainNavigation() {
    
      function handleClickBack() {
        window.location.reload(false);
        console.log("Refreshed on click back");
        // Ready to navigate to another page.
      }
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
                <nav onClick={handleClickBack}>
                    <ul>
                        <li>
                            <LinkSlot >
                                <div >
                                    <Link  style={{color: "white"}} to='/kory_stennett_static_site'>Home</Link>
                                </div>
                                
                            </LinkSlot>
                            
                        </li>
                        <li>
                            <LinkSlot >
                                <div> 
                                    <Link  style={{color: "white"}} to='/projects'>Projects</Link>
                                </div>
                                
                            </LinkSlot>
                        </li>
                        <li>
                            <LinkSlot>
                                <div>
                                    <Link style={{color: "white"}} to='/favorites'>Faves</Link>
                                </div>
                                
                            </LinkSlot>
                        </li>
                        <li>
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
                        <li>
                            <LinkSlot >
                                <div>
                                    <Link style={{color: "white"}} to='/kory_stennett_static_site'>Home</Link>
                                </div>
                                
                            </LinkSlot>
                            
                        </li>
                        <li>
                            <LinkSlot>
                                <div>
                                    <Link style={{color: "white"}} to='/projects'>Projects</Link>
                                </div>
                                
                            </LinkSlot>
                        </li>
                        <li>
                            <LinkSlot>
                                <div>
                                    <Link style={{color: "white"}} to='/favorites'>Faves</Link>
                                </div>
                                
                            </LinkSlot>
                        </li>
                        <li>
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
                        <li>
                            <LinkSlot>
                                <div>
                                    <Link style={{color: "white"}} to='/kory_stennett_static_site'>Home</Link>
                                </div>
                                
                            </LinkSlot>
                            
                        </li>
                        <li>
                            <LinkSlot>
                                <div>
                                    <Link style={{color: "white"}} to='/projects'>Projects</Link>
                                </div>
                                
                            </LinkSlot>
                        </li>
                        <li>
                            <LinkSlot>
                                <div>
                                    <Link style={{color: "white"}} to='/favorites'>Faves</Link>
                                </div>
                                
                            </LinkSlot>
                        </li>
                        <li>
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
                        <Card style={{backgroundColor:bgColors.Purple}}>
                        <li>
                            
                            <LinkSlot >
                                <div >
                                    <Link style={{color: "white"}} to='/kory_stennett_static_site'>Home</Link>
                                </div>
                                
                            </LinkSlot>
                            
                        </li>
                        <li>
                            <LinkSlot>
                                <div > 
                                    <Link style={{color: "white"}} to='/projects'>Projects</Link>
                                </div>
                                
                            </LinkSlot>
                        </li>
                        </Card>
                        <Card style={{backgroundColor:bgColors.Purple}}>
                        <li >
                            <LinkSlot >
                                <div >
                                    <Link style={{color: "white"}} to='/favorites'>Faves</Link>
                                </div>
                                
                            </LinkSlot>
                        </li>
                        <li>
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