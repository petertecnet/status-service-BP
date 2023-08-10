import React from "react";
import ServiceConselho from "./components/ServiceConselho";
import ServiceDepartamento from "./components/ServiceDepartamento";
import ServiceMinisterio from "./components/ServiceMinisterio";
import ServiceReceita from "./components/ServiceReceita";
import ServiceTribunal from "./components/ServiceTribunal";
import ServiceSerpro from "./components/ServiceSerpro";
import servicesjson from "./services.json";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Estado dos Serviços</h1>
      <div className="service-container">
        {servicesjson.map((service) => (
          <div key={service.id} className="service-item">
            {service.service === "Conselho Nacional de Justiça" && (
              <ServiceConselho service={service} />
            )}
            {service.service === "Departamento de Trânsito" && (
              <ServiceDepartamento service={service} />
            )}
            {service.service === "Ministério Público" && (
              <ServiceMinisterio service={service} />
            )}
            {service.service === "Receita Federal" && (
              <ServiceReceita service={service} />
            )}
            {service.service === "Tribunal de Justiça" && (
              <ServiceTribunal service={service} />
            )}
            {service.service === "SERPRO" && (
              <ServiceSerpro service={service} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
