document.addEventListener('DOMContentLoaded', function() {
    // Function to toggle the color between red and black
    function toggleColor(event) {
        const element = event.target;
        element.style.fill = element.style.fill === 'white' ? 'black' : 'white';
    }

    // Select the elements by their IDs and add click event listeners
    const element1 = document.getElementById('id1');
    const element2 = document.getElementById('id2');
    const element3 = document.getElementById('path19');

    if (element1) {
        element1.addEventListener('click', toggleColor);
    }

    if (element2) {
        element2.addEventListener('click', toggleColor);
    }

    if (element3) {
        element3.addEventListener('click', toggleColor);
    }
});

