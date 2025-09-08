const ulEl = document.querySelector('.messages');
const formEl = document.querySelector('form');
formEl.addEventListener('submit', checkData);

function checkData(e) {
    const error = [];
    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;
    const street = e.target.elements.street.value;
    const zip = e.target.elements.zip.value;
    const zipRegex = /^\d{2}-\d{3}$/;
    const houseNumber = e.target.elements.houseNumber.value;
    const flatNumber = e.target.elements.flatNumber.value;
    const city = e.target.elements.city.value;
    const voivodeship = e.target.elements.voivodeship.value;

    if (!firstName) error.push("First name is required");
    if (!lastName) error.push("Last name is required");
    if (!street) error.push("Street is required");
    if (!city) error.push("City is required");

    if( houseNumber < 1 ) {
        error.push("House number must be greater than 0")
    }

    if (flatNumber && flatNumber < 1) {
        error.push("Flat number must be greater than 0")
    }

    if (!zipRegex.test(zip)) {
        error.push("Postal code must be in format XX-XXX");
    }

    if(!voivodeship) error.push("Please select a voivodeship");

    if(error.length > 0) {
        e.preventDefault();
        ulEl.innerHTML = '';

        error.forEach(function(err) {
            const newLi = document.createElement('li');
            newLi.innerText = err;
            ulEl.appendChild(newLi);
        });
    } else {
       return alert("Your form has been sent succesfully!");
    }
   
}