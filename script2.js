// Elements
const chatWindow = document.getElementById("chat-window");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-btn");

// Mock AI Responses
const responses = {
  hello: "Hello! How can I assist you today?",
  "how are you": "I'm just a bot, but I'm doing great. Thanks for asking!",
  "what is ai": "AI stands for Artificial Intelligence, where machines mimic human intelligence.",
  bye: "Goodbye! Have a great day!",
};

// Add message to chat
function addMessage(message, sender) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("chat-message", sender);
  messageDiv.innerHTML = `<div class="bubble">${message}</div>`;
  chatWindow.appendChild(messageDiv);
  chatWindow.scrollTop = chatWindow.scrollHeight; // Auto-scroll to the latest message
}

// Simulate bot typing
function simulateBotResponse(userMessage) {
  setTimeout(() => {
    const botMessage = responses[userMessage.toLowerCase()] || "I'm sorry, I don't understand that.";
    addMessage(botMessage, "bot");
  }, 1000);
}

// Handle sending messages
sendButton.addEventListener("click", () => {
  const userMessage = userInput.value.trim();
  if (userMessage) {
    addMessage(userMessage, "user");
    userInput.value = ""; // Clear the input field
    simulateBotResponse(userMessage);
  }
});

// Allow "Enter" key to send message
userInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    sendButton.click();
  }
});
