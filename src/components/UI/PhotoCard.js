import classes from "./PhotoCard.module.css";   

const PhotoCard = props => {
  return <div className={classes.card}>{props.children}</div>
};

export default PhotoCard;