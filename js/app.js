const navbar = document.querySelector('#appbar');
const mobileMenu = document.querySelector('.mobile-menu')
const exitButton = document.querySelector('#exit')
const hamburgerMenu = document.querySelector('.menu')
const cartIcon = document.querySelector('#cart')
const loginButton = document.querySelector('#login-button')
const loginbuttonMobile = document.querySelector('#login-button-mobile')
const profileIcon = document.querySelector('#profile')

const generateToken = () => {
    const randomString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'.split('')
    let token = []

    for(let i = 0; i < randomString.length - 1; i++) {
        let randomNumber = (Math.random() * (randomString.length - 1)).toFixed(0)
        token[i] = randomString[randomNumber]
    }

    return token.join('')
}

exitButton.addEventListener('click', () => {
    mobileMenu.style.top = '-100%'
})

hamburgerMenu.addEventListener('click', () => {
    mobileMenu.style.top = '0%'
})

window.onscroll = () => {
    if (window.scrollY > 300) {
        navbar.classList.add('shadow-bottom');
    } else {
        navbar.classList.remove('shadow-bottom');
    }
};

const userToken = sessionStorage.getItem('login-session')


if(userToken === null) {
    cartIcon.style.display = 'none'
    loginButton.innerText = 'Login'
    loginbuttonMobile.innerText = "Login"
    loginbuttonMobile.style.color = 'black'
    profileIcon.style.display = 'none'
} else {
    profileIcon.style.display = 'block'
    cartIcon.style.display = 'block'
    loginButton.innerText = 'logout'
    loginbuttonMobile.innerText = "logout"
    loginButton.addEventListener('click', () => {
        sessionStorage.removeItem('login-session')
        history.back()
    })
    loginbuttonMobile.addEventListener('click', () => {
        sessionStorage.removeItem('login-session')
        history.back()
    })
}
