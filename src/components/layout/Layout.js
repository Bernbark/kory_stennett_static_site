import css from './Layout.module.css'
import MainNavigation from "./MainNavigation";

function Layout(props, ) {
    const classNameString = props.classNameToGive;
    const toggleTheme = props.toggleTheme;
    return <div>
        
        <MainNavigation  toggleTheme={props.toggleTheme} />
        
        <main className={css.classNameString}>
            {props.children}
        </main>
        
        
    </div>
}

export default Layout;