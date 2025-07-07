// --- Animated background particles ---
function setupParticles() {
  const canvas = document.getElementById('particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w = window.innerWidth, h = window.innerHeight;
  canvas.width = w; canvas.height = h;
  let particles = Array.from({length: 32}, () => ({
    x: Math.random()*w, y: Math.random()*h, r: Math.random()*2+1, dx: (Math.random()-0.5)*0.3, dy: (Math.random()-0.5)*0.3
  }));
  function drawParticles() {
    ctx.clearRect(0,0,w,h);
    ctx.globalAlpha = 0.5;
    for(const p of particles) {
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,2*Math.PI);
      ctx.fillStyle = '#a8edea';
      ctx.fill();
      p.x += p.dx; p.y += p.dy;
      if(p.x<0||p.x>w) p.dx*=-1;
      if(p.y<0||p.y>h) p.dy*=-1;
    }
    requestAnimationFrame(drawParticles);
  }
  drawParticles();
  window.onresize = ()=>{w=window.innerWidth;h=window.innerHeight;canvas.width=w;canvas.height=h;};
}

// --- Affirmations & Motivation ---
const affirmations = [
  "You are enough, just as you are.",
  "You are worthy of love and care.",
  "Your feelings matter.",
  "You are not a burden.",
  "You are allowed to take up space.",
  "You are resilient, even on hard days.",
  "You are not alone in this.",
  "You are doing your best, and that's enough.",
  "You are allowed to rest.",
  "You are brave for facing today.",
  "You are loved, even when you can't feel it.",
  "You are important and your story matters.",
  "You are allowed to feel joy and peace.",
  "You are strong, even when you feel weak.",
  "You are healing, one step at a time.",
  "You are safe in this moment.",
  "You are valued for who you are."
];
function setupAffirmations() {
  const affirmationText = document.getElementById('affirmationText');
  const newAffirmationBtn = document.getElementById('newAffirmationBtn');
  if (!affirmationText || !newAffirmationBtn) return;
  function showAffirmation() {
    const idx = Math.floor(Math.random() * affirmations.length);
    affirmationText.innerText = affirmations[idx];
    affirmationText.classList.add('affirmation-active');
    setTimeout(()=>affirmationText.classList.remove('affirmation-active'), 1800);
  }
  newAffirmationBtn.onclick = showAffirmation;
  showAffirmation();
}

// --- Daily Motivation ---
const motivations = [
  "You are stronger than you think. Keep going!",
  "Every step forward, no matter how small, is progress.",
  "You deserve kindness, especially from yourself.",
  "It's okay to rest. Healing is not a race.",
  "You are not alone. You matter.",
  "Your feelings are valid. Take it one moment at a time.",
  "You are doing your best, and that's enough.",
  "Small victories are still victories. Celebrate them!",
  "You have overcome so much already. Be proud of yourself.",
  "Today is a new day. You can start fresh.",
  "You are worthy of love and care, exactly as you are.",
  "It's okay to ask for help. You are not a burden.",
  "You are resilient, even when it feels hard.",
  "You are allowed to feel and express your emotions."
];
function setupMotivation() {
  const mot = document.getElementById('motivation');
  if (!mot) return;
  const today = new Date();
  const idx = today.getDate() % motivations.length;
  const dateStr = today.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
  mot.innerHTML = `<b>${dateStr}</b><br>${motivations[idx]}`;
}

// --- Breathing Exercise ---
function setupBreathing() {
  const breathBtn = document.getElementById('breathBtn');
  const breathModal = document.getElementById('breathModal');
  const breathGuide = document.getElementById('breathGuide');
  if (!breathBtn || !breathModal || !breathGuide) return;
  let breathInterval = null;
  breathBtn.onclick = function() {
    breathModal.style.display = 'flex';
    let steps = ["Breathe in...", "Hold...", "Breathe out...", "Hold..."];
    let idx = 0;
    breathGuide.innerText = steps[idx];
    breathInterval = setInterval(() => {
      idx = (idx + 1) % steps.length;
      breathGuide.innerText = steps[idx];
    }, 3500);
  };
  window.closeBreathModal = function() {
    breathModal.style.display = 'none';
    clearInterval(breathInterval);
  };
}

