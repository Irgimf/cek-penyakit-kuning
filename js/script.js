// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

const questions = [
  {
    question: "Apakah warna urin dan feses normal?", // 0
    options: [
      { text: "Ya", next: 1 },
      { text: "Tidak", next: 2 },
    ],
  },
  {
    question: "Apakah kuning muncul kurang dari 24 jam setelah bayi lahir?", // 1
    options: [
      { text: "Ya", next: 3 },
      { text: "Tidak", next: 4 },
    ],
  },
  {
    question: "Apakah urin gelap dan feses dempul?", // 2
    options: [
      {
        text: "Ya",
        result: "Kemungkinan atresia bilier. Rujuk ke spesialis bedah anak.",
      },
      {
        text: "Tidak",
        next: 5,
      },
    ],
  },
  {
    question:
      "Apakah golongan darah ibu dan anak berbeda? atau apakah rhesus anak dan ibu berbeda?", // 3
    options: [
      {
        text: "Ya",
        result:
          "Inkompatibilitas ABO/rhesus. Lakukan commbtest di spesialis anak.",
      },
      { text: "Tidak", next: 6 },
    ],
  },
  {
    question: "Apakah lebih dari 1 minggu?", // 4
    options: [
      { text: "Ya", next: 7 },
      {
        text: "Tidak",
        next: 8,
      },
    ],
  },
  {
    question: "Apakah kuning muncul kurang dari 24 jam dari kelahiran?", // 5
    options: [
      {
        text: "Ya",
        result: "Kemungkinan infeksi TORCH. Rujuk ke spesialis anak.",
      },
      {
        text: "Tidak",
        next: 9,
      },
    ],
  },
  {
    question: "Apakah ada riwayat kuning pada saudaranya?", // 6
    options: [
      {
        text: "Ya",
        result: "Kemungkinan penyakit turunan. Rujuk ke spesialis anak.",
      },
      {
        text: "Tidak",
        next: 10,
      },
    ],
  },
  {
    question: "Apakah bayi menyusu dengan baik?", // 7
    options: [
      {
        text: "Ya",
        result:
          "Breastmilk Jaundice. Pantau level bilirubin, pertimbangkan fototerapi.",
      },
      {
        text: "Tidak",
        result:
          "Breastmilk Jaundice. Mengedukasi orang tua untuk menyusui dengan adekuat 8-12 kali sehari.",
      },
    ],
  },
  {
    question: "Apakah terdapat penurunan berat badan dan dehidrasi", // 8
    options: [
      {
        text: "Ya",
        result:
          "Breastfeed Jaundice. Mengedukasi orangtua untuk menyusui dengan adekuat 8-12 kali sehari.",
      },
      {
        text: "Tidak",
        result:
          "Kemungkinan kuning fisiologis (normal). Kuning hilang kurang dari 2 minggu",
      },
    ],
  },
  {
    question: "Apakah kuning menetap lebih dari 1 minggu?", // 9
    options: [
      {
        text: "Ya",
        result: "Hipotiroid. Lakukan screening tiroid (TSH)",
      },
      {
        text: "Tidak",
        next: 11,
      },
    ],
  },
  {
    question: "Apakah ada riwayat lahir dengan vakum atau forseps?", // 10
    options: [
      {
        text: "Ya",
        result: "Kemungkinan pendarahan tersembunyi. Rujuk ke spesialis anak.",
      },
      {
        text: "Tidak",
        result: "Kemungkinan polycythemia. Lakkukan tes hemoglobin.",
      },
    ],
  },
  {
    question: "Apakah terdapat gagal nafas?", // 11
    options: [
      {
        text: "Ya",
        result: "Sepsis. Lakukan tatalaksana sepsis. Pertimbangkan NICU/PICU.",
      },
      {
        text: "Tidak",
        result: "Infeksi lain. Temukan penyebab infeksi lain.",
      },
    ],
  },
];

let currentQuestion = 0;

function openModal() {
  document.getElementById("diagnosisModal").style.display = "block";
  showQuestion(0);
}

function closeModal() {
  document.getElementById("diagnosisModal").style.display = "none";
  currentQuestion = 0;
}

function showQuestion(index) {
  const container = document.getElementById("question-container");
  const q = questions[index];
  container.innerHTML = `<h3>${q.question}</h3>`;
  q.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.innerText = opt.text;
    btn.onclick = () => {
      if (opt.result) {
        container.innerHTML = `<h3>Hasil Diagnosa:</h3><p>${opt.result}</p><button onclick="closeModal()" class="answer-btn">Tutup</button>`;
      } else {
        showQuestion(opt.next);
      }
    };
    container.appendChild(btn);
  });
}
