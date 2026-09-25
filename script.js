const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });
}

const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const subject = `Дархости нав аз ${formData.get('name')}`;
    const body = [
      `Ном: ${formData.get('name')}`,
      `Email: ${formData.get('email')}`,
      '',
      'Паём:',
      formData.get('message')
    ].join('\n');

    const mailUser = 'umarsufievsufiev';
    const mailDomain = 'gmail.com';
    window.location.href = `mailto:${mailUser}@${mailDomain}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
