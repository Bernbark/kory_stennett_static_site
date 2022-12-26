import css from './GlitchButton.module.css';
import { useMediaQuery } from 'react-responsive';

function GlitchButton(props) {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    //onst isTabletOrMobile = useMediaQuery({ query: '(min-width: 1224px)' })
    const isSmall = useMediaQuery({ query: '(min-width: 800px) and (max-width: 1223px)' })
    const isTiny = useMediaQuery({ query: '(min-width: 327px) and (max-width: 799px)' })
    const isMiniscule = useMediaQuery({ query: '(min-width: 236px) and (max-width: 326px)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    return <div>
        {isDesktopOrLaptop && <button className={css.button}>{props.children}</button>}
        {isSmall && <button className={css.buttonSmall}>{props.children}</button>}
        {isMiniscule && <button className={css.buttonSmall}>{props.children}</button>}
        {isTiny && <button className={css.buttonSmall}>{props.children}</button>}
    </div>
}

export default GlitchButton;