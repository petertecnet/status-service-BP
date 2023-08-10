import React from "react";
import { render } from "@testing-library/react";
import ServiceConselho from "../components/ServiceConselho";

test("renders service item for Conselho Nacional de Justiça", () => {
  const service = {
    id: 2,
    service: "Conselho Nacional de Justiça",
    status: "warning"
  };

  const { getByText } = render(<ServiceConselho service={service} />);

  // Verify that the service name and status are rendered
  const serviceElement = getByText("Conselho Nacional de Justiça");
  const statusElement = getByText("Status: warning");
  expect(serviceElement).toBeInTheDocument();
  expect(statusElement).toBeInTheDocument();
});
