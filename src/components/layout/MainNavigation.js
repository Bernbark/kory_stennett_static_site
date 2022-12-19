import { Link } from 'react-router-dom';
import css from './MainNavigation.module.css';
import { useMediaQuery } from 'react-responsive'
import LinkSlot from '../UI/LinkSlot';


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
                <div className={css.logo}>Portfolio</div>
                <nav>
                    <ul>
                        <li>
                            <LinkSlot>
                                <Link to='/kory_stennett_static_site'>Home</Link>
                            </LinkSlot>
                            
                        </li>
                        <li>
                            <LinkSlot>
                                <Link to='/new-meetup'>Projects</Link>
                            </LinkSlot>
                        </li>
                        <li>
                            <LinkSlot>
                                <Link to='/favorites'>Faves</Link>
                            </LinkSlot>
                        </li>
                        <li>
                            <LinkSlot>
                                <Link to='/artwork'>"Art"</Link>
                            </LinkSlot>
                        </li>
                    </ul>
                </nav>
            </header>}
            
            {isSmall && <header className={css.headerPortrait}>
                <div className={css.logoPortrait}>Portfolio</div>
                <nav>
                    <ul>
                        <li>
                            <LinkSlot>
                                <Link to='/kory_stennett_static_site'>Home</Link>
                            </LinkSlot>
                            
                        </li>
                        <li>
                            <LinkSlot>
                                <Link to='/new-meetup'>Projects</Link>
                            </LinkSlot>
                        </li>
                        <li>
                            <LinkSlot>
                                <Link to='/favorites'>Faves</Link>
                            </LinkSlot>
                        </li>
                        <li>
                            <LinkSlot>
                                <Link to='/artwork'>"Art"</Link>
                            </LinkSlot>
                        </li>
                    </ul>
                </nav>
            </header>}
            {isTiny && <header className={css.headerTiny}>
                <div className={css.logoTiny}>Portfolio</div>
                <nav>
                    <ul>
                        <li>
                            <LinkSlot>
                                <Link to='/kory_stennett_static_site'>Home</Link>
                            </LinkSlot>
                            
                        </li>
                        <li>
                            <LinkSlot>
                                <Link to='/new-meetup'>Projects</Link>
                            </LinkSlot>
                        </li>
                        <li>
                            <LinkSlot>
                                <Link to='/favorites'>Faves</Link>
                            </LinkSlot>
                        </li>
                        <li>
                            <LinkSlot>
                                <Link to='/artwork'>"Art"</Link>
                            </LinkSlot>
                        </li>
                    </ul>
                </nav>
            </header>}
            {isMiniscule && <header className={css.headerMini}>
                <div className={css.logoMini}>Portfolio</div>
                <nav>
                    <ul>
                        <li>
                            <LinkSlot>
                                <Link to='/kory_stennett_static_site'>Home</Link>
                            </LinkSlot>
                            
                        </li>
                        <li>
                            <LinkSlot>
                                <Link to='/new-meetup'>Projects</Link>
                            </LinkSlot>
                        </li>
                        <li>
                            <LinkSlot>
                                <Link to='/favorites'>Faves</Link>
                            </LinkSlot>
                        </li>
                        <li>
                            <LinkSlot>
                                <Link to='/artwork'>"Art"</Link>
                            </LinkSlot>
                        </li>
                    </ul>
                </nav>
            </header>}
        </div>);
        
        
    
}

export default MainNavigation;