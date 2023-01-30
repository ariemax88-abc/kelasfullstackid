typeof []
const orang = {
    nama: 'Aim', 
    tanggal: 16,
    alamat: 'Malang', 
}

console.log(orang);

const barang = {
    judul: 'Sepatu', 
    harga: 2000000,
    isReady: true,
    size: ['38', '39', '40', '41', '42'],
    location: {
        indonesia: 48,
        singapore: 50
    }
}

console.log(barang); 

console.log(orang['nama']);
console.log(orang['tanggal']);
console.log(orang['alamat']);
console.log(orang.nama);
console.log(orang.tanggal);
console.log(orang.alamat);

console.log(barang['is' + 'Ready']);
console.log(barang['loca' + 'tion']);
console.log(barang.location.indonesia);





