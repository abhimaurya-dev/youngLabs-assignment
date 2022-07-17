import React from "react";
import classes from "./UsersCard.module.css";
import Card from "./Card";

const UsersCard = ({ users, setSelectedUser, selectedUser }) => {
  return (
    <main className={classes.user}>
      {users.map((user, index) => {
        return (
          <Card
            setSelectedUser={setSelectedUser}
            selectedUser={selectedUser}
            id={index + 1}
            key={index}
            gender={user.gender}
            name={user.name}
            email={user.email}
          />
        );
      })}
    </main>
  );
};

export default UsersCard;
