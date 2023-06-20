const form = document.getElementById('contact-form');
const notification = document.getElementById('notification');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (!validateForm()) {
        return;
    }

    showNotification('Formulario enviado');
    resetForm();
});

function validateForm() {
    const name = document.getElementById('name').value.trim();
    const age = parseInt(document.getElementById('age').value);
    const email = document.getElementById('email').value.trim();
    const query = document.getElementById('query').value.trim();

    if (name === '') {
        showError('Por favor, ingresa tu nombre y apellido');
        return false;
    }

    if (isNaN(age) || age <= 0 || age > 120) {
        showError('Por favor, ingresa una edad válida');
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError('Por favor, ingresa un email válido');
        return false;
    }

    if (query === '') {
        showError('Por favor, ingresa tu consulta');
        return false;
    }

    return true;
}

function showError(message) {
    notification.textContent = message;
    notification.style.display = 'block';
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;

    document.body.insertBefore(notification, document.body.firstChild);

    setTimeout(function() {
        notification.remove();
    }, 3000);
}

function resetForm() {
    form.reset();
    notification.style.display = 'none';
}