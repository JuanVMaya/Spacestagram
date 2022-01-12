import PhotoCard from "./UI/PhotoCard";
import classes from "./PhotoItem.module.css";
import likeIcon from "../assets/heart.svg";

const PhotoItem = (props) => {
    return (
        <PhotoCard>
            <h3 className={classes.title}>{props.title}</h3>
            <img className={classes.photo} src={props.url} alt={props.explanation} />
            <p className={classes.cardText}>Date: {props.date}</p>
            <p>Author: {props.copyright? props.copyright : 'None'}</p>
            {/* If picture is liked, display the liked icon */}
            {props.likeStatus &&
                <button className={classes.likeButton}>❤</button>
            }
            {/* If picture is unliked, display the unliked icon */}
            {!props.likeStatus &&
                <button className={classes.likeButton}>
                    <img src={likeIcon} className={classes.unlikeButton} />
                </button>
            }
            <button>Learn More</button>
        </PhotoCard>
    )
};

export default PhotoItem;