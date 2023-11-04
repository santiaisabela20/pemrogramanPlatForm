const jadwalMatkul = {
    hari: "Rabu",
    waktu: "08:00 - 10:30",
    cekHariKuliah: () => {
      if (jadwalMatkul.hari === "Rabu" || jadwalMatkul.hari === "Senin") {
        console.log("Hari ini adalah hari kuliah.");
      } else {
        console.log("Hari ini bukan hari kuliah.");
      }
    },
  };
  
  module.exports = jadwalMatkul;
  