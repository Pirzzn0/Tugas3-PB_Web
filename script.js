// // 1. Mengubah isi dan gaya paragraf pertama (p1) di dalam section A
// // Kita ubah getElementById('paragraphs') menjadi querySelector menargetkan '.p1'
// const p1 = document.querySelector('section#a .p1');
// p1.style.fontSize = '18px';
// p1.style.fontFamily = 'Arial, sans-serif';
// p1.innerHTML = 'Kami senang Anda berada di sini. Jelajahi konten kami dan temukan informasi menarik!';

// // 2. Memanipulasi paragraf 4 di dalam section B
// const p4 = document.querySelector('#b p');
// p4.style.fontSize = '16px';
// p4.style.color = 'green';

// // 3. Memanipulasi list item ke-2 (item 2) di dalam section B
// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.fontWeight = 'bold';
// li2.style.textDecoration = 'underline';
// li2.style.backgroundColor = 'red';

// // 4. Memanipulasi elemen dengan id 'judul'
// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Selamat Datang di Situs Kami!</em>';

// // 5. Mengganti SELURUH isi dari section A (Hati-hati: ini akan menimpa p1, link IG, p2, dan p3)
// // Jika Anda menjalankan baris ini, modifikasi p1 di atas tidak akan terlihat lagi karena tertimpa.
// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = '<h2>Informasi Terbaru</h2><p>Temukan berita dan pembaruan terkini di sini.</p>';

const judul = document.getElementBygTagName('h1')[0];
const a = document.querySelector('section#a');