function cambiar_tema() {
    // Obtener html
    const html = document.documentElement;

    // Obtener icono
    const tema_icono = document.getElementById('theme-icon');

    // Obtener tema actual
    const tema_actual = html.getAttribute('data-theme') || 'dark';

    // Cambiar tema
    const nuevo_tema = tema_actual === 'light' ? 'dark' : 'light';

    // Cambiar atributo
    html.setAttribute('data-theme', nuevo_tema);

    // Cambiar icono
    tema_icono.className = nuevo_tema === 'light' ? 'fas fa-moon' : 'fas fa-sun';

    // Cambiar logos de la página
    const logos = document.querySelectorAll('header img, .navbar-brand img');

    // Cambiar logo dependiendo del tema
    logos.forEach(logo => {
        if (logo) {
            logo.src = nuevo_tema === 'light' ? '/img/vn_oscuro.png' : '/img/vn_claro.png';
        }
    });

    // Guardar tema en localStorage
    localStorage.setItem('theme', nuevo_tema);
}

document.addEventListener('DOMContentLoaded', () => {
    // Obtener botón de tema
    const savedTheme = localStorage.getItem('theme') || 'dark';

    // Cambiar tema
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Obtener icono
    const tema_icono = document.getElementById('theme-icon');

    // Cambiar icono dependiendo del tema
    if (tema_icono) {
        tema_icono.className = savedTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }

    // Cambiar logo
    const logo = document.querySelector('header img');

    // Cambiar logo dependiendo del tema
    if (logo) {
        logo.src = savedTheme === 'light' ? 'img/vn_oscuro.png' : 'img/vn_claro.png';
    }
});

// Función para obtener usuario de cookies
function obtener_usuario() {
    // Obtener cookie de usuario
    const usuarioCookie = document.cookie
        .split('; ')
        .find(row => row.startsWith('usuario='));

    // imprime el valor de la cookie
    console.log('Cookie usuario:', usuarioCookie);

    // Si existe la cookie
    if (usuarioCookie) {
        const usuario = JSON.parse(decodeURIComponent(usuarioCookie.split('=')[1]));
        console.log('Usuario parseado:', usuario);
        return usuario;
    }
    return null;
}
// Función para actualizar el menú con el correo del usuario
function actualizar_menu_usuario() {
    // Obtener usuario
    const usuario = obtener_usuario();

    // Obtener botón de menú
    const boton_menu = document.getElementById('menuUsuario');

    // Si existe el botón y el usuario
    if (boton_menu && usuario && usuario.correo) {
        boton_menu.innerHTML = `
            <i class="bi bi-person-circle me-1"></i>
            ${usuario.correo}
        `;
    } else {
        boton_menu.innerHTML = `
            <i class="bi bi-person-circle me-1"></i>
            Usuario
        `;
    }
}

function inicializar_tema() {
    // Obtener tema guardado
    const savedTheme = localStorage.getItem('theme') || 'dark';

    // Cambiar tema
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Obtener icono
    const tema_icono = document.getElementById('theme-icon');

    // Cambiar icono dependiendo del tema
    if (tema_icono) {
        tema_icono.className = savedTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }

    // Cambiar logos de la página
    const logos = document.querySelectorAll('header img, .navbar-brand img');

    // Cambiar logo dependiendo del tema
    logos.forEach(logo => {
        if (logo) {
            logo.src = savedTheme === 'light' ? '/img/vn_oscuro.png' : '/img/vn_claro.png';
        }
    });
}

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', () => {
    // Inicial
    inicializar_tema();
    // Actualizar menú de usuario
    actualizar_menu_usuario();
});

// Función para cerrar sesión
async function cerrar_sesion() {
    try {
        // Preguntar al usuario si desea cerrar sesión
        const result = await Swal.fire({
            title: '¿Estás seguro?',
            text: "¿Deseas cerrar la sesión?",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, cerrar sesión',
            cancelButtonText: 'Cancelar'
        });

        // Si el usuario confirma
        if (result.isConfirmed) {
            const res = await fetch('/cerrar_sesion', {
                method: 'POST'
            });

            // Si la respuesta es correcta
            const data = await res.json();

            // Si no hay error
            if (!data.error) {
                await Swal.fire({
                    icon: 'success',
                    title: 'Éxito',
                    text: data.mensaje,
                    timer: 1500
                });
                window.location.href = '/inicio_sesion';
            }
        }
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Error al cerrar sesión'
        });
    }
}