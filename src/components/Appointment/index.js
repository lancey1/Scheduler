import React from "react";
import "components/Appointment/styles.scss";
import Header from "./Header";

export default function Appointment(props){
  let time = "1pm"
  return (<article className="appointment">
    <Header time={time}/>
  </article>) }