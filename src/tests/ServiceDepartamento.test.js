import React from "react";
import { render } from "@testing-library/react";
import ServiceDepartamento from "../components/ServiceDepartamento";

test("renders service item for Departamento de Trânsito", () => {
  const service = {
    id: 6,
    service: "Departamento de Trânsito",
    status: "error"
  };

  const { getByText } = render(<ServiceDepartamento service={service} />);

  // Verify that the service name and status are rendered
  const serviceElement = getByText("Departamento de Trânsito");
  const statusElement = getByText("Status: error");
  expect(serviceElement).toBeInTheDocument();
  expect(statusElement).toBeInTheDocument();
});
