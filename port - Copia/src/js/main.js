// Carrega a configuração de particles.json
particlesJS.load('particles-js', 'src/js/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

const updateParticlesPosition = (event) => {
  if (window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS) {
    const x = event.touches ? event.touches[0].clientX : event.clientX;
    const y = event.touches ? event.touches[0].clientY : event.clientY;
    const pJSDom = window.pJSDom[0].pJS;

    pJSDom.interactivity.mouse.pos_x = x;
    pJSDom.interactivity.mouse.pos_y = y;
    pJSDom.interactivity.status = 'mousemove';
  }
};

// Eventos de mouse
document.addEventListener('mousemove', updateParticlesPosition);

// Eventos de toque
document.addEventListener('touchmove', updateParticlesPosition);
document.addEventListener('touchstart', updateParticlesPosition);
document.addEventListener('touchend', () => {
 
  if (window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS) {
    const pJSDom = window.pJSDom[0].pJS;
    pJSDom.interactivity.mouse.pos_x = null;
    pJSDom.interactivity.mouse.pos_y = null;
    pJSDom.interactivity.status = 'mouseleave';
  }
});
