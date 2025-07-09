
async function fetchBackgroundImage(query = "calm") {
    const response = await fetch(`https://picsum.photos/seed/${query}/1200/800`);
    document.body.style.backgroundImage = `url('${response.url}')`;
}

function handleUserInput() {
    const inputField = document.getElementById("user-input");
    const userText = inputField.value.trim();

    if (!userText) return;

    createChatBubble(userText, "user");

    const botReply = getMindMateResponse(userText);
    setTimeout(() => {
        createChatBubble(botReply, "ai");
    }, 600);

    inputField.value = "";
}

function createChatBubble(text, sender) {
    const bubble = document.createElement("div");
    bubble.className = `bubble ${sender}`;
    bubble.textContent = text;

    const chatWindow = document.getElementById("chat-window");
    chatWindow.appendChild(bubble);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function getMindMateResponse(userInput) {
    const input = userInput.toLowerCase();

    if (input.includes("anxious") || input.includes("overwhelmed")) {
        fetchBackgroundImage("forest");
        return "That sounds intense—want to take a deep breath together?";

    } else if (input.includes("happy") || input.includes("excited")) {
        fetchBackgroundImage("sunrise");
        return "That joy is radiant! Want to share what's lighting you up?";

    } else if (input.includes("sad") || input.includes("lonely") || input.includes("depressed")) {
        fetchBackgroundImage("mist");
        return "I’m here with you in this moment. What would feel comforting right now?";

    } else if (input.includes("angry") || input.includes("frustrated")) {
        fetchBackgroundImage("storm");
        return "That frustration is real. Want to unpack it or sit quietly with it?";

    } else if (input.includes("give up") || input.includes("can’t do this") || input.includes("lost")) {
        fetchBackgroundImage("canyon");
        return "You’ve overcome before. Let’s break it into steps together. You’re not alone.";

    } else {
        fetchBackgroundImage("calm");
        return "I'm listening. What’s alive in you right now?";
    }
}
async function fetchZenQuote() {
    const response = await fetch("https://zenquotes.io/api/random");
    const data = await response.json();
    const quote = data[0].q;
    const author = data[0].a;

    console.log(`"${quote}" — ${author}`);
}
fetchZenQuote();


