import React from "react";
import DayList from "components/DayList";
import Appointment from "components/Appointment";
import {getAppointmentsForDay, getInterview, getInterviewersForDay,
} from "helpers/selectors";
import "components/Application.scss";
import useApplicationData from "./hooks/useApplicationData";

export default function Application(props) {
  const { state, setDay, bookInterview, cancelInterview } =
    useApplicationData();

  const appointmentsObj = getAppointmentsForDay(state, state.day);
  const interviewersArray = getInterviewersForDay(state, state.day);
  const schedule = appointmentsObj.map((appointment) => {
    const interview = getInterview(state, appointment.interview);
    // spread operator to copy the object and add the appointment property
    // careful with the {...appointment} same as the var that is passed through
    return (
      <Appointment
        {...appointmentsObj}
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interview={interview}
        interviewers={interviewersArray}
        bookInterview={bookInterview}
        cancelInterview={cancelInterview}
      />
    );
  });

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={state.days}
            value={state.day}
            onChange={setDay}
            bookInterview={bookInterview}
            cancelInterview={cancelInterview}

            // we are passing in the setDay function as a prop to the DayList component
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {schedule}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
