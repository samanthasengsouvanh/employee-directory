import React from "react";
import "./UserCard.css";

export default function UserCard(props) {
    return(
        <div className="Card">
            <h1>{props.name}</h1>
            <h3>{props.gender}</h3>
            <p>{props.email}</p>
        </div>
    )
}