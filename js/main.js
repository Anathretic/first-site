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
let RETURN_ARROW
let COOKIE_BOX
let COOKIE_BOX_BTN

const main = () => {
	prepareDOMElements()
	prepareDOMEvents()
}

const prepareDOMElements = () => {
	BODY = document.querySelector('body')
	NAV_MOBILE = document.querySelector('.nav-mobile')
	NAV_BTN = document.querySelector('.hamburger')
	ALL_NAV_ITEMS = document.querySelectorAll('.nav__link')
	NEWSLETTER_BTN = document.querySelector('.newsletter__box-btn')
	NEWSLETTER_INPUT = document.querySelector('.newsletter__box-input')
	CONTACT_USERNAME = document.querySelector('#name')
	CONTACT_USER_EMAIL = document.querySelector('#email')
	CONTACT_USER_MSG = document.querySelector('#msg')
	CONTACT_ERROR_MSG = document.querySelector('.contact__form-error')
	CONTACT_BTN = document.querySelector('.contact__form-btn')
	ACTUAL_YEAR = document.querySelector('.footer__year')
	RETURN_ARROW = document.querySelector('.return__arrow')
	COOKIE_BOX = document.querySelector('.cookie-box')
	COOKIE_BOX_BTN = document.querySelector('.cookie-box__btn')
	EMAIL_CHECK = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i
	INPUTS_ARR = [CONTACT_USERNAME, CONTACT_USER_EMAIL, CONTACT_USER_MSG]
}

const prepareDOMEvents = () => {
	window.addEventListener('scroll', showArrow)
	NEWSLETTER_BTN.addEventListener('click', newsletterCheck)
	CONTACT_BTN.addEventListener('click', contactCheck)
	NAV_BTN.addEventListener('click', handleNav)
	COOKIE_BOX_BTN.addEventListener('click', handleCookieBox)
	currentYear()
	showCookie()
}

const showCookie = () => {
	const cookieItem = localStorage.getItem('cookie')
	if(cookieItem) {
		COOKIE_BOX.classList.add('hide-cookies')
	}
}

const handleCookieBox = () => {
	localStorage.setItem('cookie', 'true')
	COOKIE_BOX.classList.add('hide-cookies')
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
	
	handleScroll()
}

const handleScroll = () => {
	if (BODY.classList.contains('scroll-block')) {
		BODY.classList.remove('scroll-block')
	} else {
		BODY.classList.add('scroll-block')
	}
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

const contactCheck = () => {
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

const showArrow = () => {
	if (window.scrollY > 150) {
		RETURN_ARROW.classList.add('active-arrow')
	} else {
		RETURN_ARROW.classList.remove('active-arrow')
	}
}

const currentYear = () => {
	const newDate = new Date().getFullYear()
	ACTUAL_YEAR.textContent = newDate
}

document.addEventListener('DOMContentLoaded', main)
