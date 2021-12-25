const navbar = document.querySelector('#appbar');
const email = document.getElementById('email');
const password = document.getElementById('password');
const registerEmail = document.getElementById('register-email')
const registerPassword = document.getElementById('register-password')
const registerPhone = document.getElementById('register-phone')
const phone = document.getElementById('phone')
const formRegister = document.getElementById('form-register')
const formLogin = document.getElementById('form-login')
const mobileMenu = document.querySelector('.mobile-menu')
const exitButton = document.querySelector('#exit')
const hamburgerMenu = document.querySelector('.menu')

const loginData = {}
const userLogs = [
    {
        email: 'gusti@gmail.com',
        password: 'gusti123'
    }, 
    {
        email: 'ridho@gmail.com',
        password: 'ridho2002'
    }
]

const initializeStorage = () => {
    localStorage.setItem('user-logs', JSON.stringify(userLogs))
}

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

// login register logic
function store(){
    if (registerEmail.value.length == 0 || registerPassword.value.length == 0 || registerPhone.value.length == 0){
        alert('Please complete your data');
    } else {
        const newUser = {
            email: registerEmail.value,
            password: registerPassword.value,
            phone: registerPhone.value
        }

        
        alert('Your account has been created');
    }
}

//checking
function check() {
    const storedData = JSON.parse(localStorage.getItem('user-logs'))

    const userEmail = document.getElementById('email');
    const userPassword = document.getElementById('password');

    const storedEmail = storedData.map(data => {
        let result
        if(data.email === userEmail.value) {
            result = data.email
        }

        return result
    })
    const storedPassword = storedData.map(data => {
        let result
        if(data.password === userPassword.value) {
            result = data.password
        }

        return result
    })

    console.log(storedPassword)
    console.log(storedEmail)
    if (userEmail.value == storedEmail && userPassword.value == storedPassword){
        localStorage.clear('login-data')
        loginData.email = storedEmail
        loginData.password = storedPassword
        loginData.token = generateToken()
        localStorage.setItem('login-data', loginData)
    } else {
        alert('User not Found');
    }
}

document.body.addEventListener('load', initializeStorage())
document.body.innerHTML += ModalFeedback