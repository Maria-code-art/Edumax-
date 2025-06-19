function toggleAccessibility() {
  document.body.classList.toggle('high-contrast');
}

// Счётчик посещений
let count = localStorage.getItem("visitCount") || 0;
count++;
localStorage.setItem("visitCount", count);
document.getElementById("visit-count").textContent = "Количество посещений: " + count;

// Текущее время
function updateTime() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString();
  document.getElementById("current-time").textContent = "Текущее время: " + timeStr;
}
setInterval(updateTime, 1000);
updateTime();

// Отправка формы
function submitContactForm() {
  document.getElementById("successModal").style.display = "flex";
  return false;
}

function closeModal() {
  document.getElementById("successModal").style.display = "none";
}