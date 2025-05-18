document.addEventListener('DOMContentLoaded', function() {
    // Create initial floating hearts
    createHearts(15);
    
    // Start romantic background music
    const music = document.getElementById('romanticMusic');
    music.volume = 0.3;
    
    // Try to play music (may be blocked by browser autoplay policies)
    const playPromise = music.play();
    
    if (playPromise !== undefined) {
        playPromise.catch(error => {
            console.log("Autoplay prevented. User interaction required to play audio.");
        });
    }
    
    // Yes button click handler
    document.getElementById('yesBtn').addEventListener('click', function() {
        showResponse("YES! I will marry you, Chinna! ❤️");
        celebrate();
        music.pause();
        
        // Play celebration sound
        const celebrationSound = new Audio('https://www.soundjay.com/human/sounds/applause-01.mp3');
        celebrationSound.volume = 0.5;
        celebrationSound.play();
    });
    
    // No button mouseover handler (playful movement)
    document.getElementById('noBtn').addEventListener('mouseover', function() {
        moveButton(this);
        
        // Play playful sound
        const playfulSound = new Audio('https://www.soundjay.com/buttons/sounds/button-09.mp3');
        playfulSound.volume = 0.3;
        playfulSound.play();
    });
    
    // No button click handler (just in case)
    document.getElementById('noBtn').addEventListener('click', function() {
        showResponse("I need more time to think...");
    });
    
    // Create happy tears for Pavani
    createHappyTears();
});

function createHearts(count) {
    const container = document.querySelector('.floating-hearts');
    
    for (let i = 0; i < count; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.fontSize = (15 + Math.random() * 25) + 'px';
        heart.style.animationDuration = 5 + Math.random() * 5 + 's';
        heart.style.animationDelay = Math.random() * 5 + 's';
        heart.style.color = getRandomHeartColor();
        
        container.appendChild(heart);
    }
}

function getRandomHeartColor() {
    const colors = [
        '#FF4081', '#F8BBD0', '#F06292', 
        '#EC407A', '#E91E63', '#FFD700',
        '#FFAB00', '#FF6D00', '#FF3D00'
    ];
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
    
    // Add temporary shake animation
    button.style.animation = 'buttonShake 0.5s';
    setTimeout(() => {
        button.style.animation = '';
    }, 500);
}

function showResponse(message) {
    const response = document.getElementById('response');
    const responseText = document.getElementById('responseText');
    const proposalContainer = document.querySelector('.proposal-container');
    
    responseText.textContent = message;
    response.classList.remove('hidden');
    proposalContainer.classList.add('hidden');
    
    // Add fireworks
    createFireworks();
}

function celebrate() {
    // Create explosion of hearts
    createHearts(50);
    
    // Make Pavani jump for joy
    const pavani = document.querySelector('.pavani');
    pavani.style.animation = 'pavaniJump 0.5s 3 alternate';
    
    // Add temporary jump animation
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes pavaniJump {
            0% { transform: translateX(-50%) translateY(0); }
            50% { transform: translateX(-50%) translateY(-30px); }
            100% { transform: translateX(-50%) translateY(0); }
        }
    `;
    document.head.appendChild(style);
    
    // Remove jump animation after it's done
    setTimeout(() => {
        pavani.style.animation = 'pavaniBreathe 3s infinite alternate-reverse';
        document.head.removeChild(style);
    }, 1500);
}

function createHappyTears() {
    const tear = document.querySelector('.happy-tear');
    
    setInterval(() => {
        // Clone the tear and animate it
        const newTear = tear.cloneNode();
        newTear.style.animation = 'tearDrop 2s linear forwards';
        tear.parentNode.appendChild(newTear);
        
        // Remove tear after animation
        setTimeout(() => {
            newTear.remove();
        }, 2000);
    }, 3000);
}

function createFireworks() {
    const container = document.querySelector('.fireworks');
    const colors = ['#FF4081', '#FFD700', '#4CAF50', '#00BCD4', '#E91E63'];
    
    // Create multiple fireworks
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const firework = document.createElement('div');
            firework.className = 'firework';
            firework.style.left = Math.random() * 100 + '%';
            firework.style.top = '100%';
            firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            firework.style.boxShadow = `0 0 10px 5px ${colors[Math.floor(Math.random() * colors.length)]}`;
            firework.style.animationDelay = i * 0.2 + 's';
            
            container.appendChild(firework);
            
            // Remove firework after animation
            setTimeout(() => {
                firework.remove();
            }, 1000);
        }, i * 200);
    }
}
