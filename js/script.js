/*=============== MOSTRAR MENÚ ===============*/

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

// validar if constaten existe

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// ocultar menu

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


/*=============== QUITAR MENÚ MÓVIL ================*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CAMBIAR ENCABEZADO DE FONDO ================*/

const scrollHeader = () => {

    const header = document.getElementById('cabecera')

    //Cuando el desplazamiento tiene una altura superior a 50 de la ventana gráfica,
    // agrega la clase de encabezado de desplazamiento a la etiqueta del encabezado

    this.scrollY >= 50 ? header.classList.add('bg-cabecera') :
        header.classList.remove('bg-cabecera')

}
window.addEventListener('scroll', scrollHeader)

/*=============== DESPLAZARSE POR SECCIONES ENLACE ACTIVO ================*/

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

/*=============== MOSTRAR DESPLAZAMIENTO ARRIBA ===============*/

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')

    //Cuando el desplazamiento tiene una altura superior a 350 de la ventana gráfica, agrega la clase show-scroll a la etiqueta a con scrollup

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') :
        scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/*=============== ANIMACIÓN DE REVELACIÓN DE DESPLAZAMIENTO ================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.home__dato, .footer__container, .footer__grupo`)
sr.reveal(`.home__img`, { delay: 700, origin: 'bottom' })
sr.reveal(`.logos__img, .programa__tarjeta, .precio__tarjeta`, { interval: 100 })
sr.reveal(`.elegir__img, .calculadora__contenido`, { origin: 'left' })
sr.reveal(`.elegir__contenido, .calculadora__img`, { origin: 'right' })

/*=============== CALCULAR JS ================*/

const calculadoraForm = document.getElementById('calculadora-form'),
    calculadoraCm = document.getElementById('calculadora-cm'),
    calculadoraKg = document.getElementById('calculadora-kg'),
    calculadoraMensaje = document.getElementById('calculadora-mensaje')

const calculadoraImc = (e) => {
    e.preventDefault()

    //comprobar si los campos tienen un valor
    if (calculadoraCm.value === '' || calculadoraKg.value === '') {

        //agregar y quitar color
        calculadoraMensaje.classList.remove('color-green')
        calculadoraMensaje.classList.add('color-red')

        //Mostrar mensaje

        calculadoraMensaje.textContent = 'Complete la altura y el peso 🧑‍💻'

        //eliminar mensaje tres segundos
        setTimeout(() => {
            calculadoraMensaje.textContent = ''
        }, 3000)

    } else {

        //IMC Formula
        const cm = calculadoraCm.value / 100,
            kg = calculadoraKg.value,
            imc = Math.round(kg / (cm * cm))

        //muestra tu estado de salud

        if (imc < 18.5) {

            //agregar color y mostrar mensaje

            //si eres flaco
            calculadoraMensaje.classList.add('color-green')
            calculadoraMensaje.textContent = `Su IMC es ${imc} Y tu eres flaco(a) 😔`

        } else if (imc < 25) {

            // estas sano
            calculadoraMensaje.classList.add('color-green')
            calculadoraMensaje.textContent = `Su IMC es ${imc} Y estas sana(o) 🥳`

        } else {

            // esta gordo
            calculadoraMensaje.classList.add('color-green')
            calculadoraMensaje.textContent = `Su IMC es ${imc} y tienes sobrepeso 😔`
        }

        //Para borrar el campo de entrada

        calculadoraCm.value = ''
        calculadoraKg.value = ''

        //eliminar mensaje cuatro segundos
        setTimeout(() => {
            calculadoraMensaje.textContent = ''
        }, 4000)
    }

}

calculadoraForm.addEventListener('submit', calculadoraImc)


/*=============== CORREO ELECTRÓNICO JS ===============*/

const contactoForm = document.getElementById('contacto-form'),
    contactoMensaje = document.getElementById('contacto-mensaje'),
    contactoUsuario = document.getElementById('contacto-usuario')

const sendEmail = (e) => {

    e.preventDefault()

    //comprobar si los campos tienen un valor
    if (contactoUsuario.value === '') {

        //agregar y quitar color
        contactoMensaje.classList.remove('color-green')
        contactoMensaje.classList.add('color-red')

        //Mostrar mensaje
        contactoMensaje.textContent = 'Debes ingresar tu correo electrónico ☝️'

        //eliminar mensaje tres segundos
        setTimeout(() => {
            contactoMensaje.textContent = ''
        }, 3000)

    } else {
        //serviceID, templateID, #form, publicKey

        emailjs.sendForm('service_w08rrto', 'template_yvqpoal', '#contacto-form', 'xOKc-CCDpRZNg3slM')
            .then(() => {

                //agregar color y mostrar mensaje
                contactoMensaje.classList.add('color-green')
                contactoMensaje.textContent = 'Te registraste exitosamente 💪'

                //eliminar mensaje tres segundos
                setTimeout(() => {
                    contactoMensaje.textContent = ''
                }, 3000)
            }, (error) => {

                //error de envío de correo
                alert('OOPS! ALGO HA FALLADO...', error)

            })

        //Para borrar el campo de entrada
        contactoUsuario.value = ''

    }
}

contactoForm.addEventListener('submit', sendEmail)