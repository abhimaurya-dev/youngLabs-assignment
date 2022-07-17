import classes from "./SelectedCard.module.css";

const SelectedCard = (props) => {
  return (
    <main className={classes.main}>
      <img
        className={classes.image}
        src={props.users[props.selectedUser].picture.large}
        alt={props.name}
      />
      <div className={classes.info}>
        <p className={classes.name}>
          {props.users[props.selectedUser].name.first +
            " " +
            props.users[props.selectedUser].name.last}
        </p>
        <p className={classes.address}>
          <span className={classes.street}>
            {props.users[props.selectedUser].location.street.number}
          </span>
          ,&nbsp;
          {props.users[props.selectedUser].location.street.name +
            ", " +
            props.users[props.selectedUser].location.state +
            ", " +
            props.users[props.selectedUser].location.street.city +
            ", " +
            props.users[props.selectedUser].location.country +
            ", " +
            props.users[props.selectedUser].location.postcode}
        </p>
        <p className={classes.address}>
          {props.users[props.selectedUser].location.timezone.offset +
            " - " +
            props.users[props.selectedUser].location.timezone.description}
        </p>
        <p className={classes.gender}>
          {props.users[props.selectedUser].gender}
        </p>
      </div>
    </main>
  );
};

export default SelectedCard;
