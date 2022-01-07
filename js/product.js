const productTitle = document.querySelector('.product-detail-title')
const productPrice = document.querySelector('.product-price')
const productButton = document.querySelector('#add-cart')
const productImg = document.querySelector('.product-detail-img').getAttribute('src')
const addCartButton = document.querySelector('#add-cart')
const cartLink = document.querySelector('.product-headline-text > a')

let imgArrayText = productImg.split('')
imgArrayText.shift(0)
imgArrayText = imgArrayText.join('')

productButton.addEventListener('click', () => {
    localStorage.setItem('product-title', productTitle.innerText)
    localStorage.setItem('product-price', productPrice.innerText)
    localStorage.setItem('product-img', imgArrayText)
})
