const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Masukkan jenis olahraga (lari,push-up,plank): ", function(olahraga){
    rl.question("Masukkan durasi olahraga (dalam menit): ", function(durasi){

        if (olahraga === "lari"){
            let kalori = (durasi /5) * 60;
            console.log ("kalori yang terbakar adalah: ", kalori);
        } else if (olahraga === "push-up"){
            let kalori = (durasi /30) * 200;
            console.log ("kalori yang terbakar adalah: ", kalori);
        } else if (olahraga === "plank"){
            let kalori = (durasi /10) * 50;
            console.log ("kalori yang terbakar adalah: ", kalori);
        } else {
            console.log("Masukkan olahraga yang ada");
        }
    })
})