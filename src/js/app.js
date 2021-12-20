document.addEventListener('DOMContentLoaded',function(){
    iniciarApp();
});

function iniciarApp(){
    grafica();
    // draw();
}

function grafica(){
    const nivel1 = document.querySelector('#nivel_1');
    const nivel2 = document.querySelector('#nivel_2');
    const nivel3 = document.querySelector('#nivel_3');
    const nivel4 = document.querySelector('#nivel_4');
    const nivel5 = document.querySelector('#nivel_5');
    const titulo = document.querySelector('#titulo-niveles');

    nivel1.onmouseover = function(){
        llenarTexto(1);
    };
    nivel2.onmouseover = function(){
        llenarTexto(2);
    };
    nivel3.onmouseover = function(){
        llenarTexto(3);
    };
    nivel4.onmouseover = function(){
        llenarTexto(4);
    };
    nivel5.onmouseover = function(){
        llenarTexto(5);
    };

    nivel1.onmouseout = function(){
        resetearTexto();
    };
    nivel2.onmouseout = function(){
        resetearTexto();
    };
    nivel3.onmouseout = function(){
        resetearTexto();
    };
    nivel4.onmouseout = function(){
        resetearTexto();
    };
    nivel5.onmouseout = function(){
        resetearTexto();
    };
}


function resetearTexto(){
    const requisitos = document.querySelector('.requisitos');
    const compensacion = document.querySelector('.compensacion');
    const premios = document.querySelector('.premios');
    const titulo = document.querySelector('#titulo-niveles');

    requisitos.classList.remove('animate__animated');
    requisitos.classList.remove('animate__zoomInRight');
    compensacion.classList.remove('animate__animated');
    compensacion.classList.remove('animate__zoomInRight');
    premios.classList.remove('animate__animated');
    premios.classList.remove('animate__zoomInRight');
    titulo.classList.remove('animate__animated');
    titulo.classList.remove('animate__zoomInRight');

    titulo.innerHTML='';
    requisitos.innerHTML='<h1></h1>';
    compensacion.innerHTML='<h1></h1>';
    premios.innerHTML='<h1></h1>';
}

function llenarTexto(num){
    const requisitos = document.querySelector('.requisitos');
    const compensacion = document.querySelector('.compensacion');
    const premios = document.querySelector('.premios');
    const titulo = document.querySelector('#titulo-niveles');

    requisitos.classList.add('animate__animated');
    requisitos.classList.add('animate__zoomInRight');
    compensacion.classList.add('animate__animated');
    compensacion.classList.add('animate__zoomInRight');
    premios.classList.add('animate__animated');
    premios.classList.add('animate__zoomInRight');
    titulo.classList.add('animate__animated');
    titulo.classList.add('animate__zoomInRight');

    switch (num) {
        case 1:
            titulo.innerHTML='Nivel 1';
            requisitos.innerHTML='<h1>requisitos para nivel 1</h1>';
            compensacion.innerHTML='<h1>Compensación para nivel 1</h1>';
            premios.innerHTML='<h1>premios para nivel 1</h1>';
            break;

        case 2:
            titulo.innerHTML='Nivel 2';
            requisitos.innerHTML='<h1>requisitos para nivel 2</h1>';
            compensacion.innerHTML='<h1>Compensación para nivel 2</h1>';
            premios.innerHTML='<h1>premios para nivel 2</h1>';
            break;

        case 3:
            titulo.innerHTML='Nivel 3';
            requisitos.innerHTML='<h1>requisitos para nivel 3</h1>';
            compensacion.innerHTML='<h1>Compensación para nivel 3</h1>';
            premios.innerHTML='<h1>premios para nivel 3</h1>';
            break;

        case 4:
            titulo.innerHTML='Nivel 4';
            requisitos.innerHTML='<h1>requisitos para nivel 4</h1>';
            compensacion.innerHTML='<h1>Compensación para nivel 4</h1>';
            premios.innerHTML='<h1>premios para nivel 4</h1>';
            break;

        case 5:
            titulo.innerHTML='Nivel 5';
            requisitos.innerHTML='<h1>requisitos para nivel 5</h1>';
            compensacion.innerHTML='<h1>Compensación para nivel 5</h1>';
            premios.innerHTML='<h1>premios para nivel 5</h1>';
            break;
    
        default:
            break;
    }
}