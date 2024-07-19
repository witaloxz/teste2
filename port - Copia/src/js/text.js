document.addEventListener('DOMContentLoaded', function() {
    const span = document.getElementById('typing-text');
    const text = 'Front-End'; // Texto para a animação

    let index = 0;
    let timer = null;

    // Limpar o conteúdo do span para evitar duplicação
    span.textContent = '';

    function typeEffect() {
        if (index < text.length) {
            span.textContent += text[index];
            index++;
        } else {
            clearInterval(timer);
            timer = setTimeout(() => {
                timer = setInterval(eraseEffect, 50);
            }, 1000); // Aguarda 1 segundo antes de começar a apagar
        }
    }

    function eraseEffect() {
        if (span.textContent.length > 0) {
            span.textContent = span.textContent.slice(0, -1);
        } else {
            clearInterval(timer);
            index = 0;
            timer = setTimeout(() => {
                timer = setInterval(typeEffect, 200);
            }, 500); // Aguarda 0,5 segundo antes de começar a digitar novamente
        }
    }

    timer = setInterval(typeEffect, 200);
});
