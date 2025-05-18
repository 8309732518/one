document.addEventListener('DOMContentLoaded', function() {
    // Create flowers
    createFlowers();
    
    // Create clouds
    createClouds();
    
    // Show proposal after everything is loaded
    setTimeout(() => {
        document.querySelector('.proposal-container').style.opacity = '1';
    }, 1000);
    
    // Yes button click
    document.getElementById('yesBtn').addEventListener('click', function() {
        const proposal = document.querySelector('.proposal-container');
        const accepted = document.getElementById('acceptedMessage');
        
        proposal.classList.add('hidden');
        accepted.classList.remove('hidden');
        accepted.style.opacity = '1';
        
        // Create hearts animation
        createHearts();
    });
    
    // No button mouseover (run away effect)
    document.getElementById('noBtn').addEventListener('mouseover', function() {
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

function createFlowers() {
    const groundHeight = document.querySelector('.ground').offsetHeight;
    const groundTop = window.innerHeight - groundHeight;
    
    for (let i = 0; i < 15; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower';
        
        // Random position along the ground
        const left = Math.random() * window.innerWidth;
        const height = 80 + Math.random() * 70;
        
        flower.style.left = left + 'px';
        flower.style.bottom = groundHeight + 'px';
        flower.style.height = height + 'px';
        
        // Create stem
        const stem = document.createElement('div');
        stem.className = 'stem';
        flower.appendChild(stem);
        
        // Create bloom
        const bloom = document.createElement('div');
        bloom.className = 'bloom';
        
        // Create petals
        for (let j = 0; j < 8; j++) {
            const petal = document.createElement('div');
            petal.className = 'petal';
            
            const angle = (j / 8) * Math.PI * 2;
            const distance = 15 + Math.random() * 5;
            const size = 10 + Math.random() * 5;
            
            petal.style.width = size + 'px';
            petal.style.height = size + 'px';
            petal.style.left = '50%';
            petal.style.top = '50%';
            petal.style.marginLeft = -size/2 + 'px';
            petal.style.marginTop = -size/2 + 'px';
            petal.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;
            
            bloom.appendChild(petal);
        }
        
        // Create center
        const center = document.createElement('div');
        center.className = 'center';
        bloom.appendChild(center);
        
        flower.appendChild(bloom);
        
        // Add slight sway animation
        flower.style.animation = `sway ${3 + Math.random() * 4}s infinite alternate ease-in-out`;
        
        document.querySelector('.scene').appendChild(flower);
    }
}

function createClouds() {
    for (let i = 0; i < 5; i++) {
        const cloud = document.createElement('div');
        cloud.className = 'cloud';
        
        const size = 50 + Math.random() * 100;
        const top = 10 + Math.random() * 30;
        const left = Math.random() * window.innerWidth;
        const opacity = 0.7 + Math.random() * 0.3;
        
        cloud.style.width = size + 'px';
        cloud.style.height = size/2 + 'px';
        cloud.style.top = top + '%';
        cloud.style.left = left + 'px';
        cloud.style.opacity = opacity;
        
        // Animation
        const duration = 30 + Math.random() * 60;
        cloud.style.animation = `floatCloud ${duration}s linear infinite`;
        
        document.querySelector('.scene').appendChild(cloud);
    }
}

function createHearts() {
    const colors = ['#FF4081', '#F50057', '#FF80AB', '#C2185B'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = '❤️';
            heart.style.fontSize = (20 + Math.random() * 30) + 'px';
            heart.style.color = colors[Math.floor(Math.random() * colors.length)];
            heart.style.left = (Math.random() * window.innerWidth) + 'px';
            heart.style.top = (window.innerHeight - 100) + 'px';
            
            document.body.appendChild(heart);
            
            // Remove heart after animation
            setTimeout(() => {
                heart.remove();
            }, 4000);
        }, i * 100);
    }
}
