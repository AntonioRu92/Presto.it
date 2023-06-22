// evento manina button toggler

// cattura manina navbar
let navIcon = document.querySelector('#navIcon');

// variabile d'appoggio per checkare la condizione
let confirm = false;

// evento click sul toggler
navIcon.addEventListener('click', ()=>{


    if(confirm == false){

        navIcon.classList.remove('fa-rotate-180');
        confirm = true;
    
    } else{

        navIcon.classList.add('fa-rotate-180');
        confirm = false;

    }


})


// CATTURA NAVBAR

let mainNavbar = document.querySelector('#mainNavbar');

let containerNav = document.querySelector('#container-nav');

// CATTURA LOGHI

let logoA = document.querySelector('#logoA');
let logoB = document.querySelector('#logoB');

// evento NAVBAR

window.addEventListener('scroll', ()=>{

    if(window.scrollY > 0){

        mainNavbar.classList.remove('bg-transparent');
        mainNavbar.classList.add('background-primaryC');

        // mainNavbar.style.height = '100px';
        mainNavbar.style.padding = '20px 0px';

        logoB.classList.remove('d-none');
        logoA.classList.add('d-none');

        

    } else {

        mainNavbar.classList.remove('background-primaryC');
        mainNavbar.classList.add('bg-transparent');

        // mainNavbar.style.height = '60px';
        mainNavbar.style.padding = '10px 0px';

        logoA.classList.remove('d-none');
        logoB.classList.add('d-none');

      

    }


})



function createInterval(finalNumber, element){

    let counter = 0;

    let interval = setInterval( ()=>{


        if(counter < finalNumber){

            counter++
            element.innerHTML = counter;
            

        } else {

            clearInterval(interval);

        }

    }, 1)

}

createInterval();

// cattura degli span con numero 0

let firstSpan = document.querySelector('#first-span');
let secondSpan = document.querySelector('#second-span');
let thirdSpan = document.querySelector('#third-span');




// catturo l'h2 della colonna della sezione AOS

let h2Test = document.querySelector('#h2Test');

// variabile d'appoggio per cessare l'incremento dei numeri
let intersectionCheck = true;

// funzione intersection observe

let observed = new IntersectionObserver(

    (entries)=>{

        entries.forEach( (entry)=>{

            if(entry.isIntersecting && intersectionCheck == true){

                createInterval(1000, firstSpan);
                createInterval(1500, secondSpan);
                createInterval(500, thirdSpan);

                intersectionCheck = false;

            }

        } )

    }

)  

observed.observe(h2Test);


// EVENTO MOUSE ENTER

// cattura dei camioncini
let camioncini = document.querySelectorAll('.fa-truck-fast');

// cattura delle card
let columns = document.querySelectorAll('.col-custom');

// variabile d'appoggio per far ritornare tutto alle origini
let columnsConfirm = false;

columns.forEach( (colonna, i)=>{
    

    // alla singola colonna attacco l'evento mouseenter

        colonna.addEventListener('mouseenter', ()=>{

        if(columnsConfirm == false){

            camioncini[i].classList.remove('text-secondaryC');
            camioncini[i].classList.add('text-accentC');

        
        } else {

               // alla seconda entrata
               camioncini[i].classList.remove('text-blackC'); 

                // e diventa per un attimo del colore di sfondo finché non parte il mouse leave


        }
           
    
        })

   

    // alla singola colonna attacco l'evento mouseleave

    colonna.addEventListener('mouseleave', ()=>{


        if(columnsConfirm == false){

            camioncini[i].classList.remove('text-accentC');
            camioncini[i].classList.add('text-blackC');

            columnsConfirm = true;

        } else {

            // alla seconda uscita 
            camioncini[i].classList.add('text-secondaryC');

            columnsConfirm = false;

        }

    })


});