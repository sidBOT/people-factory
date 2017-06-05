const personForm = document.querySelector('#personForm')
function handleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    const name = f.personName.value
    const pass = f.password.value
    var string = "name: " + name + " pass: " + pass;
    document.querySelector('h1').textContent = string;
}
personForm.addEventListener('submit', handleSubmit)