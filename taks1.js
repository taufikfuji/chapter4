let inputUmur= 25;
function kategoriUsia(umur) {
    if(typeof umur !== "number" ){
        return ("Tipe data harus number");
    }
    else if (umur >= 0 && umur <= 12) {
        return "Anak-anak";
    } else if (umur >= 13 && umur <= 19) {
        return "Remaja";
    } else if (umur >= 20 && umur <= 35) {
        return "Dewasa";
    } else {
        return "Lanjut Usia";
    }
}
var kategori = kategoriUsia(inputUmur);
console.log( kategori); 