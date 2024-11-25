function shootWeb() {
    // Crear un elemento 'div' para la telaraña
    const web = document.createElement('div');

    // Incrustar el código SVG de una telaraña directamente
    web.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="200" height="200">
            <circle cx="250" cy="250" r="240" stroke="#ffffff" stroke-width="2" fill="none"/>
            <circle cx="250" cy="250" r="200" stroke="#ffffff" stroke-width="2" fill="none"/>
            <circle cx="250" cy="250" r="150" stroke="#ffffff" stroke-width="2" fill="none"/>
            <circle cx="250" cy="250" r="100" stroke="#ffffff" stroke-width="2" fill="none"/>
            <line x1="250" y1="10" x2="250" y2="490" stroke="#ffffff" stroke-width="2"/>
            <line x1="10" y1="250" x2="490" y2="250" stroke="#ffffff" stroke-width="2"/>
            <line x1="50" y1="50" x2="450" y2="450" stroke="#ffffff" stroke-width="2"/>
            <line x1="450" y1="50" x2="50" y2="450" stroke="#ffffff" stroke-width="2"/>
        </svg>
    `;

    // Posicionar la telaraña en el centro de la pantalla
    web.style.position = 'fixed';
    web.style.left = '50%';
    web.style.top = '50%';
    web.style.transform = 'translate(-50%, -50%)';
    web.style.opacity = '0.8';
    web.style.zIndex = '1000';

    // Agregar la telaraña al cuerpo del documento
    document.body.appendChild(web);

    // Eliminar la telaraña después de 2 segundos
    setTimeout(() => {
        web.remove();
    }, 2000);
}



// Función para mostrar una frase épica de Spider-Man
function spideyQuote() {
    const quotes = [
        "Un gran poder, conlleva una gran responsabilidad.",
        "Todo el mundo puede ganar una pelea, pero a veces perderla nos hace más fuertes.",
        "Soy tu amigable vecino Spider-Man.",
        "Lo que te define no es el traje, sino lo que haces con él."
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    alert(randomQuote);
}
