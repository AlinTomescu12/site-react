function Navbar({ setPage }) {
  return (
    <nav className="menu">
      <button onClick={() => setPage("home")}>
        <img src="/home.png" alt="home" />
        <span>Home</span>
      </button>

      <button onClick={() => setPage("about")}>
        <img src="/about.png" alt="about" />
        <span>Despre</span>
      </button>

      <button onClick={() => setPage("services")}>
        <img src="/services.png" alt="services" />
        <span>Servicii</span>
      </button>

      <button onClick={() => setPage("contact")}>
        <img src="/contact.png" alt="contact" />
        <span>Contact</span>
      </button>
    </nav>
  );
}

export default Navbar;
