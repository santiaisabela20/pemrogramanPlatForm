const dosen = {
    namaDosen: "SOMANTRI, S.T, M.Kom",
    infoTambahan: "Ti22j", // Informasi tambahan berisi kode kelas
  
    cekInfoTambahan: () => {
      if (dosen.infoTambahan) {
        if (dosen.infoTambahan === "WEB101") {
          console.log("Dosen ini mengajar kelas Pemrograman Web.");
        } else {
          console.log("Dosen ini mengajar kelas dengan kode: " + dosen.infoTambahan);
        }
      } else {
        console.log("Informasi tambahan tidak tersedia.");
      }
    },
  };
  
  module.exports = dosen;
  