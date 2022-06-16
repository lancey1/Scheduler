import React, { useState } from "react";
import "components/InterviewerList.scss";
import InterviewerListItem from "components/InterviewerListItem";

export default function InterviewerList(props) {
  console.log(props);
  const [value, onChange] = useState();

  const Interviewers = props.interviewers.map((interviewer) => {
    return (
      // using spread operator to pass in all the props to the InterviewerListItem component
      <InterviewerListItem
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === value}
        setInterviewer={() => onChange(interviewer.id)}
      />
    );
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list"> {Interviewers} </ul>
    </section>
  );
}
