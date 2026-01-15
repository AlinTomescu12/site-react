function Services() {
  return (
    <div className="services-page">
      {/* STÂNGA – TEXT */}
      <div className="page-content">
        <h1>Serviciile noastre</h1>

        <ul className="services-list">
          <li>
            <span>Service ICT</span>
            <strong>100 € / buc</strong>
          </li>

          <li>
            <span>Service UBA</span>
            <strong>120 € / buc</strong>
          </li>

          <li>
            <span>Service MEI</span>
            <strong>150 € / buc</strong>
          </li>
        </ul>
      </div>

      {/* DREAPTA – IMAGINI */}
      <div className="services-images">
        <div
          className="service-card"
          style={{
            backgroundImage: "url(/ict.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>

        <div
          className="service-card"
          style={{
            backgroundImage: "url(/uba.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>

        <div
          className="service-card"
          style={{
            backgroundImage: "url(/mei.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>

        <div
          className="service-card"
          style={{
            backgroundImage: "url(/cashcode.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>
      </div>
    </div>
  );
}

export default Services;
