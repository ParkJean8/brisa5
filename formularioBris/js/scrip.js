// Datos almacenados en arreglos
var countries = ["Brasil", "USA", "Mexico"];
var states = {
    Brasil: ["Río de Janeiro", "Amazonas"],
    USA: ["California", "Nueva York"],
    Mexico: ["Hidalgo", "Baja California"]
};
var cities = {
    "Río de Janeiro": ["Petrópolis", "Duque de Caxias"],
    Amazonas: ["Manaus", "Coari"],
    California: ["Los Angeles", "Merced"],
    "Nueva York": ["Kingston", "Salamanca"],
    Hidalgo: ["Tula", "Tepeji"],
    "Baja California": ["Mexicali", "Tijuana"]
};
var municipalities = {
    "Petrópolis": ["Municipio 1", "Municipio 2", "Municipio 3"],
    "Duque de Caxias": ["Municipio A", "Municipio B", "Municipio C"],
    "Manaus": ["Municipio X", "Municipio Y", "Municipio Z"],
    "Coari": ["Municipio P", "Municipio Q", "Municipio R"],
    "Los Angeles": ["Municipio I", "Municipio II", "Municipio III"],
    "Merced": ["Municipio M", "Municipio N", "Municipio O"],
    "Kingston": ["Municipio 5", "Municipio 6", "Municipio 7"],
    "Salamanca": ["Municipio D", "Municipio E", "Municipio F"],
    "Tula": ["San Marcos", "Nueva Santa Maria", "El carmen"],
    "Tepeji": ["Crucero", "Los aguacates", "Cruz Azul"],
    "Mexicali": ["Municipio 1", "Municipio 2", "Municipio 3"],
    "Tijuana": ["Municipio 1", "Municipio 2", "Municipio 3"]
};

// Función para actualizar el menú desplegable de estados
function updateStates() {
    var countrySelect = document.getElementById("country");
    var stateSelect = document.getElementById("state");
    var citySelect = document.getElementById("city");
    var municipalitySelect = document.getElementById("municipality");

    // Limpiar y deshabilitar el menú de estados, ciudades y municipios
    stateSelect.innerHTML = "<option value=''>Selecciona un estado</option>";
    citySelect.innerHTML = "<option value=''>Selecciona una localidad</option>";
    municipalitySelect.innerHTML = "<option value=''>Selecciona un municipio</option>";
    stateSelect.disabled = true;
    citySelect.disabled = true;
    municipalitySelect.disabled = true;

    // Obtener el país seleccionado
    var selectedCountry = countrySelect.value;

    // Si se selecciona un país, llenar el menú de estados correspondiente
    if (selectedCountry) {
        stateSelect.disabled = false;
        for (var i = 0; i < states[selectedCountry].length; i++) {
            var option = document.createElement("option");
            option.text = states[selectedCountry][i];
            option.value = states[selectedCountry][i];
            stateSelect.add(option);
        }
    }
}

// Función para actualizar el menú desplegable de ciudades
function updateCities() {
    var countrySelect = document.getElementById("country");
    var stateSelect = document.getElementById("state");
    var citySelect = document.getElementById("city");
    var municipalitySelect = document.getElementById("municipality");

    // Limpiar y deshabilitar el menú de ciudades y municipios
    citySelect.innerHTML = "<option value=''>Selecciona una localidad</option>";
    municipalitySelect.innerHTML = "<option value=''>Selecciona un municipio</option>";
    citySelect.disabled = true;
    municipalitySelect.disabled = true;

    // Obtener el país y estado seleccionados
    var selectedCountry = countrySelect.value;
    var selectedState = stateSelect.value;

    // Si se selecciona un país y estado, llenar el menú de ciudades correspondiente
    if (selectedCountry && selectedState) {
        citySelect.disabled = false;
        for (var i = 0; i < cities[selectedState].length; i++) {
            var option = document.createElement("option");
            option.text = cities[selectedState][i];
            option.value = cities[selectedState][i];
            citySelect.add(option);
        }
    }
}

// Función para actualizar el menú desplegable de municipios
function updateMunicipalities() {
    var countrySelect = document.getElementById("country");
    var stateSelect = document.getElementById("state");
    var citySelect = document.getElementById("city");
    var municipalitySelect = document.getElementById("municipality");

    // Limpiar y deshabilitar el menú de municipios
    municipalitySelect.innerHTML = "<option value=''>Selecciona un municipio</option>";
    municipalitySelect.disabled = true;

    // Obtener la localidad seleccionada
    var selectedCity = citySelect.value;

    // Si se selecciona una localidad, llenar el menú de municipios correspondiente
    if (selectedCity) {
        municipalitySelect.disabled = false;
        for (var i = 0; i < municipalities[selectedCity].length; i++) {
            var option = document.createElement("option");
            option.text = municipalities[selectedCity][i];
            option.value = municipalities[selectedCity][i];
            municipalitySelect.add(option);
        }
    }
}

// Función para mostrar la selección actual
function showSelection() {
    var countrySelect = document.getElementById("country");
    var stateSelect = document.getElementById("state");
    var citySelect = document.getElementById("city");
    var municipalitySelect = document.getElementById("municipality");

    var selectedCountry = countrySelect.value;
    var selectedState = stateSelect.value;
    var selectedCity = citySelect.value;
    var selectedMunicipality = municipalitySelect.value;

    var selectionMessage = "Selección actual:\n";
    selectionMessage += "País: " + (selectedCountry || "No seleccionado") + "\n";
    selectionMessage += "Estado: " + (selectedState || "No seleccionado") + "\n";
    selectionMessage += "Localidad: " + (selectedCity || "No seleccionado") + "\n";
    selectionMessage += "Municipio: " + (selectedMunicipality || "No seleccionado");

    alert(selectionMessage);
}

// Llenar el menú de países al cargar la página
window.onload = function () {
    var countrySelect = document.getElementById("country");

    // Llenar el menú de países
    for (var i = 0; i < countries.length; i++) {
        var option = document.createElement("option");
        option.text = countries[i];
        option.value = countries[i];
        countrySelect.add(option);
    }
};