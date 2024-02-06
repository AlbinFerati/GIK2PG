document.addEventListener('DOMContentLoaded', function () {
  var interactivePath = document.querySelector('#path2');

  interactivePath.addEventListener('click', function () {
    // Kontrollera om den aktuella färgen är grå, och växla den
    this.style.fill = this.style.fill === 'grey' ? '' : 'grey';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var interactivePath = document.querySelector('#path3');

  interactivePath.addEventListener('click', function () {
    // Kontrollera om den aktuella färgen är grå, och växla den
    this.style.fill = this.style.fill === 'grey' ? '' : 'grey';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var interactivePath = document.querySelector('#path4');

  interactivePath.addEventListener('click', function () {
    // Kontrollera om den aktuella färgen är grå, och växla den
    this.style.fill = this.style.fill === 'grey' ? '' : 'grey';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var interactivePath = document.querySelector('#path5');

  interactivePath.addEventListener('click', function () {
    // Kontrollera om den aktuella färgen är grå, och växla den
    this.style.fill = this.style.fill === 'grey' ? '' : 'grey';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var interactivePath = document.querySelector('#path6');

  interactivePath.addEventListener('click', function () {
    // Kontrollera om den aktuella färgen är grå, och växla den
    this.style.fill = this.style.fill === 'grey' ? '' : 'grey';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var interactivePath = document.querySelector('#path11');

  interactivePath.addEventListener('click', function () {
    // Kontrollera om den aktuella färgen är grå, och växla den
    this.style.fill = this.style.fill === 'grey' ? '' : 'grey';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var interactivePath = document.querySelector('#path12');

  interactivePath.addEventListener('click', function () {
    // Kontrollera om den aktuella färgen är grå, och växla den
    this.style.fill = this.style.fill === 'grey' ? '' : 'grey';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var interactivePath = document.querySelector('#path13');

  interactivePath.addEventListener('click', function () {
    // Kontrollera om den aktuella färgen är grå, och växla den
    this.style.fill = this.style.fill === 'grey' ? '' : 'grey';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var interactivePath = document.querySelector('#path14');

  interactivePath.addEventListener('click', function () {
    // Kontrollera om den aktuella färgen är grå, och växla den
    this.style.fill = this.style.fill === 'grey' ? '' : 'grey';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var interactivePath = document.querySelector('#path15');

  interactivePath.addEventListener('click', function () {
    // Kontrollera om den aktuella färgen är grå, och växla den
    this.style.fill = this.style.fill === 'grey' ? '' : 'grey';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var interactivePath = document.querySelector('#path19');

  interactivePath.addEventListener('click', function () {
    // Kontrollera om den aktuella färgen är grå, och växla den
    this.style.fill = this.style.fill === 'grey' ? '' : 'grey';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var interactivePath = document.querySelector('#path28');

  interactivePath.addEventListener('click', function () {
    // Kontrollera om den aktuella färgen är grå, och växla den
    this.style.fill = this.style.fill === 'grey' ? '' : 'grey';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Lägg till klick-eventlyssnare till "path9"
  document.getElementById('path9').addEventListener('click', function () {
    // Definiera vilka paths som ska ändras när "path9" klickas
    var pathsToChange = [
      'path8',
      'path7',
      'path6',
      'path5',
      'path4',
      'path3',
      'path2',
    ];

    // Kontrollera om någon av paths redan är gråa (vi kan anta att alla kommer att vara gråa samtidigt)
    var alreadyGrey =
      document.getElementById(pathsToChange[0]).style.fill === 'grey';

    // Växla färgen på alla definierade paths till grå eller tillbaka till svart
    pathsToChange.forEach(function (pathId) {
      var pathElement = document.getElementById(pathId);
      if (pathElement) {
        pathElement.style.fill = alreadyGrey ? '' : 'grey'; // Om den är grå, gör svart, annars gör grå
      }
    });

    // Ändra även färgen på "path9"
    this.style.fill = alreadyGrey ? '' : 'grey';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Lägg till klick-eventlyssnare till "path8"
  document.getElementById('path8').addEventListener('click', function () {
    // Definiera vilka paths som ska ändras när "path9" klickas
    var pathsToChange = ['path7', 'path6', 'path5', 'path4', 'path3', 'path2'];

    // Kontrollera om någon av paths redan är gråa (vi kan anta att alla kommer att vara gråa samtidigt)
    var alreadyGrey =
      document.getElementById(pathsToChange[0]).style.fill === 'grey';

    // Växla färgen på alla definierade paths till grå eller tillbaka till svart
    pathsToChange.forEach(function (pathId) {
      var pathElement = document.getElementById(pathId);
      if (pathElement) {
        pathElement.style.fill = alreadyGrey ? '' : 'grey'; // Om den är grå, gör svart, annars gör grå
      }
    });

    // Ändra även färgen på "path9"
    this.style.fill = alreadyGrey ? '' : 'grey';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Lägg till klick-eventlyssnare till "path7"
  document.getElementById('path7').addEventListener('click', function () {
    // Definiera vilka paths som ska ändras när "path9" klickas
    var pathsToChange = ['path6', 'path5', 'path4', 'path3', 'path2'];

    // Kontrollera om någon av paths redan är gråa (vi kan anta att alla kommer att vara gråa samtidigt)
    var alreadyGrey =
      document.getElementById(pathsToChange[0]).style.fill === 'grey';

    // Växla färgen på alla definierade paths till grå eller tillbaka till svart
    pathsToChange.forEach(function (pathId) {
      var pathElement = document.getElementById(pathId);
      if (pathElement) {
        pathElement.style.fill = alreadyGrey ? '' : 'grey'; // Om den är grå, gör svart, annars gör grå
      }
    });

    // Ändra även färgen på "path9"
    this.style.fill = alreadyGrey ? '' : 'grey';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Lägg till klick-eventlyssnare till "path18"
  document.getElementById('path18').addEventListener('click', function () {
    // Definiera vilka paths som ska ändras när "path9" klickas
    var pathsToChange = [
      'path17',
      'path16',
      'path15',
      'path14',
      'path13',
      'path12',
      'path11',
    ];

    // Kontrollera om någon av paths redan är gråa (vi kan anta att alla kommer att vara gråa samtidigt)
    var alreadyGrey =
      document.getElementById(pathsToChange[0]).style.fill === 'grey';

    // Växla färgen på alla definierade paths till grå eller tillbaka till svart
    pathsToChange.forEach(function (pathId) {
      var pathElement = document.getElementById(pathId);
      if (pathElement) {
        pathElement.style.fill = alreadyGrey ? '' : 'grey'; // Om den är grå, gör svart, annars gör grå
      }
    });

    // Ändra även färgen på "path9"
    this.style.fill = alreadyGrey ? '' : 'grey';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Lägg till klick-eventlyssnare till "path17"
  document.getElementById('path17').addEventListener('click', function () {
    // Definiera vilka paths som ska ändras när "path9" klickas
    var pathsToChange = [
      'path16',
      'path15',
      'path14',
      'path13',
      'path12',
      'path11',
    ];

    // Kontrollera om någon av paths redan är gråa (vi kan anta att alla kommer att vara gråa samtidigt)
    var alreadyGrey =
      document.getElementById(pathsToChange[0]).style.fill === 'grey';

    // Växla färgen på alla definierade paths till grå eller tillbaka till svart
    pathsToChange.forEach(function (pathId) {
      var pathElement = document.getElementById(pathId);
      if (pathElement) {
        pathElement.style.fill = alreadyGrey ? '' : 'grey'; // Om den är grå, gör svart, annars gör grå
      }
    });

    // Ändra även färgen på "path9"
    this.style.fill = alreadyGrey ? '' : 'grey';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Lägg till klick-eventlyssnare till "path16"
  document.getElementById('path16').addEventListener('click', function () {
    // Definiera vilka paths som ska ändras när "path9" klickas
    var pathsToChange = ['path15', 'path14', 'path13', 'path12', 'path11'];

    // Kontrollera om någon av paths redan är gråa (vi kan anta att alla kommer att vara gråa samtidigt)
    var alreadyGrey =
      document.getElementById(pathsToChange[0]).style.fill === 'grey';

    // Växla färgen på alla definierade paths till grå eller tillbaka till svart
    pathsToChange.forEach(function (pathId) {
      var pathElement = document.getElementById(pathId);
      if (pathElement) {
        pathElement.style.fill = alreadyGrey ? '' : 'grey'; // Om den är grå, gör svart, annars gör grå
      }
    });

    // Ändra även färgen på "path9"
    this.style.fill = alreadyGrey ? '' : 'grey';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Lägg till klick-eventlyssnare till "path23"
  document.getElementById('path23').addEventListener('click', function () {
    // Definiera vilka paths som ska ändras när "path9" klickas
    var pathsToChange = ['path22', 'path21', 'path20', 'path19'];

    // Kontrollera om någon av paths redan är gråa (vi kan anta att alla kommer att vara gråa samtidigt)
    var alreadyGrey =
      document.getElementById(pathsToChange[0]).style.fill === 'grey';

    // Växla färgen på alla definierade paths till grå eller tillbaka till svart
    pathsToChange.forEach(function (pathId) {
      var pathElement = document.getElementById(pathId);
      if (pathElement) {
        pathElement.style.fill = alreadyGrey ? '' : 'grey'; // Om den är grå, gör svart, annars gör grå
      }
    });

    // Ändra även färgen på "path9"
    this.style.fill = alreadyGrey ? '' : 'grey';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Lägg till klick-eventlyssnare till "path22"
  document.getElementById('path22').addEventListener('click', function () {
    // Definiera vilka paths som ska ändras när "path9" klickas
    var pathsToChange = ['path21', 'path20', 'path19'];

    // Kontrollera om någon av paths redan är gråa (vi kan anta att alla kommer att vara gråa samtidigt)
    var alreadyGrey =
      document.getElementById(pathsToChange[0]).style.fill === 'grey';

    // Växla färgen på alla definierade paths till grå eller tillbaka till svart
    pathsToChange.forEach(function (pathId) {
      var pathElement = document.getElementById(pathId);
      if (pathElement) {
        pathElement.style.fill = alreadyGrey ? '' : 'grey'; // Om den är grå, gör svart, annars gör grå
      }
    });

    // Ändra även färgen på "path9"
    this.style.fill = alreadyGrey ? '' : 'grey';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Lägg till klick-eventlyssnare till "path21"
  document.getElementById('path21').addEventListener('click', function () {
    // Definiera vilka paths som ska ändras när "path9" klickas
    var pathsToChange = ['path20', 'path19'];

    // Kontrollera om någon av paths redan är gråa (vi kan anta att alla kommer att vara gråa samtidigt)
    var alreadyGrey =
      document.getElementById(pathsToChange[0]).style.fill === 'grey';

    // Växla färgen på alla definierade paths till grå eller tillbaka till svart
    pathsToChange.forEach(function (pathId) {
      var pathElement = document.getElementById(pathId);
      if (pathElement) {
        pathElement.style.fill = alreadyGrey ? '' : 'grey'; // Om den är grå, gör svart, annars gör grå
      }
    });

    // Ändra även färgen på "path9"
    this.style.fill = alreadyGrey ? '' : 'grey';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Lägg till klick-eventlyssnare till "path20"
  document.getElementById('path20').addEventListener('click', function () {
    // Definiera vilka paths som ska ändras när "path9" klickas
    var pathsToChange = ['path19'];

    // Kontrollera om någon av paths redan är gråa (vi kan anta att alla kommer att vara gråa samtidigt)
    var alreadyGrey =
      document.getElementById(pathsToChange[0]).style.fill === 'grey';

    // Växla färgen på alla definierade paths till grå eller tillbaka till svart
    pathsToChange.forEach(function (pathId) {
      var pathElement = document.getElementById(pathId);
      if (pathElement) {
        pathElement.style.fill = alreadyGrey ? '' : 'grey'; // Om den är grå, gör svart, annars gör grå
      }
    });

    // Ändra även färgen på "path9"
    this.style.fill = alreadyGrey ? '' : 'grey';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Lägg till klick-eventlyssnare till "path24"
  document.getElementById('path24').addEventListener('click', function () {
    // Definiera vilka paths som ska ändras när "path9" klickas
    var pathsToChange = ['path25', 'path26', 'path27', 'path28'];

    // Kontrollera om någon av paths redan är gråa (vi kan anta att alla kommer att vara gråa samtidigt)
    var alreadyGrey =
      document.getElementById(pathsToChange[0]).style.fill === 'grey';

    // Växla färgen på alla definierade paths till grå eller tillbaka till svart
    pathsToChange.forEach(function (pathId) {
      var pathElement = document.getElementById(pathId);
      if (pathElement) {
        pathElement.style.fill = alreadyGrey ? '' : 'grey'; // Om den är grå, gör svart, annars gör grå
      }
    });

    // Ändra även färgen på "path9"
    this.style.fill = alreadyGrey ? '' : 'grey';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Lägg till klick-eventlyssnare till "path25"
  document.getElementById('path25').addEventListener('click', function () {
    // Definiera vilka paths som ska ändras när "path9" klickas
    var pathsToChange = ['path26', 'path27', 'path28'];

    // Kontrollera om någon av paths redan är gråa (vi kan anta att alla kommer att vara gråa samtidigt)
    var alreadyGrey =
      document.getElementById(pathsToChange[0]).style.fill === 'grey';

    // Växla färgen på alla definierade paths till grå eller tillbaka till svart
    pathsToChange.forEach(function (pathId) {
      var pathElement = document.getElementById(pathId);
      if (pathElement) {
        pathElement.style.fill = alreadyGrey ? '' : 'grey'; // Om den är grå, gör svart, annars gör grå
      }
    });

    // Ändra även färgen på "path9"
    this.style.fill = alreadyGrey ? '' : 'grey';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Lägg till klick-eventlyssnare till "path26"
  document.getElementById('path26').addEventListener('click', function () {
    // Definiera vilka paths som ska ändras när "path9" klickas
    var pathsToChange = ['path27', 'path28'];

    // Kontrollera om någon av paths redan är gråa (vi kan anta att alla kommer att vara gråa samtidigt)
    var alreadyGrey =
      document.getElementById(pathsToChange[0]).style.fill === 'grey';

    // Växla färgen på alla definierade paths till grå eller tillbaka till svart
    pathsToChange.forEach(function (pathId) {
      var pathElement = document.getElementById(pathId);
      if (pathElement) {
        pathElement.style.fill = alreadyGrey ? '' : 'grey'; // Om den är grå, gör svart, annars gör grå
      }
    });

    // Ändra även färgen på "path9"
    this.style.fill = alreadyGrey ? '' : 'grey';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Lägg till klick-eventlyssnare till "path27"
  document.getElementById('path27').addEventListener('click', function () {
    // Definiera vilka paths som ska ändras när "path9" klickas
    var pathsToChange = ['path28'];

    // Kontrollera om någon av paths redan är gråa (vi kan anta att alla kommer att vara gråa samtidigt)
    var alreadyGrey =
      document.getElementById(pathsToChange[0]).style.fill === 'grey';

    // Växla färgen på alla definierade paths till grå eller tillbaka till svart
    pathsToChange.forEach(function (pathId) {
      var pathElement = document.getElementById(pathId);
      if (pathElement) {
        pathElement.style.fill = alreadyGrey ? '' : 'grey'; // Om den är grå, gör svart, annars gör grå
      }
    });

    // Ändra även färgen på "path9"
    this.style.fill = alreadyGrey ? '' : 'grey';
  });
});
