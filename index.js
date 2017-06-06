const personForm = document.querySelector('#personForm')
function handleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    const name = f.personName.value
    const pass = f.password.value
    const details = document.querySelector('#details')
    var string = "name: " + name + " pass: " + pass;
    const favouriteColor = f.favouriteColor.value;
    const colorDiv = `<div style="background-color: ${favouriteColor}; width: 100px;height: 50px"></div>
    `
    document.querySelector('h1').textContent = string;
    //details.innerHTML = '<em>' + name + '</em>'
    //details.innerHTML =`<em>${name}</em>`;
    // const em = document.createElement('em');
    // em.textContent = name;
    // details.appendChild(em);
    const age = f.age.value;
    details.innerHTML = `
        <ul>
            <li>Name: ${name}</li>
            <li>Favourite color: ${colorDiv}</li>
            <li>Age: ${age}</li>

        </ul>
    `
}
personForm.addEventListener('submit', handleSubmit)