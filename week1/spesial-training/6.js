/*
Tiap huruf di dalam string memiliki indeks agar dapat diakses 1 per 1
Indeks di dalam string dimulai dari hitungan 0

string = 'Hallo Sir' 
index =>  012345678

dalam string di atas hurf H terdapat di index ke 0
dan huruf o terdapat di index ke 4

untuk dapat mengakses tiap huruf menggunakan index, dapat ditulis dengan cara seperti berikut:
- untuk mendapatkan kata pertama dari string ('Hallo') dapat menggunakan cara 
let kataPertama = string[0] + string[1] + string[2] + string[3] = string[4]
// huruf yang diakses    H           a           l           l           o    => 'Hallo'

Buatlah sebuah proses untuk menyusun kata yang urutannya terbalik dengan mengakses huruf per huruf menggunakan index nya
*/

let string = 'so is cool Javascript';
// susun menjadi 'Javascript is so cool'

let kataPertama; // silahkan di isi dengan karakter yang tepat
let kataKedua = string[3] + string[4];
let kataKetiga; // silahkan di isi dengan karakter yang tepat
let kataKeempat; // silahkan di isi dengan karakter yang tepat

console.log(`${kataPertama} ${kataKedua} ${kataKetiga} ${kataKeempat}`)


