import emailjs from '@emailjs/browser';
import { emailConfig } from '../config';

// Inicializar EmailJS con tu Public Key
emailjs.init(emailConfig.publicKey);

const form = document.getElementById('contact-form') as HTMLFormElement;
const submitButton = form?.querySelector('button[type="submit"]') as HTMLButtonElement;

if (form && submitButton) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Enviando...';
    submitButton.disabled = true;

    emailjs.sendForm(
      emailConfig.serviceId,
      emailConfig.templateId,
      form,
      emailConfig.publicKey
    )
    .then(function() {
      alert('¡Mensaje enviado con éxito!');
      form.reset();
    }, function(error) {
      alert('Error al enviar el mensaje. Por favor, intenta nuevamente.');
      console.error('Error:', error);
    })
    .finally(function() {
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    });
  });
} 