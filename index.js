const personForm = document.querySelector('#personForm')
function handleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    const name = f.personName.value
    const pass = f.password.value
    const details = document.querySelector('#details')
    var string = "name: " + name + " pass: " + pass;
    document.querySelector('h1').textContent = string;
    //details.innerHTML = '<em>' + name + '</em>'
    //details.innerHTML =`<em>${name}</em>`;
    // const em = document.createElement('em');
    // em.textContent = name;
    // details.appendChild(em);

    const favouriteColor = f.favouriteColor.value;
    const age = f.age.value;
    details.innerHTML = `
        <ul>
            <li>Name: ${name}</li>
            <li>Favourite color: ${favouriteColor}</li>
            <li>Age: ${age}</li>

        </ul>
    `
}
personForm.addEventListener('submit', handleSubmit)