export function getAppointmentsForDay(state, day) {
  let appArr;
  for (let elm of state.days) {
    if (elm.name === day) {
      appArr = elm.appointments;
    }
  }
  if (appArr === undefined || appArr.length === 0) {
    return [];
  }
  const Apps = appArr.map((num) => state.appointments[num]);
  return Apps;
}

export function getInterview(state, interview) {
  if (interview && interview.interviewer) {
    const interviewer = state.interviewers[interview.interviewer];
    return {
      student: interview.student,
      interviewer: interviewer,
    };
  }
  return null;
}

export function getInterviewersForDay(state, day) {
  let interviewerArr;
  for (let elm in state.days) {
    if (state.days[elm].name === day) {
      interviewerArr = state.days[elm].interviewers;
    }
  }
  if (interviewerArr === undefined || interviewerArr.length === 0) {
    return [];
  }
  const interviewers = interviewerArr.map((num) => state.interviewers[num]);
  return interviewers;
}