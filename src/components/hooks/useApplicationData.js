import React, { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  // setDays needs to be reintroduced when the useState is combined
  const setDay = (day) => setState({ ...state, day });
  // const setDays = (days) => setState((prev) => ({ ...prev, days }));

  useEffect(() => {
    Promise.all([
      axios.get("api/days"),
      axios.get("api/appointments"),
      axios.get("api/interviewers"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
    // .catch(err => err)
  }, []);

  function bookInterview(id, interview) {
    const updateSpots = function (state) {
      const dayToChange = state.days.find((day) => day.name === state.day);
      const newDay = { ...dayToChange };
      const emptyAppointments = dayToChange.appointments.filter(
        appointmentid => !state.appointments[appointmentid].interview
      );
      const spots = emptyAppointments.length;
      newDay.spots = spots
      const newDays = [...state.days];
    
    
      const dayIndex = state.days.findIndex((day) => day.name === state.day);
      newDays[dayIndex] = newDay;
      const newState = {...state}
      newState.days = newDays;
      return newState.days;
    };
    
    let updatedSpots = updateSpots(state);

    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    return axios
      .put(`api/appointments/${id}`, { interview: interview })
      .then((res) => {
        setState({ ...state, appointments, days: updatedSpots })
        return res;
      }
      );
    // .catch(err => err)
  }

  function cancelInterview(id, interview) {
    const updateSpots = function (state) {
      const dayToChange = state.days.find((day) => day.name === state.day);
      const newDay = { ...dayToChange };
      const emptyAppointments = dayToChange.appointments.filter(
        appointmentid => !state.appointments[appointmentid].interview
      );
      const spots = emptyAppointments.length;
      newDay.spots = spots
      const newDays = [...state.days];
    
    
      const dayIndex = state.days.findIndex((day) => day.name === state.day);
      newDays[dayIndex] = newDay;
      const newState = {...state}
      newState.days = newDays;
      return newState.days;
    };
    let updatedSpots = updateSpots(state);

    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    return axios
      .delete(`api/appointments/${id}`, { interview: interview })
      .then((res) => {
        setState({ ...state, appointments, days:updatedSpots});
        return res;
      });
    // .catch(err => console.log(err))
  }

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
   } 
}