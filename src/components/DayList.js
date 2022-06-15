import React from "react";
import DayListItem from "components/DayListItem";

export default function DayList(props) {
  console.log({props})
  const DayListed = props.days.map((days) => {
    console.log(days)
    return (
      <DayListItem
        key={days.id}
        name={days.name}
        spots={days.spots}
        selected={days.name === props.day}
        setDay={props.setDay}
      />
    );
  });

  return <ul>{DayListed}</ul>;
}
