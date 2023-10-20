let pendapatanSalesman = 500000
let uangJasa = 0
let komisi = 0

if (pendapatanSalesman <= 2000000){
    uangJasa = 10000
    komisi = pendapatanSalesman * 0.1 
}else if (hasilSalesman > 200000 && hasilSalesman <= 500000){
    uangJasa = 20000
    komisi = pendpaatanSalesman * 0.15
} else if (pendapatanSalesman > 500000){
    uangJasa = 30000
    komisi = pendapatanSalesman *0.2

}

let totalKomisi = uangJasa + komisi
console.log(`pendapatan Salesman sebesar Rp.${pendapatanSalesman}`)
console.log(`Uang Jasa sebesar Rp.${uangJasa} dan Komisi sebesar Rp.${komisi}`)
console.log(`Selamat anda mendapatkan Total Komisi sebesar Rp.${totalKomisi}`)