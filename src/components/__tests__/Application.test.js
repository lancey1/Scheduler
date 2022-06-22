import React from "react";

import { render, cleanup } from "@testing-library/react";

import Application from "components/Application";
import Appointment from "components/Appointment";

afterEach(cleanup);

describe("Application", () => {
it.skip("renders without crashing", () => {
  render(<Application />);
});
})


describe("Appointment", () => {
  it.skip("renders without crashing", () => {
    render(<Appointment />);
  });
})