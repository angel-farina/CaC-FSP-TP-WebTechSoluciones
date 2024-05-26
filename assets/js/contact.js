document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const service = document.getElementById('service').value;
        const agree = document.getElementById('agree').checked;
        const message = document.getElementById('message').value;
        
        if (!name || !email || !phone || !service || !agree || !message) {
            alert('Por favor, completa todos los campos.');
        } else {
            alert('Formulario enviado correctamente.');
            form.reset();
        }
    });
});
