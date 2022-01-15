import Modal from "./UI/Modal";
import classes from "./LearnMorePage.module.css";

const LearnMorePage = (props) => {
    return (
        <Modal onClose={props.onClose}>
            <div className={classes.container}>
                <div className={classes.leftSection}>
                    <img className={classes.photoBox} src={props.url} alt={props.explanation} />
                </div>
                <div className={classes.rightSection}>
                    <h2 className={classes.titleBox}>{props.title}</h2>
                    <p>
                        <span className={classes.property}>Date: </span>
                        {props.date}
                    </p>
                    <p >
                        <span className={classes.property}>Author: </span>
                        {props.copyright ? props.copyright : 'None'}
                    </p>
                    <hr className={classes.separator} />
                    <p className={classes.explanationBox}>
                        <span className={classes.property}>Explanation: </span>
                        {props.explanation}
                    </p>
                </div>
            </div>
            <button className={classes.closeButton} onClick={props.onClose}>X</button>
        </Modal>
    )
}

export default LearnMorePage;