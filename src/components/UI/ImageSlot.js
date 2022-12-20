import css from './ImageSlot.module.css';


function ImageSlot(props) {
    return <div className={css.imageSlot}>{props.children}</div>
}

export default ImageSlot;