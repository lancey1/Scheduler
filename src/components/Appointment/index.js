import React, {useEffect} from 'react'
import "components/Appointment/styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";

import {useVisualMode} from "../hooks/useVisualMode";



export default function Appointment(props){
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
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

  }, [mode, transition, props.interview])
  
  // console.log(props)
  return (
  <article className="appointment">
    <Header time={props.time}/> 
    {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
    {mode === SHOW && <Show student={props.interview.student} interviewer = {props.interview.interviewer.name}/>}
    {mode === CREATE && <Form interviewersArray = {props.interviewersArray} onCancel = {()=>back()}/>}
  </article>) }