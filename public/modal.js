// public/modal.js
function openModal() {
  const modal = document.getElementById("photoModal");
  const img = document.getElementById("weddingImg");
  img.src = "https://raw.githubusercontent.com/bosuntsao/my-wedding-images/main/DSC07655.webp";
  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("photoModal").style.display = "none";
}

// 將函數掛在 window 上，讓 HTML 的 onclick 可以找到它
window.openModal = openModal;
window.closeModal = closeModal;
