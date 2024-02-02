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
    const element1 = document.getElementById('path55'); //tumme
    const element2 = document.getElementById('path56'); //pekfinger
    const element3 = document.getElementById('path57'); //fuckyoufinger
    const element4 = document.getElementById('path58'); //ringfinger
    const element5 = document.getElementById('path59'); //lillfinger
    const element6 = document.getElementById('path60'); //hand
    const element7 = document.getElementById('path61'); //handled -> halva udnerarm
    const element8 = document.getElementById('path62'); //underarm -> armbåge
    const element9 = document.getElementById('path63'); // armbåge -> halva överarm
    const element10 = document.getElementById('path64'); // övre överarm

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

/*document.addEventListener('DOMContentLoaded', function() {
    // Store the original colors and opacities
    const originalColors = {};
    
    function toggleColor(event) {
        const clickedElement = event.target;
        const clickedIdNumber = parseInt(clickedElement.id.replace('path', '')); // Extract the number from the id
        
        // Determine the action: If the clicked element is white, we'll revert all, 
        // otherwise, we'll set all to white
        const revertAll = clickedElement.style.fill === 'white';

        // Loop through all elements with id number less than or equal to the clicked element
        for (let i = clickedIdNumber; i >= 55; i--) { // Assuming 55 is the lowest id number for the arm
            const elementId = 'path' + i;
            const element = document.getElementById(elementId);
            if (element) {
                // If we're reverting to original color
                if (revertAll) {
                    // If the element was previously turned white, revert to original color
                    if (originalColors[elementId] && element.style.fill === 'white') {
                        element.style.fill = originalColors[elementId].color;
                        element.style.fillOpacity = originalColors[elementId].opacity;
                    }
                } else {
                    // If the element is not already white, store its original color and opacity
                    if (!originalColors[elementId]) {
                        originalColors[elementId] = {
                            color: element.style.fill || '',
                            opacity: element.style.fillOpacity || '1',
                        };
                    }
                    // Set the element to white
                    element.style.fill = 'white';
                    element.style.fillOpacity = '1';
                }
            }
        }
    }

    // Add click event listeners for all relevant elements
    for (let i = 64; i >= 55; i--) { // Assuming 64 is the highest id number and 55 is the lowest
        const elementId = 'path' + i;
        const element = document.getElementById(elementId);
        if (element) {
            element.addEventListener('click', toggleColor);
        }
    }
});
*/

