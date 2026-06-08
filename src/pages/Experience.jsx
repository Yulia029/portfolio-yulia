import { useState } from "react";
import Swal from "sweetalert2";
import "../App.css";

function Experience() {
  const [namaExperience, setNamaExperience] = useState("");
  const [jenisExperience, setJenisExperience] = useState("");
  const [tahun, setTahun] = useState("");
  const [cerita, setCerita] = useState("");

  const [experiences, setExperiences] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !namaExperience.trim() ||
      !jenisExperience ||
      !tahun.trim() ||
      !cerita.trim()
    ) {
      Swal.fire({
        icon: "warning",
        title: "Oops!",
        text: "Semua field harus diisi.",
        confirmButtonColor: "#721C24",
      });
      return;
    }

    if (experiences.length >= 5) {
      Swal.fire({
        icon: "error",
        title: "Kuota Penuh",
        text: "Maksimal hanya 5 experience.",
        confirmButtonColor: "#721C24",
      });
      return;
    }

    const newExperiences = [
      ...experiences,
      {
        namaExperience,
        jenisExperience,
        tahun,
        cerita,
      },
    ];

    setExperiences(newExperiences);

    setNamaExperience("");
    setJenisExperience("");
    setTahun("");
    setCerita("");

    if (newExperiences.length === 5) {
      Swal.fire({
        icon: "success",
        title: "Kuota Penuh",
        text: "Experience sudah mencapai batas maksimal 5.",
        confirmButtonColor: "#721C24",
      });
    }
  };

  const hapusSemua = () => {
    Swal.fire({
      title: "Hapus Semua Experience?",
      text: "Data tidak bisa dikembalikan.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#721C24",
      cancelButtonColor: "#999",
      confirmButtonText: "Ya",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        setExperiences([]);

        Swal.fire({
          icon: "success",
          title: "Berhasil",
          text: "Semua experience berhasil dihapus.",
          confirmButtonColor: "#721C24",
        });
      }
    });
  };

  return (
    <div className="project-page">

      <section className="student-section">

        <div className="form-box">

          <h2>Input Experience</h2>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="Nama Experience"
              value={namaExperience}
              onChange={(e) =>
                setNamaExperience(e.target.value)
              }
            />

            <select
              className="experience-select"
              value={jenisExperience}
              onChange={(e) =>
                setJenisExperience(e.target.value)
              }
            >
              <option value="">
                Pilih Jenis Experience
              </option>

              <option value="Web Development">
                Web Development
              </option>

              <option value="UI/UX Design">
                UI/UX Design
              </option>

              <option value="Learning">
                Learning
              </option>

              <option value="Project">
                Project
              </option>

              <option value="Game Development">
                Game Development
              </option>

            </select>

            <input
              type="text"
              placeholder="Tahun"
              value={tahun}
              onChange={(e) =>
                setTahun(e.target.value)
              }
            />

            <textarea
              className="project-textarea"
              placeholder="Ceritakan Experience Mu"
              value={cerita}
              onChange={(e) =>
                setCerita(e.target.value)
              }
            />

            <button
              type="submit"
              className="save-btn"
            >
              Tambah Experience
            </button>

          </form>

          {experiences.length > 0 && (
            <button
              className="delete-btn"
              onClick={hapusSemua}
            >
              Hapus Semua
            </button>
          )}

        </div>

        {experiences.length > 0 && (

          <div className="project-output">

            <h2>Experiences</h2>

            <div className="project-cards">

              {experiences.map((item, index) => (
                <div
                  className="project-card"
                  key={index}
                >

                  <h3>
                    {item.namaExperience}
                  </h3>

                  <p>
                    <strong>
                      {item.jenisExperience}
                    </strong>
                    {" • "}
                    {item.tahun}
                  </p>

                  <p>
                    {item.cerita}
                  </p>

                </div>
              ))}

            </div>

          </div>

        )}

      </section>

    </div>
  );
}

export default Experience;