

// handle the color selection by change dom event.

const colorName = document.querySelector(".colorSelection");
const showColor = document.querySelector(".color");

colorName.addEventListener('change', function(event){

    showColor.textContent = `Your choice : ${event.target.value}`;
});

// fetching the country api

const country = document.querySelector(".selectCountry");
const countryInfo = document.querySelector(".information");

country.addEventListener("change",async function(event){

    const SelectCountry = event.target.value;

    // clearing the previous
    countryInfo.textContent = '';

    if(SelectCountry) {

        try {
            // if true
            // fetching the data
            const response = await fetch(`https://restcountries.com/v3.1/alpha/${SelectCountry}`);
            const data = await response.json();

            // structure. country information
            const Country = data[0];
            countryInfo.innerHTML = `
            <strong>Country:</strong>${Country.name.common}</br>
            <strong>Region:</strong>${Country.region}</br>
            <strong>Population:</strong>${Country.population.toLocaleString()}</br>
            `;

        } catch (error) {
            // if fail
            countryInfo.textContent = "falied to fetching the data from API.";
        }

    }
});

// Handlong the checkbox.

const check = document.querySelector(".selectBox");
const showbox = document.querySelector(".showBox");

check.addEventListener("change", function(event){

    if(event.target.checked){
        showbox.textContent = " You are SubScribed";

    } else {
        showbox.textContent = " You are unSubScribed";

    }
});