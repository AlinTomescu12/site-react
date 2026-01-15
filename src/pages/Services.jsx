function Services() {
  return (
    <div className="services-wrapper">
      {/* STÂNGA – TEXT */}
      <div className="services-text">
        <h2>Serviciile noastre</h2>
        <ul>
          <li>Service ICT – 100 € / buc</li>
          <li>Service UBA – 120 €</li>
          <li>Service MEI – 150 €</li>
          <li>Service CashCode – preț la cerere</li>
        </ul>
      </div>

      {/* DREAPTA – IMAGINI */}
      <div className="services-images">
        <div
          className="service-image"
          style={{ backgroundImage: "url(/site-react/ict.jpg)" }}
        />
        <div
          className="service-image"
          style={{ backgroundImage: "url(/site-react/uba.jpg)" }}
        />
        <div
          className="service-image"
          style={{ backgroundImage: "url(/site-react/mei.jpg)" }}
        />
        <div
          className="service-image"
          style={{ backgroundImage: "url(/site-react/cashcode.jpg)" }}
        />
      </div>
    </div>
  );
}

export default Services;
