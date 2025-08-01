function toggleSection(header) {
    const content = header.nextElementSibling;
    content.style.display = content.style.display === "none" ? "block" : "none";
}

// 初期化：すべて折りたたみ状態にする
window.onload = () => {
    const sections = document.querySelectorAll('.section-content');
    sections.forEach(sec => sec.style.display = 'none');
};

function updateOriginalImage() {
  const selected = document.getElementById("sample-select").value;
  const demoImage = document.getElementById("demo-image");
  demoImage.src = `images/${selected}_original.png`;

  const corrected = document.getElementById("corrected-image");
  corrected.src = ""; // 補正後はリセット
}

function updateOriginalImage() {
  const selected = document.getElementById("sample-select").value;
  const demoImage = document.getElementById("demo-image");
  demoImage.src = `images/${selected}_original.png`;
}

function startCorrection() {
  const selected = document.getElementById("sample-select").value;
  const corrected = document.getElementById("corrected-image");
  const arrowFill = document.getElementById("arrow-fill");
  const progressText = document.getElementById("progress-text");
  
  arrowFill.style.width = "0%";
  progressText.textContent = "0%";

  let progress = 0;
  const interval = setInterval(() => {
    progress += 5 + Math.random() * 5;
    const clamped = Math.min(progress, 100);

    arrowFill.style.width = clamped + "%";
    progressText.textContent = `${Math.floor(clamped)}%`;

    if (clamped >= 100) {
      clearInterval(interval);
      corrected.src = `images/${selected}_corrected.png`;
    }
  }, 100);
}


