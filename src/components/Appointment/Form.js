import React, { useState } from "react";
import Button from "../Button";
import InterviewerList from "../InterviewerList";

export default function Form(props) {
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState("");

  const reset = () => {
    setStudent("");
    setInterviewer(null);
  };
  const Cancel = () => {
    reset();
    props.onCancel(student, interviewer);
  };

  function validate() {
    if (student === "") {
      setError("Student name cannot be blank");
      return;
    }
    if (interviewer === null) {
      setError("Please select an interviewer");
      return;
    }
    setError("")
    props.onSave(student, interviewer);
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            data-testid="student-name-input"
            className="appointment__create-input text--semi-bold"
            name={props.name}
            type="text"
            placeholder="Enter Student Name"
            // controlled component
            value={student}
            onChange={(event) => setStudent(event.target.value)}
            bookInterview = {props.bookInterview}
          />
        </form>
        <section className="appointment__validation">{error}</section>
        <InterviewerList
          data-testid= "interviewer-select"
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
          <Button datatest-id="save-btn" confirm onSubmit={event => event.preventDefault()} onClick={() => validate()}>
            Save
          </Button>
        </section>
      </section>
    </main>
  );
}
