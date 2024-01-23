const mahasiswaNiM ='401932';
const updatedData={
  nama: 'desta',
  gender: 'L',
  prodi:'TI',
  alamat:'cibatu'
};

fetch(`http://localhost:3000/mahasiswa/${mahasiswaNiM}`, {
  method:'PUT',
  headers:{
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(updatedData)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(' error:', error));

// METHOD POST
const newData = {
  nim: '401942',
  nama: 'cantika',
  gender: 'P',
  prodi: 'TE',
  alamat: 'cisaat',
};

fetch(`http://localhost:3000/mahasiswa`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newData),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

// METHOD DELETE
const nimToDelete = '401931';

fetch(`http://localhost:3000/mahasiswa/${nimToDelete}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

// DOSEN
// METHOD PUT
const dosenNip = '201';
const updatedDosenData = {
  nama: 'meri',
  gender: 'L',
  kontak: '085270719691',
  alamat: 'cisaat',
};

fetch(`http://localhost:3000/dosen/${dosenNip}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(updatedDosenData),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

// METHOD POST
const newDosenData = {
  nip: '105',
  nama: 'assa',
  gender: ' L',
  kontak: '',
  alamat: 'cibatu',
};

fetch(`http://localhost:3000/dosen`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(newDosenData),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

// METHOD DELETE
const nipToDelete = '202';

fetch(`http://localhost:3000/dosen/${nipToDelete}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
