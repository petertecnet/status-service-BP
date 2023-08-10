import React from "react";

function ServiceSerpro({ service }) {
  return (
    <div className="service">
      <h3>{service.service}</h3>
      <p>Status: {service.status}</p>
    </div>
  );
}

export default ServiceSerpro;
