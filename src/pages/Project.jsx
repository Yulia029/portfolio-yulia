import { useState } from "react";
import Swal from "sweetalert2";
import "../App.css";

import project1 from "./project1.png";
import project2 from "./project2.jpg";
import project3 from "./project3.png";

function Project() {
  const [namaProject, setNamaProject] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [projects, setProjects] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!namaProject.trim() || !deskripsi.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Oops!",
        text: "Semua field harus diisi.",
        confirmButtonColor: "#721C24",
      });
      return;
    }

    if (projects.length >= 5) {
      Swal.fire({
        icon: "error",
        title: "Kuota Penuh",
        text: "Maksimal hanya 5 project.",
        confirmButtonColor: "#721C24",
      });
      return;
    }

    const newProjects = [
      ...projects,
      {
        namaProject,
        deskripsi,
      },
    ];

    setProjects(newProjects);
    setNamaProject("");
    setDeskripsi("");

    if (newProjects.length === 5) {
      Swal.fire({
        icon: "success",
        title: "Kuota Penuh",
        text: "Project sudah mencapai batas maksimal 5.",
        confirmButtonColor: "#721C24",
      });
    }
  };

  const hapusSemua = () => {
    Swal.fire({
      title: "Hapus Semua Project?",
      text: "Data tidak bisa dikembalikan.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#721C24",
      cancelButtonColor: "#999",
      confirmButtonText: "Ya",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        setProjects([]);

        Swal.fire({
          icon: "success",
          title: "Berhasil",
          text: "Semua project berhasil dihapus.",
          confirmButtonColor: "#721C24",
        });
      }
    });
  };

  return (
    <div className="project-page">

      <h1 className="project-title">
        MY PROJECT
      </h1>

      <div className="featured-projects">

        <div className="featured-card">

          <img
            src={project1}
            alt="Librae Book Store"
            className="featured-image"
          />

          <h3>Librae Book Store</h3>

          <p>
            Website penjualan buku online yang dibangun
            menggunakan HTML, CSS, JavaScript, PHP, dan
            MySQL. Dilengkapi fitur pencarian buku,
            manajemen data buku, serta sistem CRUD.
          </p>

        </div>

        <div className="featured-card">

          <img
            src={project2}
            alt="Dream Quest"
            className="featured-image"
          />

          <h3>Dream Quest</h3>

          <p>
            Game petualangan 2D bertema fantasi yang
            mengajak pemain menjelajahi dunia Dream
            Quest, menyelesaikan berbagai misi, dan
            menghadapi tantangan menarik bersama Arabella.
          </p>

        </div>

        <div className="featured-card">

          <img
            src={project3}
            alt="NL2SQL Database Sales"
            className="featured-image"
          />

          <h3>NL2SQL Database Sales</h3>

          <p>
            Aplikasi yang mengubah bahasa alami menjadi
            query SQL secara otomatis untuk membantu
            pengguna mengakses, mencari, dan menganalisis
            data penjualan dengan lebih mudah.
          </p>

        </div>

      </div>

      <div className="divider"></div>

      <section className="student-section">

        <div className="form-box">

          <h2>Input Project</h2>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="Nama Project"
              value={namaProject}
              onChange={(e) =>
                setNamaProject(e.target.value)
              }
            />

            <textarea
              className="project-textarea"
              placeholder="Deskripsi Project"
              value={deskripsi}
              onChange={(e) =>
                setDeskripsi(e.target.value)
              }
            />

            <button
              type="submit"
              className="save-btn"
            >
              Tambah Project
            </button>

          </form>

          {projects.length > 0 && (
            <button
              className="delete-btn"
              onClick={hapusSemua}
            >
              Hapus Semua
            </button>
          )}

        </div>

        {projects.length > 0 && (

          <div className="project-output">

            <h2>My Projects</h2>

            <div className="project-cards">

              {projects.map((item, index) => (
                <div
                  className="project-card"
                  key={index}
                >

                  <h3>
                    {item.namaProject}
                  </h3>

                  <p>
                    {item.deskripsi}
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

export default Project;