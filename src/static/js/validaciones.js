// Validaciones básicas
const validarCorreo = (correo) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
};

const validarContrasenia = (contrasenia) => {
    return contrasenia.length >= 6;
};

// Manejo del formulario de registro
document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formularioRegistro');
    if (!formulario) return;

    formulario.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Obtener valores
        const correo = document.getElementById('correo').value.trim();
        const contrasenia = document.getElementById('contrasenia').value;
        const tipoCuenta = document.getElementById('tipo_cuenta').value;

        // Validar correo
        if (!validarCorreo(correo)) {
            Swal.fire({
                icon: 'error',
                title: 'Error de validación',
                text: 'Por favor ingrese un correo válido'
            });
            return;
        }

        // Validar contraseña
        if (!validarContrasenia(contrasenia)) {
            Swal.fire({
                icon: 'error',
                title: 'Error de validación',
                text: 'La contraseña debe tener al menos 6 caracteres'
            });
            return;
        }

        try {
            const response = await fetch('/registro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    correo,
                    contrasenia,
                    tipo_cuenta: tipoCuenta,
                    estado_cuenta: 'Activo'
                })
            });

            const data = await response.json();

            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: '¡Registro exitoso!',
                    text: 'Redirigiendo al inicio de sesión...',
                    timer: 2000,
                    showConfirmButton: false
                }).then(() => {
                    window.location.href = '/inicio_sesion';
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: data.mensaje || 'Error al registrar usuario'
                });
            }
        } catch (error) {
            console.error('Error:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Error en el servidor'
            });
        }
    });
});