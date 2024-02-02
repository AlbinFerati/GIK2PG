document.addEventListener('DOMContentLoaded', function() {
    // Function to toggle the color of an element between white and its original color
    const originalColors = {}; // To store the original colors and opacity
    
    function toggleColor(event) {
        const element = event.target;
        const currentColor = element.style.fill;
        const id = element.id;

        // Check if the original color is stored
        if (!(id in originalColors)) {
            // If not, store the original color and opacity
            originalColors[id] = {
                color: currentColor,
                opacity: element.style.fillOpacity || '1', // Default to 1 if not set
            };
        }

        if (currentColor === 'white') {
            // If current color is white, revert to original color and opacity
            element.style.fill = originalColors[id].color;
            element.style.fillOpacity = originalColors[id].opacity;
        } else {
            // If current color is not white, set it to white
            element.style.fill = 'white';
            element.style.fillOpacity = '1'; // Set opacity to fully visible
        }
    }

    // Select the elements by their IDs and add click event listeners
    const element1 = document.getElementById('path55');
    const element2 = document.getElementById('path56');
    const element3 = document.getElementById('path57');
    const element4 = document.getElementById('path58');
    const element5 = document.getElementById('path59');
    const element6 = document.getElementById('path60');
    const element7 = document.getElementById('path61');
    const element8 = document.getElementById('path62');
    const element9 = document.getElementById('path63');
    const element10 = document.getElementById('path64');

    if (element1) {
        element1.addEventListener('click', toggleColor);
    }

    if (element2) {
        element2.addEventListener('click', toggleColor);
    }

    if (element3) {
        element3.addEventListener('click', toggleColor);
    }

    if (element4) {
        element4.addEventListener('click', toggleColor);
    }

    if (element5) {
        element5.addEventListener('click', toggleColor);
    }

    if (element6) {
        element6.addEventListener('click', toggleColor);
    }

    if (element7) {
        element7.addEventListener('click', toggleColor);
    }

    if (element8) {
        element8.addEventListener('click', toggleColor);
    }

    if (element9) {
        element9.addEventListener('click', toggleColor);
    }

    if (element10) {
        element10.addEventListener('click', toggleColor);
    }
});
