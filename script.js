const button = document.getElementById("actionBtn");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  message.textContent = "🔥 You just triggered a glass UI action!";
  message.style.opacity = "1";

  button.textContent = "✔ Done";
  button.disabled = true;

  setTimeout(() => {
    button.textContent = "✨ Click Me";
    button.disabled = false;
    message.textContent = "";
  }, 3000);
});

