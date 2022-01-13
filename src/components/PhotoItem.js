import PhotoCard from "./UI/PhotoCard";
import classes from "./PhotoItem.module.css";
import likeIcon from "../assets/likeIcon.svg";
import unlikeIcon from "../assets/unlikeIcon.svg";

const PhotoItem = (props) => {
    return (
        <PhotoCard>
            <h3>{props.title}</h3>
            <img className={classes.photoBox} src={props.url} alt={props.explanation} />
            <p className={classes.dateBox}>
                <span style={{ fontWeight: "Bold" }}>Date: </span>
                {props.date}
            </p>
            <p className={classes.authorBox}>
                <span style={{ fontWeight: "Bold" }}>Author: </span>
                {props.copyright ? props.copyright : 'None'}</p>
            <div className={classes.interactionSection}>
                {/* If picture is liked, display the liked icon */}
                {props.likeStatus &&
                    <button className={classes.likeButton}>
                        <img src={likeIcon} className={classes.statusIcon}/>
                    </button>
                }
                {/* If picture is unliked, display the unliked icon */}
                {!props.likeStatus &&
                    <button className={classes.likeButton}>
                        <img src={unlikeIcon} className={classes.statusIcon}/>
                    </button>
                }
                <button className={classes.learnMoreButton}>Learn More &#187;</button>
            </div>
        </PhotoCard>
    )
};

export default PhotoItem;