const { render, screen } = require("@testing-library/react");
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("should load contact us component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  //assertion
  expect(heading).toBeInTheDocument();
});

//test case for button
test("should load button inside Contact component", () => {
  render(<Contact />);

  const button = screen.getByRole("button");

  //assertion
  expect(button).toBeInTheDocument();
});

//test case name
test("should load input name  inside Contact component", () => {
  render(<Contact />);

  const inputName = screen.getByPlaceholderText("name");

  //assertion
  expect(inputName).toBeInTheDocument();
});

//test for load 2 input boxes
test("should load 2 input boxes ont he contact component", () => {
  render(<Contact />);
  //for multiple items -  use getALLByRole
  const inputBoxes = screen.getAllByRole("textbox");
  console.log(inputBoxes.length);

  //Assertion
  expect(inputBoxes.length).toBe(2);
});
