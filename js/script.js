const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

hamburger.onclick = (e) => {
  e.preventDefault(); // cegah scroll ke atas
  navbarNav.classList.toggle("active");
};

// klik di luar nav untuk tutup menu
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
let childInfo = {}; // <--- Tambahkan ini


function openModal() {
  document.getElementById("diagnosisModal").style.display = "block";
  const container = document.getElementById("question-container");

  container.innerHTML = `
    <h3>Silakan isi data anak terlebih dahulu:</h3>
    <input type="text" id="childName" placeholder="Nama Anak" required>
    <input type="text" id="childAge" placeholder="Usia (bulan)" required>
    <div style="margin: 10px 0;">
      Jenis Kelamin: 
      <label><input type="radio" name="gender" value="Laki-laki" checked> Laki-laki</label>
      <label><input type="radio" name="gender" value="Perempuan"> Perempuan</label>
    </div>
    <input type="text" id="childWeight" placeholder="Berat Badan (gram), isi '-' jika tidak tahu">
    <button class="answer-btn" onclick="startDiagnosis()">Mulai Diagnosa</button>
  `;
}

function startDiagnosis() {
  const name = document.getElementById("childName").value.trim();
  const age = document.getElementById("childAge").value.trim();
  const weight = document.getElementById("childWeight").value.trim();
  const gender = document.querySelector('input[name="gender"]:checked').value;

  if (!name || !age || !weight) {
    alert("Mohon lengkapi semua data terlebih dahulu.");
    return;
  }

  childInfo = { name, age, gender, weight };
  showQuestion(0);
}


function closeModal() {
  document.getElementById("diagnosisModal").style.display = "none";
  currentQuestion = 0;
}

container.innerHTML = `<h3>${q.question}</h3>`;

function showQuestion(index) {
  const container = document.getElementById("question-container");
  const q = questions[index];

  // Reset isi container
  container.innerHTML = "";

  // Tambahkan teks pertanyaan
  const questionElement = document.createElement("h3");
  questionElement.innerText = q.question;
  container.appendChild(questionElement);

  // Buat wrapper tombol
  const buttonWrapper = document.createElement("div");
  buttonWrapper.style.display = "flex";
  buttonWrapper.style.gap = "10px";
  buttonWrapper.style.marginTop = "20px";
  buttonWrapper.style.flexWrap = "wrap";
  buttonWrapper.style.justifyContent = "center";

  // Tambahkan setiap tombol ke wrapper
  q.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.innerText = opt.text;
    btn.onclick = () => {
      if (opt.result) {
 container.innerHTML = `
  <div class="child-info">
  <h2>Data Anak :</h2>
    <p><strong>Nama :</strong> ${childInfo.name}</p>
    <p><strong>Usia :</strong> ${childInfo.age}</p>
    <p><strong>Jenis Kelamin :</strong> ${childInfo.gender}</p>
    <p><strong>Berat Badan :</strong> ${childInfo.weight}</p>
  </div>
  <div class="diagnosis-result">
    <h3>Hasil Diagnosa:</h3>
    <p>${opt.result}</p>
  </div>
  <button onclick="closeModal()" class="answer-btn">Tutup</button>
`;


}
 else {
        showQuestion(opt.next);
      }
    };
    buttonWrapper.appendChild(btn);
  });

  // Tambahkan wrapper tombol ke container
  container.appendChild(buttonWrapper);
}

