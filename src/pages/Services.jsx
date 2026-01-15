function Services() {
  return (
    <div className="services-page">
      <div
        className="service-card"
        style={{ backgroundImage: "url(/site-react/ict.jpg)" }}
      >
        <div className="service-text">Service ICT – 100 €</div>
      </div>

      <div
        className="service-card"
        style={{ backgroundImage: "url(/site-react/uba.jpg)" }}
      >
        <div className="service-text">Service UBA – 120 €</div>
      </div>

      <div
        className="service-card"
        style={{ backgroundImage: "url(/site-react/mei.jpg)" }}
      >
        <div className="service-text">Service MEI – 150 €</div>
      </div>

      <div
        className="service-card"
        style={{ backgroundImage: "url(/site-react/cashcode.jpg)" }}
      >
        <div className="service-text">Service CashCode</div>
      </div>
    </div>
  );
}

export default Services;
