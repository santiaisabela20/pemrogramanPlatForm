const matkul  = {
    namaMataKuliah: "Pemrograman Web",
    kodeMataKuliah: "tugas5",
    deskripsiMataKuliah: "Mata kuliah ini mengajarkan dasar-dasar pemrograman web.",
    cekDeskripsi: () => {
      if (matkul.deskripsiMataKuliah) {
        console.log("Deskripsi mata kuliah tersedia.");
      } else {
        console.log("Deskripsi mata kuliah tidak tersedia.");
      }
    },
  };
  
  module.exports = matkul;
  