import "../App.css";
import DataForm from "../components/DataForm";
import profile from "./profile.jpg";

function Home({ setPage }) {
  return (
    <div className="home">

      <section className="hero">

        <div className="hero-content">

          <h1>Holaaaa!</h1>

          <h2>
            I'm <span>Yulia Narefa</span>
          </h2>

          <p>
            Saya adalah siswi Rekayasa Perangkat Lunak yang memiliki
            minat dalam pengembangan website, desain UI/UX, dan
            teknologi modern. Saya senang mempelajari hal baru,
            mengembangkan kreativitas, dan membangun website yang
            menarik serta bermanfaat.
          </p>

          <div className="hero-buttons">

            <button
              className="project-btn"
              onClick={() => setPage("project")}
            >
              My Project
            </button>

            <button
              className="experience-btn"
              onClick={() => setPage("experience")}
            >
              My Experience
            </button>

          </div>

        </div>

        <div className="hero-image">

          <div className="profile-circle">

            <img
              src={profile}
              alt="Yulia Narefa"
            />

          </div>

        </div>

      </section>

      <div className="divider"></div>

      <DataForm />

    </div>
  );
}

export default Home;