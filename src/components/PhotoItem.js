import PhotoCard from "./UI/PhotoCard";
import classes from "./PhotoItem.module.css";

const PhotoItem = (props) => {
    return (
        <PhotoCard>
            <h3>{props.title}</h3>
            <img className={classes.photo} src={props.url} alt={props.explanation} />
            <p>Date: {props.date}</p>
            <p>Copyright: {props.copyright}</p>
            <button>Like</button>
        </PhotoCard>
    )
};

export default PhotoItem;