
let nombre = prompt('Ingrese su nombre: ');
if (!nombre || nombre.trim() === '') {
    nombre = 'Invitado';
}

let edad = parseInt(prompt(nombre + ', Ingrese su edad: '));

if (isNaN(edad) || edad < 0) {
    alert('Edad no válida. Por favor, recarga la página.');
    location.reload();
} else if (edad < 18) {
    alert('Eres menor de edad. Serás redirigido a Google.');
    window.location.href = 'https://www.google.com';
} else {
    document.getElementById('usuario').innerText = `Bienvenido: ${nombre}. Tienes ${edad} años.`;
}
