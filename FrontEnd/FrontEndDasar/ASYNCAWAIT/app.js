console.log('Bakal muncul pertama');

setTimeout(() => {
    console.log(
        'ini udah masuk memory proses tapi dijalankan setelah 3 detik kedepan'
    );
}, 3000);

console.log('Bakal muncul kedua');