import React from "react";
import { render } from "@testing-library/react";
import ServiceMinisterio from "../components/ServiceMinisterio";

test("renders service item for Ministério Público", () => {
  const service = {
    id: 4,
    service: "Ministério Público",
    status: "up"
  };

  const { getByText } = render(<ServiceMinisterio service={service} />);

  // Verify that the service name and status are rendered
  const serviceElement = getByText("Ministério Público");
  const statusElement = getByText("Status: up");
  expect(serviceElement).toBeInTheDocument();
  expect(statusElement).toBeInTheDocument();
});
