const navMobile = document.querySelector('.nav-mobile')
const navBtn = document.querySelector('.hamburger')
const allNavItems = document.querySelectorAll('.nav__link')
const actualYear = document.querySelector('.footer__year')

const handleNav = () => {
    navMobile.classList.toggle('nav-mobile--active')
    navBtn.classList.toggle('is-active')

    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            navMobile.classList.remove('nav-mobile--active')
            navBtn.classList.remove('is-active')
        })
    })

}

const currentYear = () => {
    const newDate = new Date().getFullYear()
    actualYear.textContent = newDate
}

currentYear()

navBtn.addEventListener('click', handleNav)