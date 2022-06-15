import React from "react";
import DayListItem from "components/DayListItem";

export default function DayList(props) {
  console.log({props})
//  result of console.log(props)
// {
//   "props": {
//     "days": [
//         {
//             "id": 1,
//             "name": "Monday",
//             "spots": 2
//         },
//         {
//             "id": 2,
//             "name": "Tuesday",
//             "spots": 5
//         },
//         {
//             "id": 3,
//             "name": "Wednesday",
//             "spots": 0
//         }
//     ],
//     "day": "Wednesday"
// }
// }
//  data we want is in the props.DAYS and props.DAY is the selected day
// we want to loop through the days and create a DayListItem for each day
// 
  const DayLists = props.days.map((days) => {
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

  return <ul>{DayLists}</ul>;
}



