document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const episode = urlParams.get("ep");
    const videoPlayer = document.getElementById("videoPlayer");

    if (episode) {
        videoPlayer.src = `videos/episode${episode}.mp4`;
    }

    const chatInput = document.getElementById("chatInput");
    const sendBtn = document.getElementById("sendBtn");
    const messages = document.getElementById("messages");

    sendBtn.addEventListener("click", function() {
        if (chatInput.value.trim() !== "") {
            const message = document.createElement("div");
            message.classList.add("chat-message");
            message.innerText = chatInput.value;
            messages.appendChild(message);
            chatInput.value = "";
            messages.scrollTop = messages.scrollHeight;
        }
    });
});