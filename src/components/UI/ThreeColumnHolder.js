import css from './ThreeColumnHolder.module.css';
import { useMediaQuery } from 'react-responsive'



function ThreeColumnHolder(props){
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 800px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1772px)' })
    //onst isTabletOrMobile = useMediaQuery({ query: '(min-width: 1224px)' })
    const isLessBig = useMediaQuery({ query: '(min-width: 1378px) and (max-width: 1771px)' })
    const isSmall = useMediaQuery({ query: '(min-width: 200px) and (max-width: 799px)' })
    const isMiniscule = useMediaQuery({ query: '(min-width: 236px) and (max-width: 326px)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    return <div>
        {isDesktopOrLaptop && <div style={{fontSize:'.9em'}} className={css.colHolder}>
            <div className={css.col1}>{props.col1}</div>
            <div className={css.col2}>{props.col2}</div>
            <div className={css.col3}>{props.col3}</div>
        </div>}
        {isSmall && <div>
            
            <div style={{fontSize:'.9em'}} className={css.colHolder}>
            <div className={css.singleColumn}>{props.col1}</div>
            
            </div>
        </div>}
    </div>
    
}

export default ThreeColumnHolder;