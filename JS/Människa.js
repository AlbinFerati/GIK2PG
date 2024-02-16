// path 10 - 17 vänster arm
// path 18 - 20 vänster ben
// path 21 - 28 höger arm
// path 29 - 31 höger ben

// När DOM-trädet har laddats, kör följande kod
document.addEventListener('DOMContentLoaded', function() {
  // Funktionen som sätter upp interaktiviteten för en del av handen
  function setupInteractivePath(pathId, relatedPaths) {
      var interactivePath = document.querySelector(pathId);
      var bodyPartClickedOnce = false;

      interactivePath.addEventListener('click', function() {
          // Om tummen är grå och detta är första klicket, gör hela armen svart
          if (this.style.fill === 'grey' && !bodyPartClickedOnce) {
              this.style.fill = '';
              relatedPaths.forEach(function(path) {
                  document.querySelector(path).style.fill = '';
              });
              bodyPartClickedOnce = true;
          } else { // Annars, växla färgen på tummen
              this.style.fill = this.style.fill === 'grey' ? '' : 'grey';
              // Återställ variabeln för att tillåta återgång av hela armen till grått efter att ha varit svart
              bodyPartClickedOnce = false;
          }
      });
  }

  // Sätt upp interaktiviteten för vänster hand
  setupInteractivePath('#path10', ['#path15', '#path16', '#path17']); //TUMME
  setupInteractivePath('#path11', ['#path15', '#path16', '#path17']); //PEKFINGER
  setupInteractivePath('#path12', ['#path15', '#path16', '#path17']); //LÅNGFINGER
  setupInteractivePath('#path13', ['#path15', '#path16', '#path17']); //RINGFINGER
  setupInteractivePath('#path14', ['#path15', '#path16', '#path17']); //LILLFINGER

  // Sätt upp interaktiviteten för vänster ben
  setupInteractivePath('#path18', ['#path19', '#path20']); //FOT
  // setupInteractivePath('#path19', ['#path20']);

  // Sätt upp interaktiviteten för höger hand
  setupInteractivePath('#path21', ['#path26', '#path27', '#path28']); //TUMME
  setupInteractivePath('#path22', ['#path26', '#path27', '#path28']); //PEKFINGER
  setupInteractivePath('#path23', ['#path26', '#path27', '#path28']); //LÅNGFINGER
  setupInteractivePath('#path24', ['#path26', '#path27', '#path28']); //RINGFINGER
  setupInteractivePath('#path25', ['#path26', '#path27', '#path28']); //LILLFINGER

  // Sätt upp interaktiviteten för höger ben
  setupInteractivePath('#path29', ['#path30', '#path31']); //FOT

});
// //------------------------------Kortare version utav alla kroppsdelar----------------------------
document.addEventListener('DOMContentLoaded', function() {
  // Lägg till klick-eventlyssnare till "path15"
  document.getElementById('path15').addEventListener('click', function() {
    toggleColors(['path10', 'path11', 'path12', 'path13', 'path14', 'path15']);
  });

  // Lägg till klick-eventlyssnare till "path16"
  document.getElementById('path16').addEventListener('click', function() {
    toggleColors(['path10', 'path11', 'path12', 'path13', 'path14', 'path15', 'path16']);
  });

  // Lägg till klick-eventlyssnare till "path17"
  document.getElementById('path17').addEventListener('click', function() {
    toggleColors(['path10', 'path11', 'path12', 'path13', 'path14', 'path15', 'path16', 'path17']);
  });

  // Lägg till klick-eventlyssnare till "path19"
  document.getElementById('path19').addEventListener('click', function() {
    toggleColors(['path18', 'path19']);
  });

  // Lägg till klick-eventlyssnare till "path20"
  document.getElementById('path20').addEventListener('click', function() {
    toggleColors(['path18', 'path19', 'path20']);
  });

  // Lägg till klick-eventlyssnare till "path26"
  document.getElementById('path26').addEventListener('click', function() {
    toggleColors(['path21', 'path22', 'path23', 'path24', 'path25', 'path26']);
  });

  // Lägg till klick-eventlyssnare till "path27"
  document.getElementById('path27').addEventListener('click', function() {
    toggleColors(['path21', 'path22', 'path23', 'path24', 'path25', 'path26', 'path27']);
  });

 // Lägg till klick-eventlyssnare till "path28"
 document.getElementById('path28').addEventListener('click', function() {
  toggleColors(['path21', 'path22', 'path23', 'path24', 'path25', 'path26', 'path27', 'path28']);
});

 // Lägg till klick-eventlyssnare till "path29"
 document.getElementById('path30').addEventListener('click', function() {
  toggleColors(['path29', 'path30']);
});

 // Lägg till klick-eventlyssnare till "path30"
 document.getElementById('path31').addEventListener('click', function() {
  toggleColors(['path29', 'path30', 'path31']);
});

  // Funktion för att byta färg på angivna paths
  function toggleColors(pathsToChange) {
    // Kontrollera om någon av paths redan är gråa (vi kan anta att alla kommer att vara gråa samtidigt)
    var alreadyGrey = document.getElementById(pathsToChange[0]).style.fill === 'grey';

    // Växla färgen på alla definierade paths till grå eller tillbaka till svart
    pathsToChange.forEach(function(pathId) {
      var pathElement = document.getElementById(pathId);
      if (pathElement) {
        pathElement.style.fill = alreadyGrey ? '' : 'grey'; // Om den är grå, gör svart, annars gör grå
      }
    });
    this.style.fill = alreadyGrey ? '' : 'grey';
  }
});

