import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("contact us page Test cases", () => {
  test("should load contact us page", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });
  test("should load button inside the contact us page", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    // Assertion
    expect(button).toBeInTheDocument();
  });
  it("should load 2 inputBox inside the contact us page", () => {
    render(<Contact />);

    const input = screen.getByPlaceholderText("Name");

    // Assertion
    expect(input).toBeInTheDocument();
  });
  it("should load input name inside the contact us page", () => {
    render(<Contact />);

    const input = screen.getAllByRole("textbox");

    // Assertion
    expect(input.length).toBe(2);
  });
});
