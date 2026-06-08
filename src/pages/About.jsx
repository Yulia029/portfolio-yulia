import "../App.css";
import profile from "./profile.jpg";

function About() {
  return (
    <div className="about-page">

      <div className="about-container">

        <div className="about-left">

          <div className="about-photo">
            <img
              src={profile}
              alt="Yulia Narefa"
            />
          </div>

          <h2 className="name-gradient"> Yulia Narefa </h2>

        </div>

        <div className="about-right">

          <div className="contact-card">

            <h2>Contact Information</h2>

            <a
              href="mailto:narevayulia91@email.com"
              className="contact-item"
            >
              <i className="bx bx-envelope"></i>
              <span>narevayulia91@email.com</span>
            </a>

            <a
              href="https://github.com/Yulia029"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <i className="bx bxl-github"></i>
              <span>Yulia029</span>
            </a>

            <a
              href="https://www.instagram.com/philanaravenaa"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <i className="bx bxl-instagram"></i>
              <span>philanaravenaa</span>
            </a>

            <div className="contact-item">
              <i className="bx bx-map"></i>
              <span>Serang, Kec. Karangreja, Kab. Purbalingga, Jawa Tengah, Indonesia</span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default About;