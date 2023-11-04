const matkul = require('./matkul');
const jadwalMatkul = require('./jadwalMatkul');
const kuis = require('./kuis');
const dosen  = require('./dosen');

console.log("matkul:");
console.log(`Nama Mata Kuliah: ${matkul.namaMataKuliah}`);
console.log(`Kode Mata Kuliah: ${matkul.kodeMataKuliah}`);

matkul.cekDeskripsi();

console.log("\nJadwal Matkul:");
console.log(`Hari: ${jadwalMatkul.hari}`);
console.log(`Waktu: ${jadwalMatkul.waktu}`);

jadwalMatkul.cekHariKuliah();

console.log("\nHasil kuis:");
kuis.cekKelulusan();

console.log("\ndosen:");
console.log(`Nama Dosen: ${dosen.namaDosen}`);
dosen.cekInfoTambahan();
