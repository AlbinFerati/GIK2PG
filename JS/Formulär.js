// <!-----------------------------START NAV---------------------------->

// <!-----------------------------SLUT NAV---------------------------->

// <!-----------------------------START DEL 1---------------------------->
// document.addEventListener('DOMContentLoaded', (event) => {
//   // Function to update the slider and the text input to have the same value
// // Function to update the slider and the text input to have the same value
// function updateValue(slider, textInput, value, unit = '%') {
//   slider.value = value;
//   textInput.value = value + unit;
// }

// // Function to set up each slider-text pair
// function setupSliderTextPair(sliderId, textInputId, unit) {
//   let slider = document.getElementById(sliderId);
//   let textInput = document.getElementById(textInputId);

//   // Initialize with the current slider value
//   updateValue(slider, textInput, slider.value, unit);

//   // Event listener for the slider input
//   slider.addEventListener('input', function () {
//     updateValue(slider, textInput, this.value, unit);
//   });

//   // Event listener for the text input
//   textInput.addEventListener('input', function () {
//     let value = parseInt(this.value, 10);
//     if (isNaN(value)) {
//       value = 0; // Default to 0 if the value is not a number
//     }
//     value = Math.max(0, Math.min(value, 100)); // Enforce the range between 0 and 100
//     updateValue(slider, textInput, value, unit);
//   });
// }

// // Call this function for each slider-text input pair
// setupSliderTextPair('harm', 'harmValue', '%');
// setupSliderTextPair('varm', 'varmValue', '%');
// setupSliderTextPair('hben', 'hbenValue', '%');
// setupSliderTextPair('vben', 'vbenValue', '%');
// setupSliderTextPair('hhand', 'hhandValue', '%');
// setupSliderTextPair('vhand', 'vhandValue', '%');
// setupSliderTextPair('gåförmåga', 'gåförmågaValue', 'm');
// setupSliderTextPair('längd', 'längdValue', 'cm');
// setupSliderTextPair('vikt', 'viktValue', 'kg');


//   // Repeat for other slider-text input pairs with their respective IDs
// });

document.addEventListener('DOMContentLoaded', (event) => {
  // Function to update the slider and the text input to have the same value
  function updateValue(slider, textInput, value, unit = '%') {
    // Check if the value is greater than or equal to 250
    if (value >= 251) {
      textInput.value = '250m+';
    } else {
      textInput.value = value + unit;
    }
    slider.value = value;
  }

  // Function to set up each slider-text pair
  function setupSliderTextPair(sliderId, textInputId, unit) {
    let slider = document.getElementById(sliderId);
    let textInput = document.getElementById(textInputId);

    // Initialize with the current slider value
    updateValue(slider, textInput, slider.value, unit);

    // Event listener for the slider input
    slider.addEventListener('input', function () {
      updateValue(slider, textInput, this.value, unit);
    });

    // Event listener for the text input
    textInput.addEventListener('input', function () {
      let value = parseInt(this.value, 10);
      if (isNaN(value)) {
        value = 0; // Default to 0 if the value is not a number
      }
      value = Math.max(0, Math.min(value, 100)); // Enforce the range between 0 and 100
      updateValue(slider, textInput, value, unit);
    });
  }

  // Call this function for each slider-text input pair
  setupSliderTextPair('harm', 'harmValue', '%');
  setupSliderTextPair('varm', 'varmValue', '%');
  setupSliderTextPair('hben', 'hbenValue', '%');
  setupSliderTextPair('vben', 'vbenValue', '%');
  setupSliderTextPair('hhand', 'hhandValue', '%');
  setupSliderTextPair('vhand', 'vhandValue', '%');
  setupSliderTextPair('gåförmåga', 'gåförmågaValue', 'm');
  setupSliderTextPair('längd', 'längdValue', 'cm');
  setupSliderTextPair('vikt', 'viktValue', 'kg');
});


// <!-----------------------------SLUT DEL 1---------------------------->

// <!-----------------------------START DEL 2 (HJÄLPMEDEL) ---------------------------->

// document.querySelectorAll('.img_cont_hjälpmedel').forEach((item) => {
//   item.addEventListener('click', function (event) {
//     event.stopPropagation(); // Stoppar händelsen från att bubbla uppåt i DOM-trädet
//     this.classList.toggle('marked'); // Toggla klassen 'marked' på klickat element
//   });
// });

/* document
  .querySelectorAll('.img_cont_hjälpmedel, .img_cont_fordon')
  .forEach((item) => {
    item.addEventListener('click', function (event) {
      event.stopPropagation(); // Stoppar händelsen från att bubbla uppåt i DOM-trädet
      this.classList.toggle('marked'); // Toggla klassen 'marked' på klickat element
    });
  }); */

  document.querySelectorAll('.img_cont_hjälpmedel, .img_cont_fordon').forEach((item) => {
    item.addEventListener('click', function(event) {
        event.stopPropagation(); // Stoppa händelsen från att bubbla uppåt i DOM-trädet
        this.classList.toggle('marked'); // Toggla klassen 'marked' på klickat element

        // Hitta det dolda inputfältet för detta hjälpmedel
        var hiddenInput = this.querySelector('input[type="hidden"]');

        // Uppdatera värdet på det dolda inputfältet baserat på om hjälpmedlet är markerat eller inte
        hiddenInput.value = this.classList.contains('marked') ? '1' : '0';
    });
});


