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
let CONTACT_BTN
let CONTACT_POPUP
let CONTACT_POPUP_BTN
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
	CONTACT_BTN = document.querySelector('.contact__form-btn')
	CONTACT_POPUP = document.querySelector('.contact__popup')
	CONTACT_POPUP_BTN = document.querySelector('.contact__popup-btn')
	ACTUAL_YEAR = document.querySelector('.footer__year')
	RETURN_ARROW = document.querySelector('.return__arrow')
	COOKIE_BOX = document.querySelector('.cookie-box')
	COOKIE_BOX_BTN = document.querySelector('.cookie-box__btn')
	EMAIL_CHECK =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	INPUTS_ARR = [CONTACT_USERNAME, CONTACT_USER_EMAIL, CONTACT_USER_MSG]
}

const prepareDOMEvents = () => {
	window.addEventListener('scroll', showArrow)
	NAV_BTN.addEventListener('click', handleNav)
	COOKIE_BOX_BTN.addEventListener('click', handleCookieBox)
	NEWSLETTER_BTN.addEventListener('click', newsletterCheck)
	CONTACT_BTN.addEventListener('click', e => {
		e.preventDefault()

		checkContactForm(INPUTS_ARR)
		checkContactMail(CONTACT_USER_EMAIL)
		checkContactErrors()
	})
	CONTACT_POPUP_BTN.addEventListener('click', closeContactPopup)
	currentYear()
	showCookie()
}

const showCookie = () => {
	const cookieItem = localStorage.getItem('cookie')
	if (cookieItem) {
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

const showError = input => {
	const formBox = input.parentElement
	formBox.classList.add('warning')
}

const clearError = input => {
	const formBox = input.parentElement
	formBox.classList.remove('warning')
}

const clearAll = () => {
	INPUTS_ARR.forEach(el => {
		el.value = ''
		el.classList.remove('warning')
	})
}

const checkContactForm = input => {
	input.forEach(el => {
		if (el.value === '' || el.value.length < 3) {
			showError(el)
		} else {
			clearError(el)
		}
	})
}

const checkContactMail = email => {
	if (EMAIL_CHECK.test(email.value)) {
		clearError(email)
	} else {
		showError(email)
	}
}

const checkContactErrors = () => {
	const allInputs = document.querySelectorAll('.contact__form-box')
	let errorCount = 0

	allInputs.forEach(el => {
		if (el.classList.contains('warning')) {
			errorCount++
		}
	})

	if (errorCount === 0) {
		clearAll()
		CONTACT_POPUP.classList.add('contact-popup-active')

		setTimeout(() => {
			CONTACT_POPUP.classList.remove('contact-popup-active')
		}, 2000)
	}
}

const closeContactPopup = () => {
	CONTACT_POPUP.classList.remove('contact-popup-active')
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
