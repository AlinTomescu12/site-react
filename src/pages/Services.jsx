function Services() {
  return (
    <div className="services-page">
      <div
        className="service-card"
        style={{ backgroundImage: "url(/site-react/ict.jpg)" }}
      >
        <span>Service ICT – 100 €</span>
      </div>

      <div
        className="service-card"
        style={{ backgroundImage: "url(/site-react/uba.jpg)" }}
      >
        <span>Service UBA – 120 €</span>
      </div>

      <div
        className="service-card"
        style={{ backgroundImage: "url(/site-react/mei.jpg)" }}
      >
        <span>Service MEI – 150 €</span>
      </div>

      <div
        className="service-card"
        style={{ backgroundImage: "url(/site-react/cashcode.jpg)" }}
      >
        <span>Service CashCode</span>
      </div>
    </div>
  );
}

export default Services;