// ------------TEST
// document.querySelectorAll('.img_cont_hjälpmedel').forEach((item) => {
//   item.addEventListener('click', function (event) {
//     event.stopPropagation(); // Förhindra eventet från att bubbla uppåt i DOM-trädet

//     const section = document.querySelector('.hjälpmedel_med_i_fordon');
//     const targetId = this.dataset.target; // Hämta data-target attributet
//     const checkbox = document.getElementById(targetId);

//     if (checkbox) {
//       // Uppdatera kryssrutan baserat på om bilden är markerad eller inte
//       checkbox.checked = this.classList.contains('marked');
      
//       // Visa eller dölj kryssrutan baserat på om bilden är markerad eller inte
//       checkbox.parentElement.style.display = this.classList.contains('marked') ? 'grid' : 'none';
//     }

//     // Uppdatera värdet på det dolda inputfältet baserat på om bilden är markerad eller inte
//     var hiddenInput = this.querySelector('input[type="hidden"]');
//     hiddenInput.value = this.classList.contains('marked') ? '1' : '0';

//     // Kontrollera om någon bild är markerad efter uppdateringen
//     const anyChecked = Array.from(document.querySelectorAll('.img_cont_hjälpmedel.marked')).length > 0;

//     // Visa eller dölj sektionen baserat på om någon bild är markerad
//     section.style.display = anyChecked ? 'grid' : 'none';
//   });
// });
document.querySelectorAll('.img_cont_hjälpmedel').forEach((item) => {
  item.addEventListener('click', function (event) {
    event.stopPropagation(); // Förhindra eventet från att bubbla uppåt i DOM-trädet

    const section = document.querySelector('.hjälpmedel_med_i_fordon');
    const targetId = this.dataset.target; // Hämta data-target attributet
    const checkbox = document.getElementById(targetId);

    if (checkbox) {
      // Uppdatera kryssrutan baserat på om bilden är markerad eller inte
      checkbox.checked = this.classList.contains('marked');
      
      // Visa eller dölj kryssrutan baserat på om bilden är markerad eller inte
      checkbox.parentElement.style.display = this.classList.contains('marked') ? 'grid' : 'none';
    }

    // Uppdatera värdet på det dolda inputfältet baserat på om bilden är markerad eller inte
    var hiddenInput = this.querySelector('input[type="hidden"]');
    hiddenInput.value = this.classList.contains('marked') ? '1' : '0';

    // Kontrollera om någon bild är markerad efter uppdateringen
    const anyChecked = Array.from(document.querySelectorAll('.img_cont_hjälpmedel.marked')).length > 0;

    // Visa eller dölj sektionen baserat på om någon bild är markerad
    section.style.display = anyChecked ? 'grid' : 'none';

    // Visa eller dölj rubriken baserat på om någon bild är markerad
    const rubrikHjälpmedelFordon = document.querySelector('.rubrikHjälpmedelFordon');
    rubrikHjälpmedelFordon.style.display = anyChecked ? 'block' : 'none';
  });
});



// ---------TEST 2
// document.querySelectorAll('.img_cont').forEach(item => {
//   item.addEventListener('click', function(event) {
//     event.stopPropagation(); // Förhindrar eventet från att bubbla uppåt i DOM-trädet

//     // Hämta ID:t för det mål-container baserat på data-target-attribute
//     const targetId = this.getAttribute('data-target');
//     const targetContainer = document.getElementById(targetId);

//     // Kontrollera alla checkbox_containers och dölj dem
//     document.querySelectorAll('.checkbox_container').forEach(container => {
//       if (container.id === targetId) {
//         // Om vi hittar matchande container, växla dess synlighet
//         container.style.display = container.style.display === 'block' ? 'none' : 'block';
//       } else {
//         // Dölj alla andra containers
//         container.style.display = 'none';
//       }
//     });
//   });
// });

// <!-----------------------------SLUT DEL 2 (HJÄLPMEDEL)---------------------------->

// <!-----------------------------START DEL 3---------------------------->
// var yesCheckbox = document.getElementById('choice_yes');
// var q1_yesDiv = document.querySelector('.Q1_yes');
// var if_yes = document.querySelector('.if_yes');
// var cont_fordon = document.querySelector('.cont_fordon');
// var noCheckbox = document.getElementById('choice_no');
// var q1_noDiv = document.querySelector('.Q1_no');
// var if_no = document.querySelector('.if_no');
// var fordon_textfield = document.querySelector('.fordon_textfield');

