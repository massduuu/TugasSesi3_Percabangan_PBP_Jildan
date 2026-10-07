const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Masukkan total belanja: ", function(inputBelanja) {
    let totalBelanja = Number(inputBelanja); 
    let diskon = 0;

    if (totalBelanja >= 250000) {
        diskon = totalBelanja * 10 / 100;
    } 
    else if (totalBelanja >= 100000) {
        diskon = totalBelanja * 5 / 100;  
    } 
    else if (totalBelanja >= 50000) {
        diskon = totalBelanja * 3 / 100;  
    } 
    else {
        diskon = 0;                       
    }

    let totalBayar = totalBelanja - diskon;

    console.log("Total belanja anda adalah Rp " + totalBelanja);
    console.log("Diskon yang diperoleh adalah Rp " + diskon);
    console.log("Total yang harus dibayar adalah Rp " + totalBayar);

    rl.close();
});