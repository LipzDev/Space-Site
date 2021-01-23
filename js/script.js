function menuMobile(){
    let icon = document.querySelector('.icon');
    let menu = document.querySelector('.menu');

    function openMenu(){
        icon.classList.toggle('icon-x');
        menu.classList.toggle('ativo')
    }

    icon.addEventListener('click', openMenu);
}

menuMobile();

// MENU MOVEL

function menuModularInit(){
    let menuModular = document.querySelector('.header');

    function menuRoll(){
        if(window.scrollY > 0){
            menuModular.classList.add('modular');
        } else {
            menuModular.classList.remove('modular');
        }
    }

    window.addEventListener('scroll', menuRoll);
}

menuModularInit();

// DECOLAR FOGUETE

function fogueteDecolaInit(){
    let buttonVoar = document.querySelector('.button');
    let foguete = document.querySelector('.bg-flex');
    let escondeFoguete = document.querySelector('.bg-flex img');

    function decolarFoguete(){        
        setTimeout(function(){ 
            foguete.classList.add('foguete');
        }, 5); 
        foguete.classList.remove('foguete');
    }

    buttonVoar.addEventListener('click', decolarFoguete);
}

fogueteDecolaInit();

// SCROLL TO SECTION

function scrollToSectionInit(){
    let navMenu = document.querySelectorAll(".menu a[href^='#'");
    let buttonReturn = document.querySelectorAll(".button-return a[href^='#'");

    function scrollToSection(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        const topo = section.offsetTop;
        window.scrollTo({
            top: topo,
            behavior: "smooth",
        });
    }


    navMenu.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });

    buttonReturn.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
}

scrollToSectionInit();

// ESCONDE BUTTON RETURN

function escondeReturnButton(){
    let iconReturn = document.querySelector('.button-return');

    function removeButton(){
        if(window.scrollY >= 800){
            iconReturn.classList.add('showIcon');
        } else {
            iconReturn.classList.remove('showIcon');
        }        
    }

    window.addEventListener('scroll', removeButton);
}

escondeReturnButton();

// MAPA

// let mapa = document.querySelector('.mapa');
// let iframe = document.querySelector('.iframe');

// function openMap(){
//     iframe.classList.toggle('mapaOpen')
// }

// mapa.addEventListener('click', openMap);

