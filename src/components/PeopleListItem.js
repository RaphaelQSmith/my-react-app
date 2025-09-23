import React from "react";
import "../PeopleListItem.css"

export const PeopleListItem = ({person}) => (
    <div className="list-item-container">
       <h3>{person.name}</h3>
       <h3>Age: {person.age}</h3>
       <h3>Hair Colour: {person.hairColor}</h3>
    </div>
)