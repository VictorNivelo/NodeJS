function toggleTheme() {
    const html = document.documentElement;
    const themeIcon = document.getElementById('theme-icon');
    const currentTheme = html.getAttribute('data-theme') || 'dark';

    // Cambiar tema
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);

    // Cambiar icono
    themeIcon.className = newTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';

    // Cambiar logo
    const logo = document.querySelector('header img');
    if (logo) {
        logo.src = newTheme === 'light' ? 'img/vn_oscuro.png' : 'img/vn_claro.png';
    }

    localStorage.setItem('theme', newTheme);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);

    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
        themeIcon.className = savedTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }

    const logo = document.querySelector('header img');
    if (logo) {
        logo.src = savedTheme === 'light' ? 'img/vn_oscuro.png' : 'img/vn_claro.png';
    }
});