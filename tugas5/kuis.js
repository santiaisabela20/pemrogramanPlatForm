const kuis = {
    nilai: 75,
    cekKelulusan: () => {
      if (kuis.nilai >= 70) {
        console.log("Anda lulus kuis.");
      } else {
        console.log("Anda tidak lulus kuis.");
      }
    },
  };
  
  module.exports = kuis;
  