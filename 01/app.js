

const ul = document.querySelector('ul');
const firstName = document.querySelector('input[name= "firstName"]');
const lastName = document.querySelector('input[name= "lastName"]');

const formEl = document.querySelector('form');
formEl.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    const li = document.createElement('li');
    li.classList.add('users-list__person');
    const newPerson = `${firstName.value} ${lastName.value}`;
    li.textContent = newPerson;
    ul.appendChild(li);
}