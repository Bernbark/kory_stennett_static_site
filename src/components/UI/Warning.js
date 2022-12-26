import css from './Warning.module.css';


function Warning(props) {
    return <div className={css.noselect}>{props.children}</div>
}

export default Warning;