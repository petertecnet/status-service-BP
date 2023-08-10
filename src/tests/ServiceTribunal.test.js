import React from "react";
import { render } from "@testing-library/react";
import ServiceTribunal from "../components/ServiceTribunal";

test("renders service item for Tribunal de Justiça", () => {
  const service = {
    id: 3,
    service: "Tribunal de Justiça",
    status: "error"
  };

  const { getByText } = render(<ServiceTribunal service={service} />);

  // Verify that the service name and status are rendered
  const serviceElement = getByText("Tribunal de Justiça");
  const statusElement = getByText("Status: error");
  expect(serviceElement).toBeInTheDocument();
  expect(statusElement).toBeInTheDocument();
});
