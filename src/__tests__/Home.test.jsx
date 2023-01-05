import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import Home from "../pages/Home";

test("renders Loading...", async () => {
  render(<Home />);
  const caption = screen.getByText(/Customer Transaction Points/i);
  expect(caption).toBeInTheDocument();

  const fetchButton = screen.getByTestId("fetch-button");
  fireEvent.click(fetchButton);

  const loadingSpinner = screen.getByTestId("loading-spinner");
  expect(loadingSpinner).toBeInTheDocument();

  await new Promise((resolve) => setTimeout(resolve, 3000));

  const transactionTable = screen.getByTestId("transaction-table");
  expect(transactionTable).toBeInTheDocument();
});
