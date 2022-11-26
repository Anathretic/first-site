const body = document.querySelector('body')
const navMobile = document.querySelector('.nav-mobile')
const navBtn = document.querySelector('.hamburger')
const allNavItems = document.querySelectorAll('.nav__link')
const actualYear = document.querySelector('.footer__year')
const newsletterBtn = document.querySelector('.newsletter__form-btn')
const newsletterInput = document.querySelector('.newsletter__form-input')
const contactUsername = document.querySelector('#name')
const contactUserEmail = document.querySelector('#email')
const contactUserMsg = document.querySelector('#msg')
const contactErrorMsg = document.querySelector('.contact__form-error')
const contactBtn = document.querySelector('.contact__form-btn')
const emailCheck = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm

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

const newsletterCheck = () => {
    if(emailCheck.test(newsletterInput.value)) {
        newsletterBtn.textContent = 'Got it!'
        newsletterInput.value = ''
    } else {
        newsletterBtn.textContent = 'Incorrect..'
    }

    setTimeout(() => {
        newsletterBtn.textContent = 'Subscribe!'
    }, 2500)
}

const contactBtnAction = () => {
    if(contactUsername.value !== '' && contactUserMsg.value !== '' && emailCheck.test(contactUserEmail.value)) {
        contactBtn.textContent = 'Message sent!',
        contactUsername.value = ''
        contactUserEmail.value = ''
        contactUserMsg.value = ''
        contactErrorMsg.classList.add('error-toggle')

        setTimeout(() => {
            contactBtn.textContent = 'Send'
        }, 2500)

    } else {
        contactErrorMsg.classList.remove('error-toggle')
    }
}

const currentYear = () => {
    const newDate = new Date().getFullYear()
    actualYear.textContent = newDate
}

currentYear()

newsletterBtn.addEventListener('click', newsletterCheck)
contactBtn.addEventListener('click', contactBtnAction)
navBtn.addEventListener('click', handleNav)