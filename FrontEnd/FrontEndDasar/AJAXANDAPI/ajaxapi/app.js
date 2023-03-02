// const req = new XMLHttpRequest();
// let data;

// // kalau berhasil dilakukan disini
// req.onload = function(){
//     data = JSON.parse(this.responseText);
//     console.log(data);
// };

// // kalau gagal disini
// req.onerror = function(){
//     console.log("Error", this);
// };

// req.open('GET', 'http://swapi.dev/api/people/1', true);
// myReq.setRequestHeader('Accept', 'application/json');
// req.send();

// 10. Req use fetch
// case 1
// fetch('https://swapi.dev/api/people/1')
//     .then((res) => {
//         if (!res.ok) {
//             throw Error('Could not fetch the data for that resource');
//         }
//         //console.log(res);
//         return res.json();
//     })
//     .then((data) => {
//         console.log('json', data);
//     })
//     // catch di bawah untuk handle error
//     .catch((err) => {
//         console.log('error', err);
//     });

// case 2 - req di dalam req
    // fetch('https://swapi.dev/api/people/1')
    // .then((res) => {
    //     if (!res.ok) {
    //         throw Error('Could not fetch the data for that resource');
    //     }
    //     //console.log(res);
    //     return res.json();
    // })
    // .then((data) => {
    //     console.log('json', data);
    //     return fetch('https://swapi.dev/api/people/2')
    // })
    // .then((res) => {
    //     console.log('request 2')
    //     if (!res.ok) {
    //         throw Error('Could not fetch the data for that resource');
    //     }
    //     //console.log(res);
    //     return res.json();
    // })
    // .then((data) => {
    //     console.log(data);
    // })
    // // catch di bawah untuk handle error
    // .catch((err) => {
    //     console.log('error', err);
    // });

// case 3 - use AsyncAwait(Promise) in fetch 
// const loadPeople = async () => {
//     const res = await fetch('https://swapi.dev/api/people/1');
//     const data = await res.json();
//     console.log(data);
// }

// loadPeople();

// case 4 - req lebih dr 1 in fetch use promise
// const loadPeople = async () => {
//     const res = await fetch('https://swapi.dev/api/people/1');
//     const data = await res.json();
//     console.log(data);
//     const res2 = await fetch('https://swapi.dev/api/people/2');
//     const data2 = await res2.json();
//     console.log(data2);
// }

// loadPeople();

// case 5 - Handle error in Async Await
// const loadPeople = async () => {
//     try {
//     const res = await fetch('https://swapi.dev/api/peopleERROR/1');
//     const data = await res.json();
//     console.log(data);
//     const res2 = await fetch('https://swapi.dev/api/people/2');
//     const data2 = await res2.json();
//     console.log(data2);
//     } catch (err) {
//         // proses lainnya
//         console.log('error', err);
//     }
// };

// loadPeople();

// 11. Req use Library Axios

// case 1: panggil axios
// axios
//     .get('https://swapi.dev/api/people/1')
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// case 2: get data & tampil error
axios
    .get('https://swapi.dev/api/people123/1')
    .then((res) => {
        console.log(res.data);
    })
    .catch((err) => {
        console.log(err);
    });

// case 3: add alert
// axios
//     .get('https://swapi.dev/api/people123/1')
//     .then((res) => {
//         console.log(res.data);
//     })
//     .catch((err) => {
//         console.log(err);
//         alert(err.message);
//     });

// case 4: Use Async Await versi Axios
// const getPeople = async (id) => {
//     try {
//         const res = await axios.get(`https://swapi.dev/api/people/${id}`);
//         console.log(res.data);
//     } catch (error) {
//         console.log(error);
//         console.log(error.message);
//         console.log(error.response.status);
//         console.log(error.response.data);
//     }
// };

