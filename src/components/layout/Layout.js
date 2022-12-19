import css from './Layout.module.css'
import MainNavigation from "./MainNavigation";

function Layout(props) {
    return <div>
        <MainNavigation />
        <main className={css.name}>
            {props.children}
        </main>
    </div>
}

export default Layout;