const AnemiaSymptoms = new Map([
    [1, "Kelelahan yang berlebihan"],
    [2, "Kulit pucat"],
    [3, "Sesak napas"],
    [4, "Pusing atau pingsan"],
    [5, "Detak jantung cepat"],
    [6, "Mudah marah atau mudah tersinggung"],
    [7, "Kurang nafsu makan"],
    [8, "Sakit kepala"],
    [9, "Sulit berkonsentrasi"],
    [10, "Kesemutan pada tangan dan kaki"],
    [11, "Mudah lelah saat beraktivitas"],
    [12, "Sering infeksi"],
    [13, "Pendarahan hebat saat menstruasi (pada wanita)"],
    [14, "Sulit tidur"],
    [15, "Menggigil atau merasa dingin"]
  ]);
  
  const listAllSymptom = [...AnemiaSymptoms.keys()];
  const IronDeficiencyAnemiaSymptoms = [1, 2, 3, 4];
  const VitaminDeficiencyAnemiaSymptoms = [5, 6, 7, 8];
  const HemolyticAnemiaSymptoms = [9, 10, 11, 12];
  const PerniciousAnemiaSymptoms = [11, 13, 14, 15];
  
  function arraysEqual(a, b) {
      if (a.length !== b.length) {
          return false;
      }
      for (let i = 0; i < a.length; i++) {
          if (a[i] !== b[i]) {
              return false;
          }
      }
      return true;
  }
  function checkSymptom(listSymptom) {
    if (listSymptom.length < 4) {
      return "Kamu  mengalami gejala ANEMIA namun belum bisa ditentukan ";
    }
  
    const hasIronDeficiencyAnemia = listSymptom.filter(symptom => IronDeficiencyAnemiaSymptoms.includes(symptom)).length === 4;
    const hasVitaminDeficiencyAnemia = listSymptom.filter(symptom => VitaminDeficiencyAnemiaSymptoms.includes(symptom)).length === 4;
    const hasHemolyticAnemia = listSymptom.filter(symptom => HemolyticAnemiaSymptoms.includes(symptom)).length === 4;
    const hasPerniciousAnemia = listSymptom.filter(symptom => PerniciousAnemiaSymptoms.includes(symptom)).length === 4;
  
    if (hasIronDeficiencyAnemia && !hasVitaminDeficiencyAnemia && !hasHemolyticAnemia && !hasPerniciousAnemia) {
      return "Anda menderita Anemia Defisiensi Besi.";
    } else if (!hasIronDeficiencyAnemia && hasVitaminDeficiencyAnemia && !hasHemolyticAnemia && !hasPerniciousAnemia) {
      return "Anda menderita Anemia Defisiensi Vitamin.";
    } else if (!hasIronDeficiencyAnemia && !hasVitaminDeficiencyAnemia && hasHemolyticAnemia && !hasPerniciousAnemia) {
      return "Anda menderita Anemia Hemolitik.";
    } else if (!hasIronDeficiencyAnemia && !hasVitaminDeficiencyAnemia && !hasHemolyticAnemia && hasPerniciousAnemia) {
      return "Anda menderita Anemia Pernisiosa.";
    } else {
      return "Kamu tidak mengalami gejala ANEMIA";
    }
  }
  
  
  
  document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.getElementById("submitBtn");
    const modalElement = document.getElementById("modal");
    const homeBtn = document.getElementById("homeBtn");
  
    submitBtn.addEventListener("click", function () {
      const selectedOptions = [];
      for (let i = 1; i <= 15; i++) {
        const selectElement = document.getElementById("question" + i);
        const selectedValue = selectElement.value;
        if (selectedValue === "iya") {
          selectedOptions.push(i);
        }
      }
      const diagnosis = checkSymptom(selectedOptions);
  
      modalElement.classList.remove("hidden");
  
      modalElement.querySelector("#result").textContent = diagnosis;
    });
  
    modalElement.querySelector(".modal-close").addEventListener("click", function () {
      modalElement.classList.add("hidden");
    });
    homeBtn.addEventListener("click", function () {
      window.location.href = "index1.html";
    });
  });
  