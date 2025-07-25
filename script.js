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
  const img = document.getElementById("demo-image");
  const caption = document.getElementById("image-caption");
  const extra = document.getElementById("extra-images");
  const progressContainer = document.getElementById("progress-container");

  img.src = `images/${selected}_original.jpg`;
  caption.textContent = "補正前の画像";

  // 補正結果は非表示に戻す
  extra.style.display = "none";
  progressContainer.style.display = "none";
}


function startCorrection() {
  const selected = document.getElementById("sample-select").value;

  const img = document.getElementById("demo-image");
  const caption = document.getElementById("image-caption");
  const extra = document.getElementById("extra-images");
  const corrected = document.getElementById("corrected-image");
  const visualization = document.getElementById("visualization-image");

  const progressContainer = document.getElementById("progress-container");
  const progressBar = document.getElementById("progress-bar");

  // 初期化
  img.src = "images/loading.gif";
  caption.textContent = "AIが補正中...";
  extra.style.display = "none";
  progressContainer.style.display = "block";
  progressBar.style.width = "0%";

  // 可視化画像（処理中に表示）
  visualization.src = `images/${selected}_original.jpg`;
  visualization.style.display = "block";

  let progress = 0;
  const interval = setInterval(() => {
    progress += 3 + Math.random() * 5;
    progressBar.style.width = Math.min(progress, 100) + "%";

    if (progress >= 100) {
      clearInterval(interval);

      // 補正後の画像表示
      img.src = `images/${selected}_original.jpg`;
      caption.textContent = "補正された画像";

      corrected.src = `images/${selected}_original.jpg`;
      visualization.style.display = "none"; // ローディング中の可視化は終了
      extra.style.display = "block";
      progressContainer.style.display = "none";
    }
  }, 100);
}


