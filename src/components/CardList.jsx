import React from "react";
import Cards from "./Cards";

function CardList(props) {
  return (
    <div>
      {props.profiles.map((profile) => (
        <Cards key={profile.id} {...profile} />
      ))}
    </div>
  );
}
export default CardList;
