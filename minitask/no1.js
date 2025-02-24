function fetchData (status) {
    return new Promise(function (resolve, reject) {
        setTimeout (function() {
            if(status === true) {
                resolve("Data berhasil diambil")
            } else {
                reject("Gagal mengambil data")
            }
        }, 3000)
    })
}

/*
Promise
Sebuah function yang menandai operasi asynchronous dengan 2 parameter, resolve dan reject
'then' dan 'catch' adalah method yang ada di dalam 'promise' yang berfungsi untuk menangani hasil dari resolve dan reject. 'then' akan menangkap hasil dari resolve, yaitu jika promise dijalankan dengan benar
sedangkan 'catch' akan menangkap hasil dari reject, yaitu jika terjadi error
*/

export const handleFetchData = (status) => {
    return fetchData(status)
    .then((successMsg) => 
    console.log(successMsg))
    .catch((errorMsg) =>
    console.log(errorMsg))
}

/*
async-await
memiliki fungsi yang sama dengan promise, tetapi struktur yang dimiliki menyerupai synchronous. maka dari itu di depan nama function diberi async untuk menandai proses berjalan asynchronous, dan proses yang membutuhkan input dari proses lainnya diberi tanda await
'try' dan 'catch' adalah method untuk error handling. dalam case ini, 'try' dan 'catch' digunakan bersamaan dengan 'async-await'
'try' akan dijalankan jika proses berjalan dengan seharusnya. 'catch' akan dijalankan jika terdapat error yang muncul di 'try' dan akan menampilkan error
*/
export async function fetchDataAsync(status) {
    try {
        const hasil = await fetchData(status)
        console.log(hasil);
    } catch (er) {
        console.log(er);
    }
}