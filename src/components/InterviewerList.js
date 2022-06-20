import React from "react";
import "components/InterviewerList.scss";
import InterviewerListItem from "components/InterviewerListItem";

export default function InterviewerList(props) {
  // validates props.interviewers first before rendering, if it is empty, it will return null and won't render anything / won't crash program
  const Interviewers = Array.isArray(props.interviewersArray) && props.interviewersArray.map((interviewer) => {
    return (
      // using spread operator to pass in all the props to the InterviewerListItem component
      <InterviewerListItem
        id={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === props.value}
        setInterviewer={() => props.onChange(interviewer.id)}
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
