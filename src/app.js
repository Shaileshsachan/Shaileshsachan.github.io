const hamburgerButton = document.getElementById('hamburger');
const navlist = document.getElementById('nav-list');

function toggleButton() {
    navlist.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)