// elementos
const letter = document.getElementById('letter');
const hint = document.getElementById('hint');
const surpriseBtn = document.getElementById('surpriseBtn');
let isOpen = false;

// abrir/cerrar sobre
letter.addEventListener('click', function() {
    if (!isOpen) {
        letter.classList.add('open');
        isOpen = true;
        hint.classList.add('hidden');
    } else {
        letter.classList.remove('open');
        isOpen = false;
    }
});

// botón sorpresa - la imagen se queda permanente
surpriseBtn.addEventListener('click', function() {
    const surpriseImage = document.getElementById('surpriseImage');
    
    surpriseImage.classList.add('show');
    
    setTimeout(() => {
        surpriseImage.classList.add('shake');
    }, 600);
});

// partículas de fondo
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const total = 20;

    for (let i = 0; i < total; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 10 + 8;
        const left = Math.random() * 100;
        const animationDuration = Math.random() * 8 + 16;
        const offset = (Math.random() - 0.5) * 120;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${left}%`;
        particle.style.animationDuration = `${animationDuration}s`;
        particle.style.setProperty('--offset', offset);

        particlesContainer.appendChild(particle);

        setTimeout(() => {
            if (particle.parentNode) {
                particle.style.opacity = Math.random() * 0.4 + 0.5;
            }
        }, Math.random() * 1500);
    }
}

function refreshParticles() {
    const container = document.getElementById('particles');
    if (container.children.length < 25) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 8 + 6;
        const left = Math.random() * 100;
        const duration = Math.random() * 6 + 18;
        const offset = (Math.random() - 0.5) * 100;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${left}%`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.setProperty('--offset', offset);

        container.appendChild(particle);

        setTimeout(() => {
            particle.style.opacity = Math.random() * 0.4 + 0.5;
        }, 100);

        setTimeout(() => {
            particle.remove();
        }, duration * 1000);
    }
}

createParticles();
setInterval(refreshParticles, 3500);