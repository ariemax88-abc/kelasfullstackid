// console.log('Bakal muncul pertama');

// setTimeout(() => {
//     console.log(
//         'ini udah masuk memory proses tapi dijalankan setelah 3 detik kedepan'
//     );
// }, 3000);

// console.log('Bakal muncul kedua');

setTimeout(function() {
    document.body.style.backgroundColor = 'red';

    setTimeout(function() {
        document.body.style.backgroundColor = 'yellow';
        setTimeout(function() {
            document.body.style.backgroundColor = 'green';
            setTimeout(function() {
                document.body.style.backgroundColor = 'blue';
            },2000);
        },2000);
    },2000);
},2000);

searchMoviesApi('naruto', function (movies) {
    saveToMyDb(movies,
         function (){
        // kalau berhasil kita simpan
        filteringMovie(
            movies,
            () => {},
            () => {} 
        );
    },
    () => {
        // kalau gagal kita coba lagi
        }
    );
},
() => {
    // server error
});