// --- Mood Check-In (Soothing) & Mood Reflection (Index) ---
function setupMood() {
  const moodBtn = document.getElementById('moodBtn');
  const moodText = document.getElementById('moodText');
  if (moodBtn && moodText) {
    const moodPrompts = [
      "How are you feeling right now? (e.g., calm, anxious, hopeful, tired)",
      "What's one word to describe your mood?",
      "Is there something on your mind you'd like to share?"
    ];
    let moodStep = 0;
    moodBtn.onclick = async function() {
      if(moodStep === 0) {
        moodText.innerText = moodPrompts[0];
        moodBtn.innerText = "Next";
        moodStep = 1;
      } else if(moodStep === 1) {
        const userMood = prompt("How are you feeling?");
        if(userMood) {
          setTimeout(()=>{
            moodText.innerText = `Thank you for sharing. It's okay to feel '${userMood}'. Remember, your feelings are valid and you are not alone.`;
            moodBtn.innerText = "Check In Again";
            moodStep = 0;
          }, 800);
        } else {
          moodText.innerText = "It's okay if you don't want to share right now.";
          moodBtn.innerText = "Check In Again";
          moodStep = 0;
        }
      }
    };
  }
  // Mood Reflection (index)
  const moodSaveBtn = document.getElementById('moodSaveBtn');
  if (moodSaveBtn) {
    moodSaveBtn.onclick = function() {
      const mood = document.getElementById('moodInput').value.trim();
      if(mood) {
        localStorage.setItem('mindcareMood', mood);
        document.getElementById('moodSavedMsg').innerText = 'Saved!';
      } else {
        document.getElementById('moodSavedMsg').innerText = '';
      }
    };
  }
}

// --- Guided Visualization ---
function setupVisualization() {
  const visualizeBtn = document.getElementById('visualizeBtn');
  const visualizeModal = document.getElementById('visualizeModal');
  const visualizeGuide = document.getElementById('visualizeGuide');
  if (!visualizeBtn || !visualizeModal || !visualizeGuide) return;
  let vizSteps = [
    "Close your eyes and imagine a gentle stream flowing nearby.",
    "Feel the cool air and hear the soft sounds of water.",
    "Notice the sunlight filtering through the trees.",
    "With each breath, let your worries drift away with the water.",
    "When you're ready, gently open your eyes and return to the present."
  ];
  let vizIdx = 0, vizInterval = null;
  visualizeBtn.onclick = function() {
    visualizeModal.style.display = 'flex';
    vizIdx = 0;
    visualizeGuide.innerText = vizSteps[vizIdx];
    vizInterval = setInterval(()=>{
      vizIdx++;
      if(vizIdx < vizSteps.length) {
        visualizeGuide.innerText = vizSteps[vizIdx];
      } else {
        clearInterval(vizInterval);
      }
    }, 4000);
  };
  window.closeVisualizeModal = function() {
    visualizeModal.style.display = 'none';
    clearInterval(vizInterval);
  };
}

// --- Gratitude Journal ---
function setupGratitude() {
  const gratitudeBtn = document.getElementById('gratitudeBtn');
  const gratitudeModal = document.getElementById('gratitudeModal');
  const gratitudeText = document.getElementById('gratitudeText');
  const gratitudeMsg = document.getElementById('gratitudeMsg');
  if (!gratitudeBtn || !gratitudeModal || !gratitudeText || !gratitudeMsg) return;
  gratitudeBtn.onclick = function() {
    gratitudeModal.style.display = 'flex';
    gratitudeMsg.innerText = '';
    gratitudeText.value = '';
  };
  window.closeGratitudeModal = function() {
    gratitudeModal.style.display = 'none';
  };
  window.saveGratitude = function() {
    const val = gratitudeText.value.trim();
    if(val.length>0) {
      gratitudeMsg.innerText = 'Saved! Thank you for sharing.';
    } else {
      gratitudeMsg.innerText = 'Please write something you are grateful for.';
    }
  };
}

