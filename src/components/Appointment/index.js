import React, { useEffect } from "react";
import "components/Appointment/styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";

import { useVisualMode } from "../hooks/useVisualMode";

export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";
  const ERROR_SAVE = "ERROR_SAVE"
  const ERROR_DELETE = "ERROR_DELETE"
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  useEffect(() => {
    if (props.interview && mode === EMPTY) {
      transition(SHOW);
    }

    if (!props.interview && mode === SHOW) {
      transition(EMPTY);
    }
  }, [mode, transition, props.interview]);

  function save(name, interviewer) {
    if (name && interviewer) {
      transition(SAVING);
      const interview = {
        student: name,
        interviewer
      };
      props.bookInterview(props.id, interview)
        .then(() => transition(SHOW))
        .catch(() => transition(ERROR_SAVE, true))
    }
  }

  function deleteAppointment() {
    transition(DELETING, true);
    props
     .cancelInterview(props.id)
     .then(() => transition(EMPTY))
     .catch(error => transition(ERROR_DELETE));
   }

  function edit() {
    transition(EDIT);
  }

  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          value = {props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={()=>transition(CONFIRM)}
          onEdit={edit}
        />
      )}
      {mode === CREATE && (
        <Form
          name={props.name}
          value={props.value}
          interviewers={props.interviewers}
          onSave={save}
          onCancel={back}
        />
      )}
      {mode === SAVING && <Status message="Saving" />}
      {mode === DELETING && <Status message="Deleting" />}
      {mode === CONFIRM && (
        <Confirm
          onCancel={back}
          onConfirm={deleteAppointment}
          message="Do you want to Delete?"
        />
      )}
      {mode === EDIT && (
        <Form
          student={props.interview.student}
          interviewer={props.interview.interviewer.id}
          interviewers={props.interviewers}
          onSave={save}
          onCancel={back}
        />
      )}

       {mode === ERROR_SAVE && (<Error message="Error in SAVING" onClose={back}/>)}
       {mode === ERROR_DELETE && (<Error message="Error in DELETING" onClose={back}/>)}

    </article>
  );
}
