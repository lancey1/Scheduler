import React, { useState } from "react";
import "components/InterviewerListItem.scss";
import classNames from "classnames";

export default function InterviewerListItem(props) {
  console.log(props);
  const [interviewer, setInterviewer] = useState();
  let interviewerClass = classNames("interviewers__item", {"interviewers__item--selected": props.selected },);
  

  return (
    <li
      onClick={() => setInterviewer(props.id)}
      className={interviewerClass}
    >
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
}
