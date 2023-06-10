// LAST VISIT 

// Obtener la fecha y hora actual
var fechaActual = new Date();

// Convertir la fecha y hora en una cadena legible
var fechaActualFormateada = fechaActual.toLocaleString();

// Guardar la fecha y hora en el almacenamiento local
localStorage.setItem('ultimaVisita', fechaActualFormateada);

// Obtener la última visita almacenada en el almacenamiento local
var ultimaVisita = localStorage.getItem('ultimaVisita');

// Mostrar la última visita en tu página web
document.getElementById('ultima-visita').textContent = 'Last visit: ' + ultimaVisita;
