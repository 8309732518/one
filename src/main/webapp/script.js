document.addEventListener('DOMContentLoaded', function() {
    // Create floating hearts
    createHearts();
    
    // Yes button click
    document.getElementById('yesBtn').addEventListener('click', function() {
        showResponse("Yes! I will marry you, Chinna! ❤️");
        celebrate();
    });
    
    // No button mouseover (playful movement)
    document.getElementById('noBtn').addEventListener('mouseover', function() {
        moveButton(this);
    });
    
    // No button click (just in case)
    document.getElementById('noBtn').addEventListener('click', function() {
        showResponse("I need more time to think...");
    });
});

function createHearts() {
    const scene = document.querySelector('.scene');
    
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.fontSize = (15 + Math.random() * 20) + 'px';
        heart.style.animationDuration = 3 + Math.random() * 4 + 's';
        heart.style.animationDelay = Math.random() * 5 + 's';
        
        scene.appendChild(heart);
    }
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
}

function showResponse(message) {
    const response = document.getElementById('response');
    const responseText = document.getElementById('responseText');
    
    responseText.textContent = message;
    response.classList.remove('hidden');
    
    // Hide proposal text
    document.querySelector('.proposal-text').classList.add('hidden');
}

function celebrate() {
    const scene = document.querySelector('.scene');
    
    // Create explosion of hearts
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = '❤️';
            heart.style.left = '60%';
            heart.style.top = '60%';
            heart.style.fontSize = (15 + Math.random() * 25) + 'px';
            heart.style.animationDuration = 2 + Math.random() * 3 + 's';
            heart.style.color = getRandomColor();
            
            scene.appendChild(heart);
            
            // Remove heart after animation
            setTimeout(() => {
                heart.remove();
            }, 5000);
        }, i * 100);
    }
    
    // Make Pavani jump for joy
    const pavaniHead = document.querySelector('.pavani .head');
    pavaniHead.style.animation = 'pavaniJump 0.5s 3 alternate';
    
    // Add temporary jump animation
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes pavaniJump {
            0% { transform: translateX(-50%) translateY(0); }
            100% { transform: translateX(-50%) translateY(-20px); }
        }
    `;
    document.head.appendChild(style);
    
    // Remove jump animation after it's done
    setTimeout(() => {
        pavaniHead.style.animation = 'pavaniHeadTilt 3s infinite alternate';
        document.head.removeChild(style);
    }, 1500);
}

function getRandomColor() {
    const colors = ['#FF4081', '#F8BBD0', '#F06292', '#EC407A', '#E91E63', '#FFD700'];
    return colors[Math.floor(Math.random() * colors.length)];
}