// --- Soothing Sounds ---
function setupSoothingSounds() {
  const soundSelect = document.getElementById('soundSelect');
  const audioSource = document.getElementById('audioSource');
  const audioPlayer = document.getElementById('audioPlayer');
  const soundLabel = document.getElementById('soundLabel');
  if (!soundSelect || !audioSource || !audioPlayer || !soundLabel) return;
  const soundMap = {
    stream: {src: 'https://cdn.pixabay.com/audio/2022/10/16/audio_12b6b1b6b7.mp3', label: 'Gentle Stream'},
    rain: {src: 'https://cdn.pixabay.com/audio/2022/03/15/audio_115b9b7b7b.mp3', label: 'Rain'},
    forest: {src: 'https://cdn.pixabay.com/audio/2022/10/16/audio_12b6b1b6b8.mp3', label: 'Forest Birds'},
    ocean: {src: 'https://cdn.pixabay.com/audio/2022/03/15/audio_115b9b7b7b.mp3', label: 'Ocean Waves'},
    night: {src: 'https://cdn.pixabay.com/audio/2022/10/16/audio_12b6b1b6b9.mp3', label: 'Night Crickets'},
    white: {src: 'https://cdn.pixabay.com/audio/2022/03/15/audio_115b9b7b7b.mp3', label: 'White Noise'},
    music: {src: 'https://cdn.pixabay.com/audio/2022/10/16/audio_12b6b1b6b6.mp3', label: 'Gentle Piano'}
  };
  soundSelect.onchange = function() {
    const val = this.value;
    audioSource.src = soundMap[val].src;
    audioPlayer.load();
    soundLabel.innerText = '(Sample: ' + soundMap[val].label + ')';
  };
}

// --- Sound Visualizer ---
function setupVisualizer() {
  const audio = document.getElementById('audioPlayer');
  const visualizer = document.getElementById('visualizer');
  if (!audio || !visualizer) return;
  for(let i=0;i<32;i++){
    const bar = document.createElement('div');
    bar.className = 'bar';
    bar.style.height = (Math.random()*24+8)+'px';
    visualizer.appendChild(bar);
  }
  let bars = visualizer.querySelectorAll('.bar');
  setInterval(()=>{
    bars.forEach(bar=>{
      bar.style.height = (Math.random()*24+8)+'px';
    });
  }, 300);
}

