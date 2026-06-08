import { useState } from "react";
import Swal from "sweetalert2";

function DataForm() {
  const [nama, setNama] = useState("");
  const [kelas, setKelas] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nama.trim() || !kelas.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Oops!",
        text: "Nama dan kelas wajib diisi.",
        confirmButtonColor: "#721C24",
      });
      return;
    }

    if (data.length >= 5) {
      Swal.fire({
        icon: "error",
        title: "Kuota Penuh",
        text: "Maksimal hanya 5 data.",
        confirmButtonColor: "#721C24",
      });
      return;
    }

    const newData = [
      ...data,
      {
        nama,
        kelas,
      },
    ];

    setData(newData);

    setNama("");
    setKelas("");

    if (newData.length === 5) {
      Swal.fire({
        icon: "success",
        title: "Kuota Penuh",
        text: "Data sudah mencapai batas maksimal 5.",
        confirmButtonColor: "#721C24",
      });
    }
  };

  const hapusSemua = () => {
    Swal.fire({
      title: "Hapus Semua Data?",
      text: "Data yang dihapus tidak bisa dikembalikan.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#721C24",
      cancelButtonColor: "#999",
      confirmButtonText: "Ya, Hapus",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        setData([]);

        Swal.fire({
          icon: "success",
          title: "Berhasil",
          text: "Semua data berhasil dihapus.",
          confirmButtonColor: "#721C24",
        });
      }
    });
  };

  return (
    <section className="student-section">

      {/* FORM */}
      <div className="form-box">

        <h2>Input Data Siswa</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Masukkan Nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />

          <input
            type="text"
            placeholder="Masukkan Kelas"
            value={kelas}
            onChange={(e) => setKelas(e.target.value)}
          />

          <button
            type="submit"
            className="save-btn"
          >
            Tambah Data
          </button>

        </form>

        {data.length > 0 && (
          <button
            type="button"
            className="delete-btn"
            onClick={hapusSemua}
          >
            Hapus Semua
          </button>
        )}

      </div>

      {/* TABLE */}
      {data.length > 0 && (
        <div className="table-box">

          <h2>Data Siswa</h2>

          <table>

            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Kelas</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.nama}</td>
                  <td>{item.kelas}</td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>
      )}

    </section>
  );
}

export default DataForm;