import React from "react";
import { render } from "@testing-library/react";
import ServiceReceita from "../components/ServiceReceita";

test("renders service item for Receita Federal", () => {
  const service = {
    id: 5,
    service: "Receita Federal",
    status: "warning"
  };

  const { getByText } = render(<ServiceReceita service={service} />);

  // Verify that the service name and status are rendered
  const serviceElement = getByText("Receita Federal");
  const statusElement = getByText("Status: warning");
  expect(serviceElement).toBeInTheDocument();
  expect(statusElement).toBeInTheDocument();
});
