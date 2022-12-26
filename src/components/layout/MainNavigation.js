import { Link } from 'react-router-dom';
import css from './MainNavigation.module.css';
import { useMediaQuery } from 'react-responsive';
import LinkSlot from '../UI/LinkSlot';
import GlitchButton from '../UI/GlitchButton';



function MainNavigation() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    //onst isTabletOrMobile = useMediaQuery({ query: '(min-width: 1224px)' })
    const isSmall = useMediaQuery({ query: '(min-width: 800px) and (max-width: 1223px)' })
    const isTiny = useMediaQuery({ query: '(min-width: 327px) and (max-width: 799px)' })
    const isMiniscule = useMediaQuery({ query: '(min-width: 236px) and (max-width: 326px)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    
    return(
        <div>
            {isDesktopOrLaptop && <header className={css.header}>
                <GlitchButton>
                    
                    Portfolio
                </GlitchButton>
                <nav>
                    <ul>
                        <li>
                            <LinkSlot>
                                <div>
                                    <Link to='/kory_stennett_static_site'>Home</Link>
                                </div>
                                
                            </LinkSlot>
                            
                        </li>
                        <li>
                            <LinkSlot>
                                <div>
                                    <Link to='/new-meetup'>Projects</Link>
                                </div>
                                
                            </LinkSlot>
                        </li>
                        <li>
                            <LinkSlot>
                                <div>
                                    <Link to='/favorites'>Faves</Link>
                                </div>
                                
                            </LinkSlot>
                        </li>
                        <li>
                            <LinkSlot>
                                <div>
                                    <Link to='/artwork'>"Art"</Link>
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
                            <LinkSlot>
                                <div>
                                    <Link to='/kory_stennett_static_site'>Home</Link>
                                </div>
                                
                            </LinkSlot>
                            
                        </li>
                        <li>
                            <LinkSlot>
                                <div>
                                    <Link to='/new-meetup'>Projects</Link>
                                </div>
                                
                            </LinkSlot>
                        </li>
                        <li>
                            <LinkSlot>
                                <div>
                                    <Link to='/favorites'>Faves</Link>
                                </div>
                                
                            </LinkSlot>
                        </li>
                        <li>
                            <LinkSlot>
                                <div>
                                    <Link to='/artwork'>"Art"</Link>
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
                                    <Link to='/kory_stennett_static_site'>Home</Link>
                                </div>
                                
                            </LinkSlot>
                            
                        </li>
                        <li>
                            <LinkSlot>
                                <div>
                                    <Link to='/new-meetup'>Projects</Link>
                                </div>
                                
                            </LinkSlot>
                        </li>
                        <li>
                            <LinkSlot>
                                <div>
                                    <Link to='/favorites'>Faves</Link>
                                </div>
                                
                            </LinkSlot>
                        </li>
                        <li>
                            <LinkSlot>
                                <div>
                                    <Link to='/artwork'>"Art"</Link>
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
                        <li>
                            <LinkSlot>
                                <div>
                                    <Link to='/kory_stennett_static_site'>Home</Link>
                                </div>
                                
                            </LinkSlot>
                            
                        </li>
                        <li>
                            <LinkSlot>
                                <div>
                                    <Link to='/new-meetup'>Projects</Link>
                                </div>
                                
                            </LinkSlot>
                        </li>
                        <li>
                            <LinkSlot>
                                <div>
                                    <Link to='/favorites'>Faves</Link>
                                </div>
                                
                            </LinkSlot>
                        </li>
                        <li>
                            <LinkSlot>
                                <div>
                                    <Link to='/artwork'>"Art"</Link>
                                </div>
                            </LinkSlot>
                        </li>
                    </ul>
                </nav>
            </header>}
        </div>);
        
        
    
}

export default MainNavigation;