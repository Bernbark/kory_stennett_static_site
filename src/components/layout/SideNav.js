
function SideNav(props) {
    return (
        <div>
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
        
        </div>
        
        
    );
};
export default SideNav;