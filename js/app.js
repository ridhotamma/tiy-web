const navbar = document.querySelector('#appbar');
window.onscroll = () => {
    if (window.scrollY > 300) {
        navbar.classList.add('shadow-bottom');
    } else {
        navbar.classList.remove('shadow-bottom');
    }
};