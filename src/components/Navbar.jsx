function Navbar({ setPage }) {
  return (
    <nav className="menu">
      <button
        style={{ backgroundImage: "url(/home-bg.jpg)" }}
        onClick={() => setPage("home")}
      >
        <span>Home</span>
      </button>

      <button
        style={{ backgroundImage: "url(/about-bg.jpg)" }}
        onClick={() => setPage("about")}
      >
        <span>Despre companie</span>
      </button>

      <button
        style={{ backgroundImage: "url(/services-bg.jpg)" }}
        onClick={() => setPage("services")}
      >
        <span>Servicii</span>
      </button>

      <button
        style={{ backgroundImage: "url(/contact-bg.jpg)" }}
        onClick={() => setPage("contact")}
      >
        <span>Contact</span>
      </button>
    </nav>
  );
}

export default Navbar;
