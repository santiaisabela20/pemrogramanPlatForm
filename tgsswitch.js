let pendapatanSalesman = 500000
let uangJasa = 0
let komisi = 0

switch (true) {
    case (pendapatanSalesman <= 200000):
        uangJasa = 10000
        komisi = pendapatanSalesman * 0.1
        break;
    case (pendapatanSalesman > 200000 && pendapatanSalesman <=500000):
        uangJasa = 20000
        komisi =pendapatanSalesman * 0.15
        break;
    case (pendapatanSalesaman > 5000000):
        uangJasa = 30000
        komisi = pendapatanSalesman * 0.2
        break;
}
let totalkomisi = uangJasa + komisi
console.log (`pendapatan salesman sebesar Rp.${pendapatanSalesman}`)
console.log (` uang Jasa sebesar Rp.${uangJasa} dan komisi sebesar Rp.${komisi}`)
console.log(`selamat anada mendapatkan total komisi Rp.${totalkomisi}`)