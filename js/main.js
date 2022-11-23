const body = document.querySelector('body')
const navMobile = document.querySelector('.nav-mobile')
const navBtn = document.querySelector('.hamburger')
const allNavItems = document.querySelectorAll('.nav__link')
const actualYear = document.querySelector('.footer__year')
const userName = document.querySelector('#name')
const userEmail = document.querySelector('#email')
const userMsg = document.querySelector('#msg')
const errorMsg = document.querySelector('.contact__form-error')
const contactBtn = document.querySelector('.contact__form-btn')

const scrollBlockNavBtn = () => {
    if(body.classList.contains('scroll-block')) {
        body.classList.remove('scroll-block')
    } else {
        body.classList.add('scroll-block')
    }
}

const handleNav = () => {
    navMobile.classList.toggle('nav-mobile--active')
    navBtn.classList.toggle('is-active')

    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            navMobile.classList.remove('nav-mobile--active')
            navBtn.classList.remove('is-active')
            body.classList.remove('scroll-block')
        })
    })

    scrollBlockNavBtn()
}

const msgBtnAction = () => {
    if(userName.value !== '' && userMsg.value !== '' && userEmail.value !== '') {
        contactBtn.textContent = 'Sent!',
        userName.value = ''
        userEmail.value = ''
        userMsg.value = ''
        errorMsg.classList.add('error-toggle')

        setTimeout(() => {
            contactBtn.textContent = 'Send'
        }, 2500)

    } else {
        errorMsg.classList.remove('error-toggle')
    }
}

const currentYear = () => {
    const newDate = new Date().getFullYear()
    actualYear.textContent = newDate
}

currentYear()


contactBtn.addEventListener('click', msgBtnAction)
navBtn.addEventListener('click', handleNav)