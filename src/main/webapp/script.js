document.addEventListener('DOMContentLoaded', function() {
    // Show apology container after slight delay
    setTimeout(() => {
        document.querySelector('.apology-container').style.opacity = '1';
    }, 500);

    // Forgive button click
    document.getElementById('forgiveBtn').addEventListener('click', function() {
        const apologyContainer = document.querySelector('.apology-container');
        const thankYouMessage = document.getElementById('thankYouMessage');
        
        apologyContainer.classList.add('hidden');
        thankYouMessage.classList.remove('hidden');
        thankYouMessage.style.opacity = '1';
        
        // Create floating hearts
        createHeartsAnimation();
        
        // Create falling rose petals
        createRosePetals();
    });

    // Not Yet button mouseover effect
    document.getElementById('notYetBtn').addEventListener('mouseover', function() {
        const btn = this;
        const container = btn.parentElement;
        const containerRect = container.getBoundingClientRect();
        const btnRect = btn.getBoundingClientRect();
        
        const maxX = containerRect.width - btnRect.width;
        const maxY = containerRect.height - btnRect.height;
        
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
        
        btn.style.position = 'absolute';
        btn.style.left = randomX + 'px';
        btn.style.top = randomY + 'px';
    });
});

function createHeartsAnimation() {
    const container = document.querySelector('.hearts-animation');
    const colors = ['#FF4081', '#F8BBD0', '#F06292', '#EC407A'];
    
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = '❤️';
            heart.style.fontSize = (20 + Math.random() * 20) + 'px';
            heart.style.color = colors[Math.floor(Math.random() * colors.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = 3 + Math.random() * 3 + 's';
            
            container.appendChild(heart);
            
            // Remove heart after animation
            setTimeout(() => {
                heart.remove();
            }, 4000);
        }, i * 200);
    }
}

function createRosePetals() {
    const scene = document.querySelector('.scene');
    const petalColors = ['#FF4081', '#F06292', '#EC407A', '#E91E63'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const petal = document.createElement('div');
            petal.className = 'rose-petal';
            petal.style.left = Math.random() * window.innerWidth + 'px';
            petal.style.top = window.innerHeight + 'px';
            petal.style.backgroundColor = petalColors[Math.floor(Math.random() * petalColors.length)];
            petal.style.opacity = 0.7 + Math.random() * 0.3;
            petal.style.width = (10 + Math.random() * 15) + 'px';
            petal.style.height = petal.style.width;
            petal.style.animationDuration = 4 + Math.random() * 4 + 's';
            
            scene.appendChild(petal);
            
            // Remove petal after animation
            setTimeout(() => {
                petal.remove();
            }, 6000);
        }, i * 300);
    }
}
