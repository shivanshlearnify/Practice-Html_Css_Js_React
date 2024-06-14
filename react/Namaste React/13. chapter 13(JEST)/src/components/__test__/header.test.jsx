import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";

import "@testing-library/jest-dom";

it("should load header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //   const loginButton = screen.getByRole("button");
  const loginButton = screen.getByRole("button", { name: "login" });
  //   const loginButton = screen.getByText("login");

  // Assertion
  expect(loginButton).toBeInTheDocument();
});
it("should load header component with cart item 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //   const loginButton = screen.getByRole("button");
  const loginButton = screen.getByRole("button", { name: "login" });
  //   const loginButton = screen.getByText("login");

  // Assertion
  expect(loginButton).toBeInTheDocument();
});
it("should change login button to logut on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "login" });

  fireEvent.click(loginButton);

  const logOutButton = screen.getByRole("button", { name: "logout" });

  expect(logOutButton).toBeInTheDocument();
});
