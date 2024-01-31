// <!-----------------------------START NAV---------------------------->

// <!-----------------------------SLUT NAV---------------------------->

// <!-----------------------------START DEL 1---------------------------->
document.addEventListener('DOMContentLoaded', (event) => {
  // Function to update the slider and the text input to have the same value
  function updateValue(slider, textInput, value) {
    slider.value = value;
    textInput.value = value + '%';
  }

  // Function to set up each slider-text pair
  function setupSliderTextPair(sliderId, textInputId) {
    let slider = document.getElementById(sliderId);
    let textInput = document.getElementById(textInputId);

    // Initialize with the current slider value
    updateValue(slider, textInput, slider.value);

    // Event listener for the slider input
    slider.addEventListener('input', function () {
      updateValue(slider, textInput, this.value);
    });

    // Event listener for the text input
    textInput.addEventListener('input', function () {
      let value = parseInt(this.value, 10);
      if (isNaN(value)) {
        value = 0; // Default to 0 if the value is not a number
      }
      value = Math.max(0, Math.min(value, 100)); // Enforce the range between 0 and 100
      updateValue(slider, textInput, value);
    });
  }

  // Call this function for each slider-text input pair
  setupSliderTextPair('harm', 'harmValue');
  setupSliderTextPair('varm', 'varmValue');
  setupSliderTextPair('hben', 'hbenValue');
  setupSliderTextPair('vben', 'vbenValue');
  setupSliderTextPair('hhand', 'hhandValue');
  setupSliderTextPair('vhand', 'vhandValue');

  // Repeat for other slider-text input pairs with their respective IDs
});

// <!-----------------------------SLUT DEL 1---------------------------->

// <!-----------------------------START DEL 2---------------------------->
document.addEventListener('DOMContentLoaded', function () {
  // Hämta alla bilder och lägg till klickhändelse
  var images = document.querySelectorAll('.img_hjälpmedel');

  images.forEach(function (image) {
    image.addEventListener('click', function () {
      // Toggle klassen 'marked' på den klickade bilden
      image.classList.toggle('marked');
    });
  });
});
// <!-----------------------------SLUT DEL 2---------------------------->

// <!-----------------------------START DEL 3---------------------------->
document.addEventListener('DOMContentLoaded', function () {
  // Hämta alla bilder och lägg till klickhändelse
  var images = document.querySelectorAll('.img_fordon_hjälpmedel');

  images.forEach(function (image) {
    image.addEventListener('click', function () {
      // Ta bort markering från andra bilder
      images.forEach(function (otherImage) {
        otherImage.classList.remove('marked');
      });

      // Lägg till markering på klickad bild
      image.classList.toggle('marked');
    });
  });
});

// <!-----------------------------SLUT DEL 3---------------------------->

// <!-----------------------------FOOTER DEL 1---------------------------->

function myFunction() {
  var x = document.getElementById('myLinks');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
}
