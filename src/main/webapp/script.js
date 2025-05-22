document.addEventListener('DOMContentLoaded', function() {
    // Initialize floating hearts
    createFloatingHearts(15);
    
    // Start romantic background music
    const romanticSound = document.getElementById('romantic-sound');
    romanticSound.volume = 0.3;
    
    // Try to play music (may require user interaction)
    const playPromise = romanticSound.play();
    
    if (playPromise !== undefined) {
        playPromise.catch(error => {
            // Autoplay was prevented, will play after user interaction
            document.body.addEventListener('click', function() {
                romanticSound.play();
            }, { once: true });
        });
    }
    
    // Yes button click handler
    document.getElementById('yes-btn').addEventListener('click', function() {
        showResponse("Yes Chinna! I'll marry you! ❤️");
        celebrate();
        romanticSound.pause();
        
        // Play celebration sound
        const celebrationSound = new Audio('https://www.soundjay.com/human/sounds/applause-01.mp3');
        celebrationSound.volume = 0.5;
        celebrationSound.play();
    });
    
    // No button mouseover handler (playful movement)
    document.getElementById('no-btn').addEventListener('mouseover', function() {
        moveButton(this);
        
        // Play playful sound
        const playfulSound = new Audio('https://www.soundjay.com/buttons/sounds/button-09.mp3');
        playfulSound.volume = 0.3;
        playfulSound.play();
    });
    
    // No button click handler
    document.getElementById('no-btn').addEventListener('click', function() {
        showResponse("I need more time to think about it...");
    });
});

function createFloatingHearts(count) {
    const container = document.querySelector('.floating-hearts');
    
    for (let i = 0; i < count; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.fontSize = (15 + Math.random() * 25) + 'px';
        heart.style.animationDuration = (5 + Math.random() * 5) + 's';
        heart.style.animationDelay = (Math.random() * 5) + 's';
        heart.style.color = getRandomHeartColor();
        
        container.appendChild(heart);
    }
}

function getRandomHeartColor() {
    const colors = ['#FF4081', '#F06292', '#EC407A', '#E91E63', '#FFD700'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function moveButton(button) {
    const container = button.parentElement;
    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();
    
    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    button.style.position = 'absolute';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
    
    // Add shake animation
    button.style.animation = 'shake 0.5s';
    setTimeout(() => {
        button.style.animation = '';
    }, 500);
}

function showResponse(message) {
    const responseBox = document.querySelector('.response-box');
    const responseText = document.getElementById('response-text');
    const proposalBox = document.querySelector('.proposal-box');
    
    responseText.textContent = message;
    responseBox.classList.remove('hidden');
    proposalBox.classList.add('hidden');
    
    // If response is positive, create celebration
    if (message.includes("Yes")) {
        celebrate();
    }
}

function celebrate() {
    // Create more hearts
    createFloatingHearts(30);
    
    // Make Pavani jump for joy
    const pavani = document.querySelector('.pavani');
    pavani.style.animation = 'jump 0.5s 3 alternate';
    
    // Add temporary jump animation
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes jump {
            0% { transform: translateX(-50%) translateY(0); }
            50% { transform: translateX(-50%) translateY(-30px); }
            100% { transform: translateX(-50%) translateY(0); }
        }
    `;
    document.head.appendChild(style);
    
    // Remove animation after completion
    setTimeout(() => {
        pavani.style.animation = 'pavani-breathe 3s infinite alternate-reverse';
        document.head.removeChild(style);
    }, 1500);
}
