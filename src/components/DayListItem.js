import React from "react";
import "components/DayListItem.scss";
import classNames from "classnames";

export default function DayListItem(props) {
  console.log({props});

  let dayClass = classNames(
    "day-list__item",
    {"day-list__item--selected": props.selected },
    {"day-list__item--full": props.spots === 0 }
  );
  
  const formatSpots = (spots) => {
    if (props.spots === 1) {
      return `${props.spots} spot remaining`;
    }
    if (props.spots === 0) {
      return "no spots remaining";
    } else {
      return `${props.spots} spots remaining`;
    }
  };  
  return (
    <li className={dayClass} onClick={() => props.setDay(props.value)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light"> {formatSpots(props.spots)} </h3>
    </li>
  );
}