// -----------------------------------SILUETT TILL SLIDERS KOD 


// HÖGER ARM 
document.addEventListener('DOMContentLoaded', function() {
  // Definiera paths för höger arm
  var rightArmPaths = ['path27', 'path28'];

  // Funktion för att kontrollera färg och sätta slider värde
  function adjustSliderBasedOnColor() {
      var slider = document.getElementById('harm');
      var textInput = document.getElementById('harmValue');
      var pathElement = this; // 'this' refererar till det element som klickades på

      // Kontrollera om elementets färg är svart
      var fillColor = getComputedStyle(pathElement).fill;
      if (fillColor === 'rgb(0, 0, 0)') { // Svart i RGB
          slider.value = 100;
          textInput.value = '100%';
      } else {
          slider.value = 0;
          textInput.value = '0%';
      }
  }

  // Lägg till eventlyssnare till varje path för höger arm
  rightArmPaths.forEach(function(pathId) {
      var pathElement = document.getElementById(pathId);
      if (pathElement) {
          pathElement.addEventListener('click', adjustSliderBasedOnColor);
      }
  });
});

// HÖGER HAND
document.addEventListener('DOMContentLoaded', function() {
  // Definiera paths för höger arm
  var rightArmPaths = ['path26', 'path27', 'path28'];

  // Funktion för att kontrollera färg och sätta slider värde
  function adjustSliderBasedOnColor() {
      var slider = document.getElementById('hhand');
      var textInput = document.getElementById('hhandValue');
      var pathElement = this; // 'this' refererar till det element som klickades på

      // Kontrollera om elementets färg är svart
      var fillColor = getComputedStyle(pathElement).fill;
      if (fillColor === 'rgb(0, 0, 0)') { // Svart i RGB
          slider.value = 100;
          textInput.value = '100%';
      } else {
          slider.value = 0;
          textInput.value = '0%';
      }
  }

  // Lägg till eventlyssnare till varje path för höger arm
  rightArmPaths.forEach(function(pathId) {
      var pathElement = document.getElementById(pathId);
      if (pathElement) {
          pathElement.addEventListener('click', adjustSliderBasedOnColor);
      }
  });
});

