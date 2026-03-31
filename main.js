let dataBarang = [] //aray global untuk menyimpan data barang 

// fungsi format rupiah 1.000.000
function rupiah(angka) {
  return angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// fungsi untuk menambah barang ke dalam keranjang
function tambah() {
  //mengambil data harga dari elemen input dengan id "hargainput"
  //dan mengubah menjadi angka
  let harga = Number(document.getElementById("hargainput").value)
  
  //masukkan data harga ke dalam array databarang
  dataBarang.push(harga)
  
  document.getElementById("hargainput").value = ""
  
  //tampilkan data harga barang
  tampilkan()
}

function tampilkan() {
  let total = 0
  let output = ""
  
  //loop input harga barang dari array global data barang
  for (let i = 0; i < dataBarang.length; i++) {
    let harga = dataBarang[i]
    total += harga
    
    output += "Barang ke-" + (i + 1) + ": Rp " + rupiah(harga) + "<br>"
  }
  
  output += "<hr>Total: Rp" + rupiah(total)
  
  document.getElementById("hasil").innerHTML = output
}
// fungsi untuk mengahapus barang terakhir dari keranjang
function hapus() {
  dataBarang.pop()
  tampilkan()
}
// fungsi untuk mereset keranjang
function reset() {
  dataBarang = []
  tampilkan()
}

//fungsi untuk mengedit harga barang berdasarkan nomor barang
function edit() {
  //ubah nomor barang menjadi index array dengan mengurangi 1
  let index = Number(document.getElementById("nomor").value) - 1
  // ambil harga editdari input
  let harga = Number(document.getElementById("hargaedit").value)
  
  // periksa apakah indrx valid
  if (index >= 0 && index < dataBarang.length) {
    dataBarang[index] = harga
  } else {
    alert("Nomor barang tidak valid")
  }
tampilkan()
document.getElementById("nomor").value =""
document.getElementById("hargaedit").value =""

}