import classes from "./Card.module.css";

const Card = (props) => {
  const showHandler = (e) => {
    e.preventDefault();
    props.setSelectedUser(props.id);
  };
  return (
    <button onClick={showHandler} className={`${classes.card} ${classes.btn}`}>
      <p className={classes.gender}>{props.gender}</p>
      <p className={classes.name}>{props.name.first + " " + props.name.last}</p>
      <p className={classes.email}>{props.email}</p>
    </button>
  );
};

export default Card;
