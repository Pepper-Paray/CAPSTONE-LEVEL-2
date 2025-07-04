// Tab switching for login/signup pages (only used in login.html and signup.html)
function switchTab(tab) {
  if(tab === 'login') {
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('signupForm').classList.add('hidden');
    document.getElementById('loginTab').classList.add('active');
    document.getElementById('signupTab').classList.remove('active');
  } else {
    document.getElementById('signupForm').classList.remove('hidden');
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('signupTab').classList.add('active');
    document.getElementById('loginTab').classList.remove('active');
  }
}

// Fake auth for demo
function showMainApp() {
  window.location.href = 'index.html';
}

// MindMate AI (simple demo)
function setupMindMate() {
  const chatLog = document.getElementById('chatLog');
  const chatForm = document.getElementById('chatForm');
  const chatInput = document.getElementById('chatInput');
  if(!chatForm) return;
  function addChatMessage(sender, text) {
    const msg = document.createElement('div');
    msg.innerHTML = `<b>${sender}:</b> ${text}`;
    chatLog.appendChild(msg);
    chatLog.scrollTop = chatLog.scrollHeight;
  }
  chatForm.onsubmit = e => {
    e.preventDefault();
    const userMsg = chatInput.value.trim();
    if (!userMsg) return;
    addChatMessage('You', userMsg);
    chatInput.value = '';
    setTimeout(() => {
      // Simple AI response
      const responses = [
        "I'm here for you. Take a deep breath.",
        "Let's try a calming exercise together.",
        "Remember, it's okay to take breaks.",
        "Would you like to listen to some soothing sounds?",
        "Try focusing on the spinning fidget for a moment."
      ];
      const aiMsg = responses[Math.floor(Math.random() * responses.length)];
      addChatMessage('MindMate', aiMsg);
    }, 800);
  };
}

// Fidget animation (click to change color)
function setupFidget() {
  const fidgetShape = document.getElementById('fidgetShape');
  if(!fidgetShape) return;
  const colors = [
    'linear-gradient(135deg, #5e60ce 60%, #a8edea 100%)',
    'linear-gradient(135deg, #f7971e 60%, #ffd200 100%)',
    'linear-gradient(135deg, #43cea2 60%, #185a9d 100%)',
    'linear-gradient(135deg, #ff6a00 60%, #ee0979 100%)'
  ];
  let colorIdx = 0;
  fidgetShape.onclick = () => {
    colorIdx = (colorIdx + 1) % colors.length;
    fidgetShape.style.background = colors[colorIdx];
  };
}

document.addEventListener('DOMContentLoaded', function() {
  setupMindMate();
  setupFidget();
});
