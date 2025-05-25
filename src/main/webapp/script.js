document.addEventListener('DOMContentLoaded', function() {
    // Start sad background music
    const sadMusic = document.getElementById('sadMusic');
    sadMusic.volume = 0.3;
    
    // Try to play music (may require user interaction)
    const playPromise = sadMusic.play();
    
    if (playPromise !== undefined) {
        playPromise.catch(error => {
            // Autoplay was prevented, will play after user interaction
            document.addEventListener('click', function() {
                sadMusic.play();
            }, { once: true });
        });
    }
    
    // Create teardrops
    createTeardrops(15);
    
    // Create additional teardrops periodically
    setInterval(() => {
        createTeardrops(3);
    }, 1000);
});

function createTeardrops(count) {
    const container = document.querySelector('.teardrops');
    
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const teardrop = document.createElement('div');
            teardrop.className = 'teardrop';
            teardrop.style.left = Math.random() * 100 + '%';
            teardrop.style.top = Math.random() * 20 + '%';
            teardrop.style.animationDuration = (2 + Math.random() * 2) + 's';
            teardrop.style.width = (5 + Math.random() * 5) + 'px';
            teardrop.style.height = (10 + Math.random() * 10) + 'px';
            
            container.appendChild(teardrop);
            
            // Remove teardrop after animation completes
            setTimeout(() => {
                teardrop.remove();
            }, 3000);
        }, i * 100);
    }
}
