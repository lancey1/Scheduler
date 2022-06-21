import React, { useState } from "react";
import Button from "../Button";
import InterviewerList from "../InterviewerList";

export default function Form(props) {
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  const reset = () => {
    setStudent("");
    setInterviewer(null);
  };
  const Cancel = () => {
    reset();
    props.onCancel(student, interviewer);
  };

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name={props.name}
            type="text"
            placeholder="Enter Student Name"
            // controlled component
            value={student}
            onChange={(event) => setStudent(event.target.value)}
            bookInterview = {props.bookInterview}
            onClick = {props.onSave}
          />
        </form>
        <InterviewerList
          interviewers={props.interviewers}
          // controlled list
          value={interviewer}
          onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button onClick={Cancel} danger>
            Cancel
          </Button>
          <Button confirm onSubmit={event => event.preventDefault()} onClick={event => props.onSave(student, interviewer)}>
            Save
          </Button>
        </section>
      </section>
    </main>
  );
}