// --- Therapist Collaboration: Export Session Notes ---
function setupExportSession() {
  const exportSessionBtn = document.getElementById('exportSessionBtn');
  const gratitudeText = document.getElementById('gratitudeText');
  const affirmationText = document.getElementById('affirmationText');
  const exportMsg = document.getElementById('exportMsg');
  if (!exportSessionBtn || !gratitudeText || !affirmationText || !exportMsg) return;
  exportSessionBtn.onclick = function() {
    const favSound = localStorage.getItem('mindcareFavSound') || '';
    const gratitude = gratitudeText.value || '';
    const affirmation = affirmationText.innerText;
    const sessionNotes = `Session Notes:\nFavorite Sound: ${favSound}\nAffirmation: ${affirmation}\nGratitude: ${gratitude}`;
    const blob = new Blob([sessionNotes], {type: 'text/plain'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'mindcare-session-notes.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    exportMsg.innerText = 'Session notes exported!';
    setTimeout(()=>{exportMsg.innerText='';}, 3000);
  };
}

// --- Interactive: Favorite Sound ---
function setupFavoriteSound() {
  const favSoundSaveBtn = document.getElementById('favSoundSaveBtn');
  const favSoundInput = document.getElementById('favSoundInput');
  const favSoundSavedMsg = document.getElementById('favSoundSavedMsg');
  if (!favSoundSaveBtn || !favSoundInput || !favSoundSavedMsg) return;
  favSoundSaveBtn.onclick = function() {
    const sound = favSoundInput.value.trim();
    if(sound) {
      localStorage.setItem('mindcareFavSound', sound);
      favSoundSavedMsg.innerText = 'Saved!';
    } else {
      favSoundSavedMsg.innerText = '';
    }
  };
}

// --- MindMate AI Chat: Supportive Canned Responses Only ---
function setupMindMateChat() {
  const chatWindow = document.getElementById('chatWindow');
  const chatForm = document.getElementById('chatForm');
  const chatInput = document.getElementById('chatInput');
  const typingIndicator = document.getElementById('typingIndicator');
  if (!chatWindow || !chatForm || !chatInput || !typingIndicator) return;
  // --- Gemini API UI ---
  let geminiEnabled = false;
  let geminiKey = localStorage.getItem('mindcareGeminiKey') || '';
  // Add Gemini toggle and key input UI
  const geminiSection = document.createElement('div');
  geminiSection.style.margin = '12px 0 0 0';
  geminiSection.innerHTML = `
    <label style="font-size:0.98em;color:#43cea2;">
      <input type="checkbox" id="geminiToggle" ${geminiKey ? 'checked' : ''} style="margin-right:6px;"> Use Gemini AI (optional)
    </label>
    <input type="password" id="geminiKeyInput" placeholder="Gemini API Key" value="${geminiKey}" style="margin-left:8px;width:180px;border-radius:6px;padding:4px 8px;font-size:0.98em;">
    <span id="geminiStatus" style="margin-left:8px;font-size:0.95em;color:#5e60ce;"></span>
  `;
  chatForm.parentNode.insertBefore(geminiSection, chatForm.nextSibling);
  const geminiToggle = document.getElementById('geminiToggle');
  const geminiKeyInput = document.getElementById('geminiKeyInput');
  const geminiStatus = document.getElementById('geminiStatus');
  geminiEnabled = geminiToggle.checked;
  geminiToggle.onchange = function() {
    geminiEnabled = this.checked;
    if (!geminiEnabled) geminiStatus.innerText = '';
  };
  geminiKeyInput.onchange = function() {
    geminiKey = this.value.trim();
    if (geminiKey) {
      localStorage.setItem('mindcareGeminiKey', geminiKey);
      geminiStatus.innerText = 'Key saved!';
    } else {
      localStorage.removeItem('mindcareGeminiKey');
      geminiStatus.innerText = '';
    }
  };
  // Supportive responses
  const supportiveResponses = [
    "Hello, I'm here for you.",
    "I hear you. Your feelings are valid.",
    "You don't have to do this alone.",
    "It's okay to feel what you're feeling.",
    "You are stronger than you think.",
    "Take a deep breath. You're safe here.",
    "You matter, and your story matters.",
    "I'm proud of you for reaching out.",
    "It's okay to rest. Healing takes time.",
    "You are not a burden.",
    "You are enough, just as you are.",
    "You are worthy of love and care.",
    "You are resilient, even on hard days.",
    "You are not alone in this.",
    "You are allowed to take up space.",
    "You are allowed to rest.",
    "You are brave for facing today.",
    "You are loved, even when you can't feel it.",
    "You are important and your story matters.",
    "You are allowed to feel joy and peace.",
    "You are strong, even when you feel weak.",
    "You are healing, one step at a time.",
    "You are safe in this moment.",
    "You are valued for who you are.",
    "It's okay to ask for help.",
    "You are doing your best, and that's enough.",
    "Small victories are still victories. Celebrate them!",
    "You have overcome so much already. Be proud of yourself.",
    "Today is a new day. You can start fresh.",
    "Remember to be gentle with yourself today.",
    "If things feel overwhelming, it's okay to pause and breathe.",
    "If you need more support, consider reaching out to a trusted person or therapist.",
    "You are not your diagnosis. You are so much more.",
    "It's okay to take things one step at a time.",
    "You are allowed to set boundaries.",
    "You are not defined by your struggles.",
    "You are worthy of kindness, especially from yourself.",
    "You are allowed to say no.",
    "You are allowed to celebrate your progress.",
    "You are allowed to feel proud of yourself.",
    "You are allowed to feel sad sometimes.",
    "You are allowed to feel anxious sometimes.",
    "You are allowed to feel angry sometimes.",
    "You are allowed to feel happy sometimes.",
    "You are allowed to feel confused sometimes.",
    "You are allowed to feel lost sometimes.",
    "You are allowed to feel hopeful sometimes.",
    "You are allowed to feel grateful sometimes.",
    "You are allowed to feel loved sometimes.",
    "You are allowed to feel safe sometimes."
  ];
  // Problem-solving suggestions
  const solutions = [
    { keywords: ["anxious", "anxiety", "panic"], response: "Try a grounding exercise: look around and name 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, and 1 you can taste." },
    { keywords: ["can't sleep", "insomnia", "sleep"], response: "Try a gentle breathing exercise or listen to soothing sounds. Avoid screens for 30 minutes before bed." },
    { keywords: ["overwhelmed", "too much", "stressed"], response: "Break tasks into small steps and take one thing at a time. It's okay to pause and rest." },
    { keywords: ["sad", "depressed", "down"], response: "Reach out to someone you trust, or write in your gratitude journal. Remember, feelings pass." },
    { keywords: ["angry", "frustrated"], response: "Try a physical activity, like squeezing a pillow or going for a walk. Expressing feelings safely is healthy." },
    { keywords: ["dissociate", "numb", "not real"], response: "Splash cold water on your face or hold an ice cube. Focus on your breath and your body in the present moment." },
    { keywords: ["focus", "adhd", "concentrate"], response: "Try the Pomodoro technique: work for 25 minutes, then take a 5-minute break. Remove distractions if possible." },
    { keywords: ["dyslexia", "reading", "words"], response: "Try using a dyslexia-friendly font (toggle at bottom left) and read in short bursts. Use a ruler or finger to guide your eyes." },
    { keywords: ["ptsd", "cptsd", "triggered"], response: "Pause and ground yourself. Remind yourself you are safe now. Use the breathing exercise or listen to calming sounds." },
    { keywords: ["alone", "lonely", "isolated"], response: "Reach out to a support group or a trusted friend. You are not alone, and connection is healing." }
  ];
  function addChatBubble(text, sender) {
    const bubble = document.createElement('div');
    bubble.className = sender === 'user' ? 'chat-bubble user' : 'chat-bubble ai';
    bubble.setAttribute('role', 'region');
    bubble.setAttribute('aria-live', 'polite');
    bubble.style.margin = '8px 0';
    bubble.style.maxWidth = '80%';
    bubble.style.padding = '12px 16px';
    bubble.style.borderRadius = sender === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px';
    bubble.style.background = sender === 'user' ? '#e0f7fa' : '#5e60ce';
    bubble.style.color = sender === 'user' ? '#4a4a4a' : '#fff';
    bubble.style.alignSelf = sender === 'user' ? 'flex-end' : 'flex-start';
    bubble.style.boxShadow = '0 2px 8px #a8edea22';
    bubble.innerText = text;
    chatWindow.appendChild(bubble);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }
  // Initial greeting
  if(chatWindow.childElementCount === 0) {
    addChatBubble("Hi, I'm MindMate. How are you feeling today?", 'ai');
  }
  chatForm.onsubmit = async function(e) {
    e.preventDefault();
    const userMsg = chatInput.value.trim();
    if(!userMsg) return;
    addChatBubble(userMsg, 'user');
    chatInput.value = '';
    typingIndicator.style.display = 'block';
    chatWindow.scrollTop = chatWindow.scrollHeight;
    // --- Gemini API logic ---
    if (geminiEnabled && geminiKey) {
      const prompt = userMsg;
      const reply = await callGeminiAPI(prompt, geminiKey);
      typingIndicator.style.display = 'none';
      addChatBubble(reply, 'ai');
      return;
    }
    setTimeout(()=>{
      typingIndicator.style.display = 'none';
      // Check for keywords for solutions
      const lower = userMsg.toLowerCase();
      for (const sol of solutions) {
        if (sol.keywords.some(k => lower.includes(k))) {
          addChatBubble(sol.response, 'ai');
          return;
        }
      }
      // Otherwise, random supportive response
      const idx = Math.floor(Math.random() * supportiveResponses.length);
      addChatBubble(supportiveResponses[idx], 'ai');
    }, 700 + Math.random()*600);
  };
}

// --- Login/Signup Form Logic ---
function setupLoginSignupForms() {
  // Login page logic
  const loginForm = document.getElementById('loginForm');
  const loginGoalSaveBtn = document.getElementById('loginGoalSaveBtn');
  if (loginForm) {
    loginForm.onsubmit = function(e) {
      e.preventDefault();
      // For demo: just show a message or redirect
      alert('Login successful! (Demo only)');
    };
  }
  if (loginGoalSaveBtn) {
    loginGoalSaveBtn.onclick = function() {
      const goal = document.getElementById('loginGoalInput').value.trim();
      if(goal) {
        localStorage.setItem('mindcareLoginGoal', goal);
        document.getElementById('loginGoalSavedMsg').innerText = 'Saved!';
      } else {
        document.getElementById('loginGoalSavedMsg').innerText = '';
      }
    };
  }
  // Signup page logic
  const signupForm = document.getElementById('signupForm');
  const signupReasonSaveBtn = document.getElementById('signupReasonSaveBtn');
  if (signupForm) {
    signupForm.onsubmit = function(e) {
      e.preventDefault();
      alert('Signup successful! (Demo only)');
    };
  }
  if (signupReasonSaveBtn) {
    signupReasonSaveBtn.onclick = function() {
      const reason = document.getElementById('signupReasonInput').value.trim();
      if(reason) {
        localStorage.setItem('mindcareSignupReason', reason);
        document.getElementById('signupReasonSavedMsg').innerText = 'Saved!';
      } else {
        document.getElementById('signupReasonSavedMsg').innerText = '';
      }
    };
  }
}

// --- Free API-powered UI Effect: Inspirational Quote ---
function setupFreeQuote() {
  const quoteEls = [
    document.getElementById('freeQuote')
  ];
  // Also try to find on all pages
  document.querySelectorAll('#freeQuote').forEach(el => {
    if (!quoteEls.includes(el)) quoteEls.push(el);
  });
  if (!quoteEls.length) return;
  fetch('https://zenquotes.io/api/random')
    .then(r => r.json())
    .then(data => {
      if (data && data[0] && data[0].q && data[0].a) {
        const quote = `“${data[0].q}”<br><span style='font-size:0.98em;color:#43cea2;'>– ${data[0].a}</span>`;
        quoteEls.forEach(el => { if (el) el.innerHTML = quote; });
      }
    })
    .catch(() => {
      quoteEls.forEach(el => { if (el) el.innerText = '“Breathe. You are enough.”'; });
    });
}

// --- Accessibility & Neurodiversity UI Enhancements ---
function setupAccessibilityToggles() {
  // Dyslexia font toggle
  const dysBtn = document.createElement('button');
  dysBtn.innerText = 'Dyslexia Font';
  dysBtn.className = 'dark';
  dysBtn.style.position = 'fixed';
  dysBtn.style.bottom = '18px';
  dysBtn.style.left = '18px';
  dysBtn.style.zIndex = 9999;
  dysBtn.setAttribute('aria-label', 'Toggle dyslexia-friendly font');
  dysBtn.onclick = function() {
    document.body.classList.toggle('dyslexia');
    if(document.body.classList.contains('dyslexia')) {
      localStorage.setItem('mindcareFont', 'dyslexia');
    } else {
      localStorage.removeItem('mindcareFont');
    }
  };
  document.body.appendChild(dysBtn);

  // High-contrast toggle
  const contrastBtn = document.createElement('button');
  contrastBtn.innerText = 'High Contrast';
  contrastBtn.className = 'dark';
  contrastBtn.style.position = 'fixed';
  contrastBtn.style.bottom = '18px';
  contrastBtn.style.left = '150px';
  contrastBtn.style.zIndex = 9999;
  contrastBtn.setAttribute('aria-label', 'Toggle high-contrast mode');
  contrastBtn.onclick = function() {
    document.body.classList.toggle('high-contrast');
    if(document.body.classList.contains('high-contrast')) {
      localStorage.setItem('mindcareContrast', 'high');
    } else {
      localStorage.removeItem('mindcareContrast');
    }
  };
  document.body.appendChild(contrastBtn);

  // Restore settings
  if(localStorage.getItem('mindcareFont') === 'dyslexia') {
    document.body.classList.add('dyslexia');
  }
  if(localStorage.getItem('mindcareContrast') === 'high') {
    document.body.classList.add('high-contrast');
  }
}

// --- Animated Breathing Circle for Grounding ---
function setupBreathingCircle() {
  const breathModal = document.getElementById('breathModal');
  if (!breathModal) return;
  let circle = document.createElement('div');
  circle.className = 'breathing-circle';
  breathModal.querySelector('div')?.prepend(circle);
}

// --- UI Variety: Randomize Floating Shape Colors ---
function randomizeFloatingShapes() {
  const colors = [
    'radial-gradient(circle,#fed6e3 60%,#fff0 100%)',
    'radial-gradient(circle,#a8edea 60%,#fff0 100%)',
    'radial-gradient(circle,#b8c0ff 60%,#fff0 100%)',
    'radial-gradient(circle,#43cea2 60%,#fff0 100%)',
    'radial-gradient(circle,#e0c3fc 60%,#fff0 100%)'
  ];
  document.querySelectorAll('.floating-shape').forEach(shape => {
    shape.style.background = colors[Math.floor(Math.random()*colors.length)];
    shape.style.width = (36 + Math.random()*40) + 'px';
    shape.style.height = (36 + Math.random()*40) + 'px';
    shape.style.top = (5 + Math.random()*80) + '%';
    shape.style.left = (5 + Math.random()*80) + '%';
  });
}

// --- UI Variety: Gentle Confetti on Affirmation ---
function gentleConfetti() {
  const container = document.body;
  for(let i=0;i<18;i++) {
    const conf = document.createElement('div');
    conf.style.position = 'fixed';
    conf.style.left = (Math.random()*100)+'vw';
    conf.style.top = (Math.random()*60)+'vh';
    conf.style.width = '8px';
    conf.style.height = '8px';
    conf.style.borderRadius = '50%';
    conf.style.background = ['#43cea2','#a8edea','#fed6e3','#b8c0ff','#e0c3fc'][Math.floor(Math.random()*5)];
    conf.style.opacity = '0.7';
    conf.style.zIndex = 9999;
    conf.style.pointerEvents = 'none';
    conf.style.transition = 'all 1.2s ease';
    container.appendChild(conf);
    setTimeout(()=>{
      conf.style.top = (80+Math.random()*10)+'vh';
      conf.style.opacity = '0';
    }, 50);
    setTimeout(()=>container.removeChild(conf), 1400);
  }
}
// Patch affirmation button to trigger confetti
function patchAffirmationConfetti() {
  const btn = document.getElementById('newAffirmationBtn');
  if (btn) {
    btn.addEventListener('click', gentleConfetti);
  }
}

// --- UI Variety: Animated Tab Underline ---
function animateTabUnderline() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('mouseenter', function() {
      this.style.boxShadow = '0 4px 0 0 #43cea2';
    });
    tab.addEventListener('mouseleave', function() {
      this.style.boxShadow = '';
    });
  });
}