// HÖGER BEN
document.addEventListener('DOMContentLoaded', function() {
  // Definiera paths för höger arm
  var rightArmPaths = ['path30', 'path31'];

  // Funktion för att kontrollera färg och sätta slider värde
  function adjustSliderBasedOnColor() {
      var slider = document.getElementById('hben');
      var textInput = document.getElementById('hbenValue');
      var pathElement = this; // 'this' refererar till det element som klickades på

      // Kontrollera om elementets färg är svart
      var fillColor = getComputedStyle(pathElement).fill;
      if (fillColor === 'rgb(0, 0, 0)') { // Svart i RGB
          slider.value = 100;
          textInput.value = '100%';
      } else {
          slider.value = 0;
          textInput.value = '0%';
      }
  }

  // Lägg till eventlyssnare till varje path för höger arm
  rightArmPaths.forEach(function(pathId) {
      var pathElement = document.getElementById(pathId);
      if (pathElement) {
          pathElement.addEventListener('click', adjustSliderBasedOnColor);
      }
  });
});


// VÄNSTER ARM 
document.addEventListener('DOMContentLoaded', function() {
  // Definiera paths för höger arm
  var rightArmPaths = ['path16', 'path17'];

  // Funktion för att kontrollera färg och sätta slider värde
  function adjustSliderBasedOnColor() {
      var slider = document.getElementById('varm');
      var textInput = document.getElementById('varmValue');
      var pathElement = this; // 'this' refererar till det element som klickades på

      // Kontrollera om elementets färg är svart
      var fillColor = getComputedStyle(pathElement).fill;
      if (fillColor === 'rgb(0, 0, 0)') { // Svart i RGB
          slider.value = 100;
          textInput.value = '100%';
      } else {
          slider.value = 0;
          textInput.value = '0%';
      }
  }

  // Lägg till eventlyssnare till varje path för höger arm
  rightArmPaths.forEach(function(pathId) {
      var pathElement = document.getElementById(pathId);
      if (pathElement) {
          pathElement.addEventListener('click', adjustSliderBasedOnColor);
      }
  });
});

// VÄNSTER HAND
document.addEventListener('DOMContentLoaded', function() {
  // Definiera paths för höger arm
  var rightArmPaths = ['path15', 'path16', 'path17'];

  // Funktion för att kontrollera färg och sätta slider värde
  function adjustSliderBasedOnColor() {
      var slider = document.getElementById('vhand');
      var textInput = document.getElementById('vhandValue');
      var pathElement = this; // 'this' refererar till det element som klickades på

      // Kontrollera om elementets färg är svart
      var fillColor = getComputedStyle(pathElement).fill;
      if (fillColor === 'rgb(0, 0, 0)') { // Svart i RGB
          slider.value = 100;
          textInput.value = '100%';
      } else {
          slider.value = 0;
          textInput.value = '0%';
      }
  }

  // Lägg till eventlyssnare till varje path för höger arm
  rightArmPaths.forEach(function(pathId) {
      var pathElement = document.getElementById(pathId);
      if (pathElement) {
          pathElement.addEventListener('click', adjustSliderBasedOnColor);
      }
  });
});

// VÄNSTER BEN
document.addEventListener('DOMContentLoaded', function() {
  // Definiera paths för höger arm
  var rightArmPaths = ['path19', 'path20'];

  // Funktion för att kontrollera färg och sätta slider värde
  function adjustSliderBasedOnColor() {
      var slider = document.getElementById('vben');
      var textInput = document.getElementById('vbenValue');
      var pathElement = this; // 'this' refererar till det element som klickades på

      // Kontrollera om elementets färg är svart
      var fillColor = getComputedStyle(pathElement).fill;
      if (fillColor === 'rgb(0, 0, 0)') { // Svart i RGB
          slider.value = 100;
          textInput.value = '100%';
      } else {
          slider.value = 0;
          textInput.value = '0%';
      }
  }

  // Lägg till eventlyssnare till varje path för höger arm
  rightArmPaths.forEach(function(pathId) {
      var pathElement = document.getElementById(pathId);
      if (pathElement) {
          pathElement.addEventListener('click', adjustSliderBasedOnColor);
      }
  });
});