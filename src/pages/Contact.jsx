function Contact() {
  return (
    <div className="page-content contact-page">

      <h1>Contact</h1>

      <form
        className="contact-form"
        action="mailto:tomescu.alin@yahoo.com"
        method="POST"
        encType="text/plain"
      >
        <label>
          Nume și prenume
          <input type="text" name="Nume" required />
        </label>

        <label>
          Telefon
          <input type="tel" name="Telefon" required />
        </label>

        <label>
          Email
          <input type="email" name="Email" required />
        </label>

        <label>
          Mesaj
          <textarea name="Mesaj" rows="5" required></textarea>
        </label>

        <button type="submit">Trimite mesaj</button>
      </form>
    </div>
  );
}

export default Contact;
