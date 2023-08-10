import React from "react";
import { render } from "@testing-library/react";
import ServiceSerpro from "../components/ServiceSerpro";

test("renders service item for SERPRO", () => {
  const service = {
    id: 1,
    service: "SERPRO",
    status: "up",
  };

  const { getByText } = render(<ServiceSerpro service={service} />);
  
  // Verify that the service name and status are rendered
  const serviceElement = getByText("SERPRO");
  const statusElement = getByText("Status: up");
  expect(serviceElement).toBeInTheDocument();
  expect(statusElement).toBeInTheDocument();
});