// --- Lava Lamp Bubble Background (from fidget.html) ---
function setupLavaLamp() {
  const canvas = document.getElementById('lavaLamp');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W = window.innerWidth, H = window.innerHeight;
  canvas.width = W; canvas.height = H;
  let bubbles = Array.from({length: 18}, () => ({
    x: Math.random()*W, y: H+Math.random()*H/2, r: 32+Math.random()*48, dx: (Math.random()-0.5)*0.3, dy: -0.3-Math.random()*0.4, c: `rgba(${120+Math.random()*100},${180+Math.random()*60},${200+Math.random()*55},0.22)`
  }));
  function drawBubbles() {
    ctx.clearRect(0,0,W,H);
    for(const b of bubbles) {
      ctx.beginPath();
      ctx.arc(b.x,b.y,b.r,0,2*Math.PI);
      ctx.fillStyle = b.c;
      ctx.shadowColor = b.c;
      ctx.shadowBlur = 24;
      ctx.fill();
      b.x += b.dx; b.y += b.dy;
      if(b.y+b.r<0) { b.y = H+b.r; b.x = Math.random()*W; }
      if(b.x<0||b.x>W) b.dx*=-1;
    }
    requestAnimationFrame(drawBubbles);
  }
  drawBubbles();
  window.addEventListener('resize', ()=>{W=window.innerWidth;H=window.innerHeight;canvas.width=W;canvas.height=H;});
}

