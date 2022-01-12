import classes from "./LoadingPhotoCard.module.css";

const LoadingPhotoCard = props => {
  return (
    <div className={classes.card}>
      <div className={classes.titleBox} />
      <div className={classes.imageBox} />
      <div className={classes.dateBox} />
      <div className={classes.authorBox} />
      <div className={classes.interactionSection}>
        <div className={classes.likeBox} />
        <div className={classes.learnMoreBox} />
      </div>
    </div>
  );
};

export default LoadingPhotoCard;