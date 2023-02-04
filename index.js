let responsiveBtn = document.getElementById('responsiveBtn');
let toggle = document.getElementById('toggle');
let id = document.getElementById('list');
const toggleButton = () => {
    if (toggle.className === 'fa-sharp fa-solid fa-bars') {
        toggle.className = "fa-sharp fa-solid fa-xmark"
        // console.log('hello')
        id.style.display = 'inline-block'

    } else {
        toggle.className = "fa-sharp fa-solid fa-bars"
        id.style.display = null
        // console.log('hello')
    }
}
// responsiveBtn.addEventListener('click', changeToggle)
// responsiveBtn.addEventListener('click', )