// Variabel untuk melacak halaman saat ini
let currentPage = 1;
const totalPages = 5;

// Fungsi untuk menampilkan notifikasi kustom
function showMessage(message) {
  const modal = document.getElementById("modal");
  const modalMessage = document.getElementById("modal-message");
  modalMessage.textContent = message;
  modal.style.display = "block";
}

// Fungsi untuk menutup notifikasi kustom
function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

// Fungsi untuk navigasi ke halaman selanjutnya
function nextPage() {
  if (currentPage < totalPages) {
    document.getElementById(`page${currentPage}`).classList.remove("active");
    currentPage++;
    document.getElementById(`page${currentPage}`).classList.add("active");

    // Panggil inisialisasi animasi jika diperlukan di halaman tertentu
    if (currentPage === 2) createRainbowFireworks();
    if (currentPage === 3) createBubbles();
  }
}

// Fungsi untuk navigasi ke halaman sebelumnya
function prevPage() {
  if (currentPage > 1) {
    document.getElementById(`page${currentPage}`).classList.remove("active");
    currentPage--;
    document.getElementById(`page${currentPage}`).classList.add("active");
  }
}

// Fungsi untuk memeriksa login
function checkLogin() {
  const nama = document
    .getElementById("namaInput")
    .value.toLowerCase()
    .trim()
    .replace(/\s/g, "");
  const password = document
    .getElementById("passwordInput")
    .value.trim()
    .replace(/\s/g, "");

  // Logika validasi nama dan password
  if (nama === "wisnuhendinugroho" && password === "10072001") {
    showMessage("Pinter cantikku!");
    setTimeout(nextPage, 2000); // Lanjut ke halaman berikutnya setelah 2 detik
  } else {
    showMessage("Masak ngga tau sih? Lucu dehh!");
  }
}

/* --- Animasi Awal & Global --- */

// Fungsi untuk membuat bintang jatuh di halaman pertama
function createStars() {
  const starContainer = document.querySelector(".star-container");
  for (let i = 0; i < 200; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.width = star.style.height = `${Math.random() * 3 + 1}px`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.animationDuration = `${Math.random() * 5 + 3}s`;
    star.style.animationDelay = `${Math.random() * 3}s`;
    starContainer.appendChild(star);
  }
}

// Fungsi untuk membuat kembang api pelangi di halaman kedua
function createRainbowFireworks() {
  const page2 = document.getElementById("page2");
  setInterval(() => {
    // Hanya jalankan jika halaman 2 sedang aktif
    if (document.getElementById("page2").classList.contains("active")) {
      const firework = document.createElement("div");
      firework.className = "firework";
      firework.style.left = `${Math.random() * 100}%`;
      firework.style.setProperty("--hue", Math.random() * 36);
      page2.appendChild(firework);

      setTimeout(() => {
        firework.remove();
      }, 2000);
    }
  }, 500);
}

// Fungsi untuk membuat gelembung foto di halaman ketiga
function createBubbles() {
  const bubbleContainer = document.querySelector(".bubble-container");
  const photoUrls = [
    "img/t1.jpg",
    "img/t2.jpg",
    "img/t5.jpg",
    "img/t3.jpg",
    "img/t4.jpg",
  ];

  photoUrls.forEach((url, index) => {
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    // Set posisi kiri atau kanan berdasarkan indeks
    if (index % 2 === 0) {
      // Posisi untuk sisi kiri (indeks 0 dan 2)
      bubble.style.left = `${Math.random() * 30 + 10}%`; // antara 10% dan 40%
    } else {
      // Posisi untuk sisi kanan (indeks 1 dan 3)
      bubble.style.left = `${Math.random() * 30 + 50}%`; // antara 60% dan 90%
    }
    bubble.style.top = `${Math.random() * 100 + 5}%`;
    bubble.style.animationDuration = `${Math.random() * 5 + 10}s`;
    bubble.style.animationDelay = `${Math.random() * 1}s`;
    bubble.innerHTML = `<img src="${url}" alt="Foto Thalia" class="w-full h-full object-cover rounded-full" />`;
    bubbleContainer.appendChild(bubble);
  });
}

// Fungsi untuk membuat animasi di halaman terakhir (halaman 5)
function createFinalAnimations() {
  const page5 = document.getElementById("page5");

  // Buat Kembang Api Hati
  setInterval(() => {
    if (page5.classList.contains("active")) {
      const heart = document.createElement("div");
      heart.className = "love-firework";
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.top = `${Math.random() * 50 + 50}%`;
      page5.appendChild(heart);
      setTimeout(() => {
        heart.remove();
      }, 1000);
    }
  }, 800);
}

// Inisialisasi animasi saat halaman dimuat
window.onload = function () {
  createStars();
  document.body.classList.remove("container"); // Mulai animasi bintang segera setelah halaman dimuat
};

/* 
  Kode YouTube IFrame API dihapus karena tidak digunakan.
  Untuk pemutaran audio, gunakan elemen <audio> di index.html dan kontrolnya melalui JavaScript jika diperlukan.
  Contoh kontrol audio:
*/

// Mendapatkan elemen audio (pastikan ada <audio id="myAudio" src="audio/namafile.mp3"></audio> di index.html)
const audio = document.getElementById("audio-player");

// Fungsi untuk play audio dari detik 45 dan loop terus
function playAudioFrom45() {
  if (audio) {
    audio.currentTime = 45;
    audio.volume = 0.7;
    audio.play().catch((err) => {
      console.error("Audio playback failed:", err);
    });
  }
}

// Saat audio berakhir, ulangi dari detik 45
if (audio) {
  audio.addEventListener("ended", () => {
    audio.currentTime = 45;
    audio.play();
  });
}

// Play otomatis saat halaman dimuat, mulai dari detik 45
window.addEventListener("DOMContentLoaded", () => {
  playAudioFrom45();
});
