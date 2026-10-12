let dataNama = "";
let dataJumlah = 0;
let arrayPilihan = [];

function gantiFoto(event) {
  let reader = new FileReader();
  reader.onload = function () {
    document.getElementById("fotoProfil").src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
}
function lanjutStep2() {
  dataNama = document.getElementById("nama").value;
  dataJumlah = document.getElementById("jumlah").value;
  if (!dataNama || dataJumlah < 1) {
    return alert("Nama dan Jumlah Pilihan harus diisi dengan benar!");
  }
  let htmlPilihan = "";
  for (let i = 1; i <= dataJumlah; i++) {
    htmlPilihan += `Pilihan ${i} : <input type="text" class="input-teks"><br><br>`;
  }
  document.getElementById("tempatPilihan").innerHTML = htmlPilihan;
  document.getElementById("step2").classList.add("aktif");
}
function lanjutStep3() {
  let inputs = document.querySelectorAll(".input-teks");
  arrayPilihan = [];
  let htmlDropdown = "";

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value === "") {
      return alert("Semua teks pilihan wajib diisi!");
    }
    arrayPilihan.push(inputs[i].value);
    htmlDropdown += `<option value="${inputs[i].value}">${inputs[i].value}</option>`;
  }
  document.getElementById("dropdown").innerHTML = htmlDropdown;
  document.getElementById("step3").classList.add("aktif");
}
function lanjutStep4() {
  document.getElementById("step4").classList.add("aktif");
}
function tampilkanHasil() {
  let email = document.getElementById("email").value;
  let terpilih = document.getElementById("dropdown").value;
  if (!email.includes("@") || !email.includes(".")) {
    return alert(
      "Format email salah! Harus mengandung @ dan domain (misal: .com)",
    );
  }
  let teks = `Nama saya <strong>${dataNama}</strong>, 
    email mahasiswa <strong>${email}</strong>, Matakuliah yang dapat diambil adalah
    <strong>${dataJumlah}</strong>, yaitu <strong>${arrayPilihan.join(", ")}</strong>, 
    sedangkan saya lebih memilih <strong>${terpilih}</strong>.`;
  document.getElementById("hasilAkhir").innerHTML = teks;
  document.getElementById("hasilAkhir").style.display = "block";
}
