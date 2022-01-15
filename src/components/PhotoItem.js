import { useState } from "react";
import PhotoCard from "./UI/PhotoCard";
import classes from "./PhotoItem.module.css";
import likeIcon from "../assets/likeIcon.svg";
import unlikeIcon from "../assets/unlikeIcon.svg";
import LearnMorePage from "./LearnMorePage";

const PhotoItem = (props) => {
    const [showLearnMorePage, setShowLearnMorePage] = useState(false);

    const changeLikeStatusHandler = () => {
        props.changeLikeStatus(props.date, props.likeStatus);
    }
    const showLearnMorePageHandler = () => {
        setShowLearnMorePage(true);
    };
    const hideLearnMorePageHandler = () => {
        setShowLearnMorePage(false);
    };

    return (
        <PhotoCard>
            {showLearnMorePage &&
                <LearnMorePage
                    key={props.date}
                    title={props.title}
                    url={props.url}
                    explanation={props.explanation}
                    date={props.date}
                    copyright={props.copyright}
                    likeStatus={props.likeStatus}
                    onClose={hideLearnMorePageHandler}
                />}
            <h3>{props.title}</h3>
            <img
                className={classes.photoBox}
                src={props.url}
                alt={props.explanation}
                onClick={showLearnMorePageHandler}
            />
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
                    <img src={likeIcon}
                        className={classes.statusIcon}
                        onClick={changeLikeStatusHandler}
                    />
                }
                {/* If picture is unliked, display the unliked icon */}
                {!props.likeStatus &&
                    <img src={unlikeIcon}
                        className={classes.statusIcon}
                        onClick={changeLikeStatusHandler}
                    />
                }
                <button
                    className={classes.learnMoreButton}
                    onClick={showLearnMorePageHandler} >
                    Learn More &#187;
                </button>
            </div>
        </PhotoCard>
    )
};

export default PhotoItem;