// --- Gemini API Integration ---
async function callGeminiAPI(prompt, apiKey) {
  // Gemini Pro endpoint (text-only)
  const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + encodeURIComponent(apiKey);
  const body = {
    contents: [{ parts: [{ text: prompt }] }]
  };
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    const data = await response.json();
    if (data && data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts) {
      return data.candidates[0].content.parts.map(p => p.text).join(' ');
    } else if (data && data.error) {
      return 'Gemini API error: ' + data.error.message;
    } else {
      return 'No response from Gemini API.';
    }
  } catch (e) {
    return 'Gemini API call failed: ' + e.message;
  }
}
// Example usage:
// const geminiReply = await callGeminiAPI('Say hello!', 'YOUR_GEMINI_API_KEY');

// --- DOMContentLoaded: Setup all features ---
document.addEventListener('DOMContentLoaded', function() {
  setupParticles();
  setupAffirmations();
  setupMotivation();
  setupBreathing();
  setupMood();
  setupVisualization();
  setupGratitude();
  setupSoothingSounds();
  setupVisualizer();
  setupExportSession();
  setupFavoriteSound();
  setupMindMateChat();
  setupLoginSignupForms();
  setupFreeQuote();
  setupAccessibilityToggles();
  setupBreathingCircle();
  randomizeFloatingShapes();
  patchAffirmationConfetti();
  animateTabUnderline();
  setupLavaLamp();
});
