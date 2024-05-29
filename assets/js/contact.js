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
        const recaptchaResponse = grecaptcha.getResponse();
        
        if (!name || !email || !phone || !service || !agree || !message) {
            alert('Por favor, completa todos los campos.');
        } else if (recaptchaResponse.length === 0) {
            alert('Por favor, completa el reCAPTCHA.');
        } else {
            alert('Formulario enviado correctamente.');
            form.reset();
            grecaptcha.reset();
        }
    });
});
