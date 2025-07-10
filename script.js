
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
async function fetchQuote() {
    try {
        const response = await fetch("https://zenquotes.io/api/random");
        const data = await response.json();
        const quote = data[0];

        document.getElementById("quoteText").textContent = `"${quote.q}"`;
        document.getElementById("quoteAuthor").textContent = `– ${quote.a}`;
    } catch (error) {
        document.getElementById("quoteText").textContent = "Failed to fetch quote.";
        document.getElementById("quoteAuthor").textContent = "";
        console.error("Error fetching quote:", error);
    }
}

fetchQuote();

[
    {
        "q": "Inner peace is when you realize that, in the end, nothing matters.",
        "a": "Maxime Lagace",
        "c": "66",
        "h": "<blockquote>&ldquo;Inner peace is when you realize that, in the end, nothing matters.&rdquo; &mdash; <footer>Maxime Lagace</footer></blockquote>"
    },
    {
        "q": "Don't allow your mind to tell your heart what to do. The mind gives up easily.",
        "a": "Paulo Coelho",
        "c": "78",
        "h": "<blockquote>&ldquo;Don't allow your mind to tell your heart what to do. The mind gives up easily.&rdquo; &mdash; <footer>Paulo Coelho</footer></blockquote>"
    },
    {
        "q": "The quality of your commitments will determine the course of your life.",
        "a": "Ralph Marston",
        "c": "71",
        "h": "<blockquote>&ldquo;The quality of your commitments will determine the course of your life.&rdquo; &mdash; <footer>Ralph Marston</footer></blockquote>"
    },
    {
        "q": "Find the game where you can win, and then commit your life to playing it; and play to win.",
        "a": "Robert Kiyosaki",
        "c": "90",
        "h": "<blockquote>&ldquo;Find the game where you can win, and then commit your life to playing it; and play to win.&rdquo; &mdash; <footer>Robert Kiyosaki</footer></blockquote>"
    },
    {
        "q": "The friendship that can cease has never been real. ",
        "a": "St. Jerome",
        "c": "51",
        "h": "<blockquote>&ldquo;The friendship that can cease has never been real. &rdquo; &mdash; <footer>St. Jerome</footer></blockquote>"
    },
    {
        "q": "Successful people appreciate where they have come from, but they don't let their past set the tone for their future.",
        "a": "Steve Harvey",
        "c": "116",
        "h": "<blockquote>&ldquo;Successful people appreciate where they have come from, but they don't let their past set the tone for their future.&rdquo; &mdash; <footer>Steve Harvey</footer></blockquote>"
    },
    {
        "q": "It's just a bad day, not a bad life.",
        "a": "Mary Engelbreit",
        "c": "36",
        "h": "<blockquote>&ldquo;It's just a bad day, not a bad life.&rdquo; &mdash; <footer>Mary Engelbreit</footer></blockquote>"
    },
    {
        "q": "The secret of getting ahead is getting started.",
        "a": "Mark Twain",
        "c": "47",
        "h": "<blockquote>&ldquo;The secret of getting ahead is getting started.&rdquo; &mdash; <footer>Mark Twain</footer></blockquote>"
    },
    {
        "q": "You will have bad times, but they will always wake you up to the stuff you weren't paying attention to.",
        "a": "Robin Williams",
        "c": "103",
        "h": "<blockquote>&ldquo;You will have bad times, but they will always wake you up to the stuff you weren't paying attention to.&rdquo; &mdash; <footer>Robin Williams</footer></blockquote>"
    },
    {
        "q": "Living life in style also means living a life of balance.",
        "a": "Jim Rohn",
        "c": "57",
        "h": "<blockquote>&ldquo;Living life in style also means living a life of balance.&rdquo; &mdash; <footer>Jim Rohn</footer></blockquote>"
    },
    {
        "q": "Mistake is a mistake only if you make it twice.",
        "a": "Robin Sharma",
        "c": "47",
        "h": "<blockquote>&ldquo;Mistake is a mistake only if you make it twice.&rdquo; &mdash; <footer>Robin Sharma</footer></blockquote>"
    },
    {
        "q": "Everyone sees what you appear to be, few experience what you really are.",
        "a": "Niccolo Machiavelli",
        "c": "72",
        "h": "<blockquote>&ldquo;Everyone sees what you appear to be, few experience what you really are.&rdquo; &mdash; <footer>Niccolo Machiavelli</footer></blockquote>"
    },
    {
        "q": "Things turn out best for the people who make the best of the way things turn out.",
        "a": "John Wooden",
        "c": "81",
        "h": "<blockquote>&ldquo;Things turn out best for the people who make the best of the way things turn out.&rdquo; &mdash; <footer>John Wooden</footer></blockquote>"
    },
    {
        "q": "Most people spend more time and energy going around problems than in trying to solve them. ",
        "a": "Henry Ford",
        "c": "91",
        "h": "<blockquote>&ldquo;Most people spend more time and energy going around problems than in trying to solve them. &rdquo; &mdash; <footer>Henry Ford</footer></blockquote>"
    },
    {
        "q": "Excuses are the lies you convince yourself are true to avoid proving you are worthy of the gift you were given.",
        "a": "Steve Harvey",
        "c": "111",
        "h": "<blockquote>&ldquo;Excuses are the lies you convince yourself are true to avoid proving you are worthy of the gift you were given.&rdquo; &mdash; <footer>Steve Harvey</footer></blockquote>"
    },
    {
        "q": "If no one ever broke the rules, then we'd never advance.",
        "a": "Simon Sinek",
        "c": "56",
        "h": "<blockquote>&ldquo;If no one ever broke the rules, then we'd never advance.&rdquo; &mdash; <footer>Simon Sinek</footer></blockquote>"
    },
    {
        "q": "Life has no limitations except the ones you make.",
        "a": "Les Brown",
        "c": "49",
        "h": "<blockquote>&ldquo;Life has no limitations except the ones you make.&rdquo; &mdash; <footer>Les Brown</footer></blockquote>"
    },
    {
        "q": "Walk slowly but never walk backward.",
        "a": "Unknown",
        "c": "36",
        "h": "<blockquote>&ldquo;Walk slowly but never walk backward.&rdquo; &mdash; <footer>Unknown</footer></blockquote>"
    },
    {
        "q": "Realize deeply that the present moment is all you ever have. ",
        "a": "Eckhart Tolle",
        "c": "61",
        "h": "<blockquote>&ldquo;Realize deeply that the present moment is all you ever have. &rdquo; &mdash; <footer>Eckhart Tolle</footer></blockquote>"
    },
    {
        "q": "Happiness is the spiritual experience of living every minute with love, grace and gratitude.",
        "a": "Denis Waitley",
        "c": "92",
        "h": "<blockquote>&ldquo;Happiness is the spiritual experience of living every minute with love, grace and gratitude.&rdquo; &mdash; <footer>Denis Waitley</footer></blockquote>"
    },
    {
        "q": "Thinking is the hardest work there is. That is why so few people engage in it.",
        "a": "Robert Kiyosaki",
        "c": "78",
        "h": "<blockquote>&ldquo;Thinking is the hardest work there is. That is why so few people engage in it.&rdquo; &mdash; <footer>Robert Kiyosaki</footer></blockquote>"
    },
    {
        "q": "Rather than love, than money, than fame, give me truth.",
        "a": "Henry David Thoreau",
        "c": "55",
        "h": "<blockquote>&ldquo;Rather than love, than money, than fame, give me truth.&rdquo; &mdash; <footer>Henry David Thoreau</footer></blockquote>"
    },
    {
        "q": "Men are disturbed not by things, but by the view which they take of them.",
        "a": "Epictetus",
        "c": "73",
        "h": "<blockquote>&ldquo;Men are disturbed not by things, but by the view which they take of them.&rdquo; &mdash; <footer>Epictetus</footer></blockquote>"
    },
    {
        "q": "My favorite things in life don't cost any money. It's really clear that the most precious resource we all have is time.",
        "a": "Steve Jobs",
        "c": "119",
        "h": "<blockquote>&ldquo;My favorite things in life don't cost any money. It's really clear that the most precious resource we all have is time.&rdquo; &mdash; <footer>Steve Jobs</footer></blockquote>"
    },
    {
        "q": "Boldness makes even the smallest animal dangerous.",
        "a": "Robert Greene",
        "c": "50",
        "h": "<blockquote>&ldquo;Boldness makes even the smallest animal dangerous.&rdquo; &mdash; <footer>Robert Greene</footer></blockquote>"
    },
    {
        "q": "Don't let your mind stop you.",
        "a": "Steve Harvey",
        "c": "29",
        "h": "<blockquote>&ldquo;Don't let your mind stop you.&rdquo; &mdash; <footer>Steve Harvey</footer></blockquote>"
    },
    {
        "q": "Be where your enemy is not.",
        "a": "Sun Tzu",
        "c": "27",
        "h": "<blockquote>&ldquo;Be where your enemy is not.&rdquo; &mdash; <footer>Sun Tzu</footer></blockquote>"
    },
    {
        "q": "Look to the beauty of this day, miracles are all around you.",
        "a": "Mary Engelbreit",
        "c": "60",
        "h": "<blockquote>&ldquo;Look to the beauty of this day, miracles are all around you.&rdquo; &mdash; <footer>Mary Engelbreit</footer></blockquote>"
    },
    {
        "q": "The future is the worst thing about the present.",
        "a": "Gustave Flaubert",
        "c": "48",
        "h": "<blockquote>&ldquo;The future is the worst thing about the present.&rdquo; &mdash; <footer>Gustave Flaubert</footer></blockquote>"
    },
    {
        "q": "Greatest success comes just one step beyond the point at which defeat overtakes you.",
        "a": "Unknown",
        "c": "84",
        "h": "<blockquote>&ldquo;Greatest success comes just one step beyond the point at which defeat overtakes you.&rdquo; &mdash; <footer>Unknown</footer></blockquote>"
    },
    {
        "q": "The future is not a gift. It is an achievement.",
        "a": "Robert F. Kennedy",
        "c": "47",
        "h": "<blockquote>&ldquo;The future is not a gift. It is an achievement.&rdquo; &mdash; <footer>Robert F. Kennedy</footer></blockquote>"
    },
    {
        "q": "Before you speak, ask yourself, is it kind, is it necessary, is it true, does it improve the silence?",
        "a": "Sathya Sai Baba",
        "c": "101",
        "h": "<blockquote>&ldquo;Before you speak, ask yourself, is it kind, is it necessary, is it true, does it improve the silence?&rdquo; &mdash; <footer>Sathya Sai Baba</footer></blockquote>"
    },
    {
        "q": "Our happiness depends on the habit of mind we cultivate.",
        "a": "Norman Vincent Peale",
        "c": "56",
        "h": "<blockquote>&ldquo;Our happiness depends on the habit of mind we cultivate.&rdquo; &mdash; <footer>Norman Vincent Peale</footer></blockquote>"
    },
    {
        "q": "Big people don't make people feel small.",
        "a": "Robin Sharma",
        "c": "40",
        "h": "<blockquote>&ldquo;Big people don't make people feel small.&rdquo; &mdash; <footer>Robin Sharma</footer></blockquote>"
    },
    {
        "q": "Progress is impossible without change, and those who cannot change their minds cannot change anything.",
        "a": "George Bernard Shaw",
        "c": "102",
        "h": "<blockquote>&ldquo;Progress is impossible without change, and those who cannot change their minds cannot change anything.&rdquo; &mdash; <footer>George Bernard Shaw</footer></blockquote>"
    },
    {
        "q": "The most difficult times for many of us are the ones we give ourselves.",
        "a": "Pema Chodron",
        "c": "71",
        "h": "<blockquote>&ldquo;The most difficult times for many of us are the ones we give ourselves.&rdquo; &mdash; <footer>Pema Chodron</footer></blockquote>"
    },
    {
        "q": "Fear can hold you prisoner. Hope can set you free.",
        "a": "Stephen King",
        "c": "50",
        "h": "<blockquote>&ldquo;Fear can hold you prisoner. Hope can set you free.&rdquo; &mdash; <footer>Stephen King</footer></blockquote>"
    },
    {
        "q": "Some of your greatest lessons come from your darkest moments.",
        "a": "Roger Lee",
        "c": "61",
        "h": "<blockquote>&ldquo;Some of your greatest lessons come from your darkest moments.&rdquo; &mdash; <footer>Roger Lee</footer></blockquote>"
    },
    {
        "q": "Logic is like the sword - those who appeal to it shall perish by it.",
        "a": "Samuel Butler",
        "c": "68",
        "h": "<blockquote>&ldquo;Logic is like the sword - those who appeal to it shall perish by it.&rdquo; &mdash; <footer>Samuel Butler</footer></blockquote>"
    },
    {
        "q": "In three words I can sum up everything I've learned about life: it goes on.",
        "a": "Robert Frost",
        "c": "75",
        "h": "<blockquote>&ldquo;In three words I can sum up everything I've learned about life: it goes on.&rdquo; &mdash; <footer>Robert Frost</footer></blockquote>"
    },
    {
        "q": "You can't build a reputation on what you are going to do. ",
        "a": "Henry Ford",
        "c": "58",
        "h": "<blockquote>&ldquo;You can't build a reputation on what you are going to do. &rdquo; &mdash; <footer>Henry Ford</footer></blockquote>"
    },
    {
        "q": "Be as fluid as water, do not give your enemies anything solid to attack.",
        "a": "Robert Greene",
        "c": "72",
        "h": "<blockquote>&ldquo;Be as fluid as water, do not give your enemies anything solid to attack.&rdquo; &mdash; <footer>Robert Greene</footer></blockquote>"
    },
    {
        "q": "If life were predictable it would cease to be life, and be without flavor.",
        "a": "Eleanor Roosevelt",
        "c": "74",
        "h": "<blockquote>&ldquo;If life were predictable it would cease to be life, and be without flavor.&rdquo; &mdash; <footer>Eleanor Roosevelt</footer></blockquote>"
    },
    {
        "q": "You are not stuck where you are unless you decide to be.  ",
        "a": "Wayne Dyer",
        "c": "58",
        "h": "<blockquote>&ldquo;You are not stuck where you are unless you decide to be.  &rdquo; &mdash; <footer>Wayne Dyer</footer></blockquote>"
    },
    {
        "q": "Only those who dare to fail greatly can ever achieve greatly.",
        "a": "Robert F. Kennedy",
        "c": "61",
        "h": "<blockquote>&ldquo;Only those who dare to fail greatly can ever achieve greatly.&rdquo; &mdash; <footer>Robert F. Kennedy</footer></blockquote>"
    },
    {
        "q": "It is our choices that show what we truly are, far more than our abilities.",
        "a": "Albus Dumbledore",
        "c": "75",
        "h": "<blockquote>&ldquo;It is our choices that show what we truly are, far more than our abilities.&rdquo; &mdash; <footer>Albus Dumbledore</footer></blockquote>"
    },
    {
        "q": "Don't wait for extraordinary opportunities. Seize common occasions and make them great.",
        "a": "Orison Swett Marden",
        "c": "87",
        "h": "<blockquote>&ldquo;Don't wait for extraordinary opportunities. Seize common occasions and make them great.&rdquo; &mdash; <footer>Orison Swett Marden</footer></blockquote>"
    },
    {
        "q": "Success on the outside means nothing unless you also have success within.",
        "a": "Robin Sharma",
        "c": "73",
        "h": "<blockquote>&ldquo;Success on the outside means nothing unless you also have success within.&rdquo; &mdash; <footer>Robin Sharma</footer></blockquote>"
    },
    {
        "q": "You are what you do, not what you say you'll do.",
        "a": "Carl Jung",
        "c": "48",
        "h": "<blockquote>&ldquo;You are what you do, not what you say you'll do.&rdquo; &mdash; <footer>Carl Jung</footer></blockquote>"
    },
    {
        "q": "To be prepared is half the victory. ",
        "a": "Miguel de Cervantes",
        "c": "36",
        "h": "<blockquote>&ldquo;To be prepared is half the victory. &rdquo; &mdash; <footer>Miguel de Cervantes</footer></blockquote>"
    }
]

