let BODY
let NAV_MOBILE
let NAV_BTN
let ALL_NAV_ITEMS
let ACTUAL_YEAR
let NEWSLETTER_BTN
let NEWSLETTER_INPUT
let CONTACT_USERNAME
let CONTACT_USER_EMAIL
let CONTACT_USER_MSG
let CONTACT_ERROR_MSG
let CONTACT_BTN
let EMAIL_CHECK
let INPUTS_ARR

const main = () => {
    prepareDOMElements()
    prepareDOMEvents()
}

const prepareDOMElements = () => {
    BODY = document.querySelector('body')
    NAV_MOBILE = document.querySelector('.nav-mobile')
    NAV_BTN = document.querySelector('.hamburger')
    ALL_NAV_ITEMS = document.querySelectorAll('.nav__link')
    NEWSLETTER_BTN = document.querySelector('.newsletter__form-btn')
    NEWSLETTER_INPUT = document.querySelector('.newsletter__form-input')
    CONTACT_USERNAME = document.querySelector('#name')
    CONTACT_USER_EMAIL = document.querySelector('#email')
    CONTACT_USER_MSG = document.querySelector('#msg')
    CONTACT_ERROR_MSG = document.querySelector('.contact__form-error')
    CONTACT_BTN = document.querySelector('.contact__form-btn')
    ACTUAL_YEAR = document.querySelector('.footer__year')
    EMAIL_CHECK = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i
    INPUTS_ARR = [CONTACT_USERNAME, CONTACT_USER_EMAIL, CONTACT_USER_MSG]
}

const prepareDOMEvents = () => {
	currentYear()
	NEWSLETTER_BTN.addEventListener('click', newsletterCheck)
	CONTACT_BTN.addEventListener('click', contactBtnAction)
	NAV_BTN.addEventListener('click', handleNav)
}

const scrollBlockNavBtn = () => {
	if (BODY.classList.contains('scroll-block')) {
		BODY.classList.remove('scroll-block')
	} else {
		BODY.classList.add('scroll-block')
	}
}

const handleNav = () => {
	NAV_MOBILE.classList.toggle('nav-mobile--active')
	NAV_BTN.classList.toggle('is-active')

	ALL_NAV_ITEMS.forEach(item => {
		item.addEventListener('click', () => {
			NAV_MOBILE.classList.remove('nav-mobile--active')
			NAV_BTN.classList.remove('is-active')
			BODY.classList.remove('scroll-block')
		})
	})

	scrollBlockNavBtn()
}

const newsletterCheck = () => {
	if (EMAIL_CHECK.test(NEWSLETTER_INPUT.value)) {
		NEWSLETTER_BTN.textContent = 'Got it!'
		NEWSLETTER_INPUT.value = ''
	} else {
		NEWSLETTER_BTN.textContent = 'Incorrect..'
	}

	setTimeout(() => {
		NEWSLETTER_BTN.textContent = 'Subscribe!'
	}, 2500)
}

const contactBtnAction = () => {
	if (CONTACT_USERNAME.value !== '' && CONTACT_USER_MSG.value !== '' && EMAIL_CHECK.test(CONTACT_USER_EMAIL.value)) {
		;(CONTACT_BTN.textContent = 'Message sent!'),
			INPUTS_ARR.forEach(el => {
				el.value = ''
			})
		CONTACT_ERROR_MSG.classList.add('error-toggle')

		setTimeout(() => {
			CONTACT_BTN.textContent = 'Send'
		}, 2500)
	} else {
		CONTACT_ERROR_MSG.classList.remove('error-toggle')
	}
}

const currentYear = () => {
	const newDate = new Date().getFullYear()
	ACTUAL_YEAR.textContent = newDate
}

document.addEventListener('DOMContentLoaded', main)
