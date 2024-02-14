// path 10 - 17 vänster arm
// path 18 - 20 vänster ben
// path 21 - 28 höger arm
// path 29 - 31 höger ben

document.addEventListener('DOMContentLoaded', function() {
  var interactivePath = document.querySelector('#path10');

  interactivePath.addEventListener('click', function() {
    // Kontrollera om den aktuella färgen är grå, och växla den
    this.style.fill = this.style.fill === 'grey' ? '' : 'grey';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var interactivePath = document.querySelector('#path11');

  interactivePath.addEventListener('click', function() {
    // Kontrollera om den aktuella färgen är grå, och växla den
    this.style.fill = this.style.fill === 'grey' ? '' : 'grey';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var interactivePath = document.querySelector('#path12');

  interactivePath.addEventListener('click', function() {
    // Kontrollera om den aktuella färgen är grå, och växla den
    this.style.fill = this.style.fill === 'grey' ? '' : 'grey';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var interactivePath = document.querySelector('#path13');

  interactivePath.addEventListener('click', function() {
    // Kontrollera om den aktuella färgen är grå, och växla den
    this.style.fill = this.style.fill === 'grey' ? '' : 'grey';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var interactivePath = document.querySelector('#path14');

  interactivePath.addEventListener('click', function() {
    // Kontrollera om den aktuella färgen är grå, och växla den
    this.style.fill = this.style.fill === 'grey' ? '' : 'grey';
  });
});


document.addEventListener('DOMContentLoaded', function() {
  var interactivePath = document.querySelector('#path15');

  interactivePath.addEventListener('click', function() {
    // Kontrollera om den aktuella färgen är grå, och växla den
    this.style.fill = this.style.fill === 'grey' ? '' : 'grey';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Lägg till klick-eventlyssnare till "path15" - vänster hand och fingrar
  document.getElementById('path15').addEventListener('click', function() {
    // Definiera vilka paths som ska ändras när "path15" klickas
    var pathsToChange = ['path10', 'path11', 'path12', 'path13', 'path14'];

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
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Lägg till klick-eventlyssnare till "path16" - vänster underarm och nedåt
  document.getElementById('path16').addEventListener('click', function() {
    // Definiera vilka paths som ska ändras när "path16" klickas
    var pathsToChange = ['path15', 'path10', 'path11', 'path12', 'path13', 'path14'];

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
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Lägg till klick-eventlyssnare till "path17" - vänster överarm och nedåt
  document.getElementById('path17').addEventListener('click', function() {
    // Definiera vilka paths som ska ändras när "path17" klickas
    var pathsToChange = ['path16', 'path15', 'path10', 'path11', 'path12', 'path13', 'path14'];

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
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var interactivePath = document.querySelector('#path18');

  interactivePath.addEventListener('click', function() {
    // Kontrollera om den aktuella färgen är grå, och växla den
    this.style.fill = this.style.fill === 'grey' ? '' : 'grey';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Lägg till klick-eventlyssnare till "path19" - vänster underben och nedåt
  document.getElementById('path19').addEventListener('click', function() {
    // Definiera vilka paths som ska ändras när "path19" klickas
    var pathsToChange = ['path18'];

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
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Lägg till klick-eventlyssnare till "path20" - vänster överben och nedåt
  document.getElementById('path20').addEventListener('click', function() {
    // Definiera vilka paths som ska ändras när "path20" klickas
    var pathsToChange = ['path18', 'path19'];

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
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var interactivePath = document.querySelector('#path21');

  interactivePath.addEventListener('click', function() {
    // Kontrollera om den aktuella färgen är grå, och växla den
    this.style.fill = this.style.fill === 'grey' ? '' : 'grey';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var interactivePath = document.querySelector('#path22');

  interactivePath.addEventListener('click', function() {
    // Kontrollera om den aktuella färgen är grå, och växla den
    this.style.fill = this.style.fill === 'grey' ? '' : 'grey';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var interactivePath = document.querySelector('#path23');

  interactivePath.addEventListener('click', function() {
    // Kontrollera om den aktuella färgen är grå, och växla den
    this.style.fill = this.style.fill === 'grey' ? '' : 'grey';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var interactivePath = document.querySelector('#path24');

  interactivePath.addEventListener('click', function() {
    // Kontrollera om den aktuella färgen är grå, och växla den
    this.style.fill = this.style.fill === 'grey' ? '' : 'grey';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var interactivePath = document.querySelector('#path25');

  interactivePath.addEventListener('click', function() {
    // Kontrollera om den aktuella färgen är grå, och växla den
    this.style.fill = this.style.fill === 'grey' ? '' : 'grey';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Lägg till klick-eventlyssnare till "path26" - höger hand och nedåt
  document.getElementById('path26').addEventListener('click', function() {
    // Definiera vilka paths som ska ändras när "path26" klickas
    var pathsToChange = ['path21', 'path22', 'path23', 'path24', 'path25'];

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
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Lägg till klick-eventlyssnare till "path27" - höger underarm och nedåt
  document.getElementById('path27').addEventListener('click', function() {
    // Definiera vilka paths som ska ändras när "path27" klickas
    var pathsToChange = ['path21', 'path22', 'path23', 'path24', 'path25', 'path26'];

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
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Lägg till klick-eventlyssnare till "path28" - höger överarm och nedåt
  document.getElementById('path28').addEventListener('click', function() {
    // Definiera vilka paths som ska ändras när "path28" klickas
    var pathsToChange = ['path21', 'path22', 'path23', 'path24', 'path25', 'path26', 'path27'];

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
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var interactivePath = document.querySelector('#path29');

  interactivePath.addEventListener('click', function() {
    // Kontrollera om den aktuella färgen är grå, och växla den
    this.style.fill = this.style.fill === 'grey' ? '' : 'grey';
  });
});


document.addEventListener('DOMContentLoaded', function() {
  // Lägg till klick-eventlyssnare till "path30" - höger underben och nedåt
  document.getElementById('path30').addEventListener('click', function() {
    // Definiera vilka paths som ska ändras när "path28" klickas
    var pathsToChange = ['path29'];

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
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Lägg till klick-eventlyssnare till "path31" - höger överarm och nedåt
  document.getElementById('path31').addEventListener('click', function() {
    // Definiera vilka paths som ska ändras när "path31" klickas
    var pathsToChange = ['path29', 'path30'];

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
  });
});

// SILUETT TILL SLIDERS KOD 


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