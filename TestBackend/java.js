var firstName = document.getElementById('fnamn').value;
var lastName = document.getElementById('enamn').value;
var phoneNumber = document.getElementById('telnr').value;
var email = document.getElementById('mail').value;

var rightArmStrength = document.getElementById('harm').value;
var leftArmStrength = document.getElementById('varm').value;
var rightLegStrength = document.getElementById('hben').value;
var leftLegStrength = document.getElementById('vben').value;
var rightHandStrength = document.getElementById('hhand').value;
var leftHandStrength = document.getElementById('vhand').value;

var markedHelpMed = [];
document.querySelectorAll('.grid-hjälpmedel .marked').forEach(function(item) {
    markedHelpMed.push(item.textContent); // Exempelvis hämta textinnehållet för varje markerat hjälpmedel
});

var otherHelpMed = document.getElementById('annat_hjälpmedel').value;

var checkedHelpMedInVehicle = {
    kryckor: document.getElementById('kryckor_till_fordon').checked,
    rullator: document.getElementById('rullator_till_fordon').checked,
    rullstol: document.getElementById('rullstol_till_fordon').checked,
    hjälpmotor: document.getElementById('hjälpmotor_till_fordon').checked,
    elmoped: document.getElementById('elmoped_till_fordon').checked,
    permobil: document.getElementById('permobil_till_fordon').checked,
};

var hasCustomCar = document.getElementById('choice_yes').checked ? 'Ja' : 'Nej';
var userRoleInCar = document.querySelector('.fordon_yes input[type="radio"]:checked')?.value ||
                    document.querySelector('.fordon_no input[type="radio"]:checked')?.value || '';

                    var markedVehicles = [];
document.querySelectorAll('.grid-fordon .marked').forEach(function(item) {
    markedVehicles.push(item.textContent); // Exempelvis hämta textinnehållet för varje markerat fordon
});

var otherVehicle = document.getElementById('annat_fordon').value;
var dontKnowVehicle = document.getElementById('vet_ej').checked;
