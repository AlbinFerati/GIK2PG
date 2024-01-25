document.addEventListener('DOMContentLoaded', (event) => {
  // Function to update the slider and the text input to have the same value
  function updateValue(slider, textInput, value) {
    slider.value = value;
    textInput.value = value;
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
