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
document.querySelectorAll('.img_cont').forEach((item) => {
  item.addEventListener('click', function (event) {
    event.stopPropagation(); // Detta stoppar händelsen från att bubbla uppåt i DOM-trädet
    this.classList.toggle('marked');
  });
});

// <!-----------------------------SLUT DEL 2---------------------------->

// <!-----------------------------START DEL 3---------------------------->
var yesCheckbox = document.getElementById('choice_yes');
var q1_yesDiv = document.querySelector('.Q1_yes');
var if_yes = document.querySelector('.if_yes');
var cont_fordon = document.querySelector('.cont_fordon');
var noCheckbox = document.getElementById('choice_no');
var q1_noDiv = document.querySelector('.Q1_no');
var if_no = document.querySelector('.if_no');
// Lyssna på ändringar i Ja-kryssrutan
yesCheckbox.addEventListener('change', function () {
  if (yesCheckbox.checked) {
    // Om användaren klickar på "Ja", visa Q1-diven
    q1_yesDiv.style.display = 'block';
    if_yes.style.display = 'block';
    cont_fordon.style.display = 'grid';
    q1_noDiv.style.display = 'none';
    if_no.style.display = 'none';
  } else {
    // Annars dölj Q1-diven
    q1_yesDiv.style.display = 'none';
    if_no.style.display = 'none';
    cont_fordon.style.display = 'none';
  }
});
// Lyssna på ändringar i Ja-kryssrutan
noCheckbox.addEventListener('change', function () {
  if (noCheckbox.checked) {
    // Om användaren klickar på "Ja", visa Q1-diven
    q1_noDiv.style.display = 'block';
    if_no.style.display = 'block';
    cont_fordon.style.display = 'grid';
    q1_yesDiv.style.display = 'none';
    if_yes.style.display = 'none';
  } else {
    // Annars dölj Q1-diven
    q1_noDiv.style.display = 'none';
    if_no.style.display = 'none';
    cont_fordon.style.display = 'none';
  }
});

document.addEventListener('DOMContentLoaded', function () {
  var yesCheckbox = document.getElementById('choice_yes');
  var noCheckbox = document.getElementById('choice_no');

  function clearSelections(selector) {
    document.querySelectorAll(selector).forEach(function (input) {
      input.checked = false; // Avmarkera varje radioknapp
    });
  }

  yesCheckbox.addEventListener('change', function () {
    if (yesCheckbox.checked) {
      clearSelections('.Q1_no input[type="radio"]'); // Rensa val i "Nej"-sektionen
    }
  });

  noCheckbox.addEventListener('change', function () {
    if (noCheckbox.checked) {
      clearSelections('.Q1_yes input[type="radio"]'); // Rensa val i "Ja"-sektionen
    }
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