// // Lyssna på ändringar i Ja-kryssrutan
// yesCheckbox.addEventListener('change', function () {
//   if (yesCheckbox.checked) {
//     // Om användaren klickar på "Ja", visa Q1-diven
//     fordon_textfield.style.display ='block';
//     q1_yesDiv.style.display = 'block';
//     if_yes.style.display = 'block';
//     cont_fordon.style.display = 'grid';
//     q1_noDiv.style.display = 'none';
//     if_no.style.display = 'none';
//   } else {
//     // Annars dölj Q1-diven
//     q1_yesDiv.style.display = 'none';
//     if_no.style.display = 'none';
//     cont_fordon.style.display = 'none';
//   }
// });
// // Lyssna på ändringar i Ja-kryssrutan
// noCheckbox.addEventListener('change', function () {
//   if (noCheckbox.checked) {
//     // Om användaren klickar på "Ja", visa Q1-diven
//     fordon_textfield.style.display ='block';
//     q1_noDiv.style.display = 'block';
//     if_no.style.display = 'block';
//     cont_fordon.style.display = 'grid';
//     q1_yesDiv.style.display = 'none';
//     if_yes.style.display = 'none';
//   } else {
//     // Annars dölj Q1-diven
//     q1_noDiv.style.display = 'none';
//     if_no.style.display = 'none';
//     cont_fordon.style.display = 'none';
//   }
// });

// document.addEventListener('DOMContentLoaded', function () {
//   var yesCheckbox = document.getElementById('choice_yes');
//   var noCheckbox = document.getElementById('choice_no');

//   function clearSelections(selector) {
//     document.querySelectorAll(selector).forEach(function (input) {
//       input.checked = false; // Avmarkera varje radioknapp
//     });
//   }

//   yesCheckbox.addEventListener('change', function () {
//     if (yesCheckbox.checked) {
//       clearSelections('.Q1_no input[type="radio"]'); // Rensa val i "Nej"-sektionen
//     }
//   });

//   noCheckbox.addEventListener('change', function () {
//     if (noCheckbox.checked) {
//       clearSelections('.Q1_yes input[type="radio"]'); // Rensa val i "Ja"-sektionen
//     }
//   });

// });

// ------------NYA SOM FUNGERAR------------
var yesCheckbox = document.getElementById('choice_yes');
var fordon_yesDiv = document.querySelector('.fordon_yes');
var if_yes = document.querySelector('.if_yes');
var cont_fordon = document.querySelector('.cont_fordon');
var noCheckbox = document.getElementById('choice_no');
var fordon_noDiv = document.querySelector('.fordon_no');
var if_no = document.querySelector('.if_no');
var fordon_textfield = document.querySelector('.fordon_textfield');
var fordon_textfield1 = document.querySelector('.fordon_textfield1');
var bilder = document.querySelectorAll('.img_cont_fordon');

// Dölj bilderna initialt
bilder.forEach(function (bild) {
  bild.style.display = 'none';
});

// Lyssna på ändringar i Ja-kryssrutan
yesCheckbox.addEventListener('change', function () {
  if (yesCheckbox.checked) {
    // Om användaren klickar på "Ja", visa Q1-diven och bilderna
    fordon_textfield.style.display = 'block';
    fordon_textfield1.style.display = 'block';
    fordon_yesDiv.style.display = 'block';
    if_yes.style.display = 'block';
    cont_fordon.style.display = 'grid';
    fordon_noDiv.style.display = 'none';
    if_no.style.display = 'none';
    bilder.forEach(function (bild) {
      bild.style.display = 'block';
    });
  } else {
    // Annars dölj Q1-diven och bilderna
    fordon_yesDiv.style.display = 'none';
    if_no.style.display = 'none';
    cont_fordon.style.display = 'none';
    bilder.forEach(function (bild) {
      bild.style.display = 'none';
    });
  }
});

// Lyssna på ändringar i Nej-kryssrutan
noCheckbox.addEventListener('change', function () {
  if (noCheckbox.checked) {
    // Om användaren klickar på "Nej", visa Q1-diven och bilderna
    fordon_textfield.style.display = 'block';
    fordon_textfield1.style.display = 'block';
    fordon_noDiv.style.display = 'block';
    if_no.style.display = 'block';
    cont_fordon.style.display = 'grid';
    fordon_yesDiv.style.display = 'none';
    if_yes.style.display = 'none';
    bilder.forEach(function (bild) {
      bild.style.display = 'block';
    });
  } else {
    // Annars dölj Q1-diven och bilderna
    fordon_noDiv.style.display = 'none';
    if_no.style.display = 'none';
    cont_fordon.style.display = 'none';
    bilder.forEach(function (bild) {
      bild.style.display = 'none';
    });
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
      clearSelections('.fordon_no input[type="radio"]'); // Rensa val i "Nej"-sektionen
    }
  });

  noCheckbox.addEventListener('change', function () {
    if (noCheckbox.checked) {
      clearSelections('.fordon_yes input[type="radio"]'); // Rensa val i "Ja"-sektionen
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

