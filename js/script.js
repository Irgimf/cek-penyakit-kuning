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
        result: "Dicurigai terdapat kondisi kelainan bawaan berupa penyumbatan saluran empedu (atresia bilier) yang bisa menyebabkan gangguan pembuangan bilirubin.",
        action: "Perlu segera dirujuk ke dokter spesialis bedah anak untuk diagnosis dan penanganan lanjut.",
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
        result: "Inkompatibilitas ABO/rhesus.",
        action: "Perlu dilakukan pemeriksaan kadar bilirubin total dan langsung untuk memastikan diagnosis. Jika kadar bilirubin tinggi, perlu rujukan ke dokter spesialis anak.",
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
        result: "Ada potensi bayi mengalami infeksi dari kelompok TORCH (Toxoplasma, Rubella, CMV, Herpes, dll) yang dapat ditularkan dari ibu saat hamil.",
        action: "Segera lakukan rujukan ke dokter spesialis anak untuk pemeriksaan dan terapi yang tepat.",
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
        result: "Diduga ada gangguan metabolik atau kelainan genetik bawaan pada bayi yang menyebabkan warna kuning.",
        action: "Perlu dilakukan rujukan ke dokter spesialis anak untuk evaluasi dan diagnosis lebih lanjut.",
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
        result: "Breastmilk Jaundice.",
        action: "Ikterus pada bayi akibat menyusui memerlukan pemantauan lanjutan berupa berat badan dan kadar bilirubin. Jika bilirubin tinggi, pertimbangkan untuk memulai terapi sinar (fototerapi) sambil tetap memberikan ASI.",
      },
      {
        text: "Tidak",
        result: "Breastmilk Jaundice. Kuning pada bayi kemungkinan karena kurangnya frekuensi menyusui.",
        action: "Penting untuk melakukan evaluasi apakah bayi sudah menyusu 8–12 kali sehari sebagai upaya mengatasi kondisi kuning.",
      },
    ],
  },
  {
    question: "Apakah terdapat penurunan berat badan dan dehidrasi", // 8
    options: [
      {
        text: "Ya",
        result: "Breastfeed Jaundice.",
        action: "Diperlukan evaluasi terhadap pola menyusui orangtua untuk memastikan bayi mendapat cukup ASI, idealnya dilakukan 8 sampai 12 kali sehari untuk membantu mengeluarkan bilirubin dari tubuh bayi.",
      },
      {
        text: "Tidak",
        result: "Kuning yang terjadi pada bayi kemungkinan merupakan kondisi normal yang sering terjadi pada bayi baru lahir (ikterus fisiologis)",
        action: "biasanya tidak memerlukan pengobatan dan akan membaik dengan sendirinya. Dianjurkan untuk terus memantau perkembangan bayi dan memastikan bayi tetap menyusu dengan baik.",
      },
    ],
  },
  {
    question: "Apakah kuning menetap lebih dari 1 minggu?", // 9
    options: [
      {
        text: "Ya",
        result: "Bayi mungkin mengalami gangguan fungsi tiroid bawaan (hipotiroidisme kongenital).",
        action: "Disarankan untuk melakukan pemeriksaan kadar hormon TSH guna memastikan dan memulai penanganan sedini mungkin.",
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
        result: "Kemungkinan pendarahan tersembunyi.",
        action: "Disarankan untuk melakukan pemeriksaan kadar hemoglobin guna memastikan tidak ada perdarahan yang signifikan.",
      },
      {
        text: "Tidak",
        result: "Terdapat kemungkinan kondisi polycythemia, yaitu jumlah sel darah merah terlalu tinggi.",
        action: "Disarankan untuk melakukan pemeriksaan kadar hemoglobin guna menentukan apakah ada kelebihan sel darah merah yang perlu ditangani.",
      },
    ],
  },
  {
    question: "Apakah terdapat gagal nafas?", // 11
    options: [
      {
        text: "Ya",
        result: "Ada dugaan bayi mengalami infeksi berat atau sepsis.",
        action: "Segera lakukan evaluasi menyeluruh untuk sepsis dan jika perlu dirawat intensif di unit NICU atau PICU agar mendapatkan perawatan optimal.",
      },
      {
        text: "Tidak",
        result: "Kuning pada bayi mungkin disebabkan oleh infeksi selain TORCH atau sepsis.",
        action: "Dibutuhkan pemeriksaan lebih lanjut untuk mengidentifikasi infeksi lain yang mungkin menjadi penyebab kondisi tersebut.",
      },
    ],
  },
];

let currentQuestion = 0;
let childInfo = {}; 


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
    <button class="answer-btn" id="start-btn">Mulai Diagnosa</button>
  `;

  document.getElementById("start-btn").addEventListener("click", startDiagnosis);
}



function startDiagnosis() {
  childInfo = {
    name: document.getElementById("childName").value.trim(),
    age: document.getElementById("childAge").value.trim(),
    gender: document.querySelector('input[name="gender"]:checked')?.value,
    weight: document.getElementById("childWeight").value.trim(),
  };

  if (!childInfo.name || !childInfo.age || !childInfo.gender || !childInfo.weight) {
    alert("Mohon lengkapi semua data anak terlebih dahulu.");
    return;
  }

  currentQuestion = 0;
  showQuestion(currentQuestion);
}





function closeModal() {
  document.getElementById("diagnosisModal").style.display = "none";
  currentQuestion = 0;
}



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
      <p><strong>Tindakan Lanjutan:</strong> ${opt.action || "Segera konsultasi ke dokter anak."}</p>
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

  container.appendChild(buttonWrapper);
}

