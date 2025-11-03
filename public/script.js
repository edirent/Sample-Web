document.addEventListener("DOMContentLoaded", () => {
  const floatingChat = document.querySelector(".floating-chat");
  const chatToggle = document.getElementById("chatToggle");
  const chatLauncher = document.getElementById("chatLauncher");
  const yearSpan = document.getElementById("year");

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  if (!floatingChat || !chatToggle || !chatLauncher) {
    return;
  }

  const setChatState = (state) => {
    floatingChat.dataset.state = state;
    const isClosed = state === "closed";
    chatLauncher.dataset.visible = isClosed ? "true" : "false";
    chatToggle.setAttribute("aria-label", isClosed ? "Open chat" : "Minimize chat");
    chatToggle.setAttribute("title", isClosed ? "Open chat" : "Minimize chat");
    chatToggle.textContent = isClosed ? "+" : "-";
  };

  setChatState(floatingChat.dataset.state || "open");

  if (chatToggle) {
    chatToggle.addEventListener("click", () => {
      const currentState = floatingChat.dataset.state;
      setChatState(currentState === "open" ? "closed" : "open");
    });
  }

  if (chatLauncher) {
    chatLauncher.addEventListener("click", () => setChatState("open"));
  }
});
