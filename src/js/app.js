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

    const requisitos = document.querySelector('.requisitos');
    const compensacion = document.querySelector('.compensacion');
    const premios = document.querySelector('.premios');

    nivel1.onclick = function(){
        requisitos.innerHTML='<h1>requisitos para nivel 1</h1>';
        compensacion.innerHTML='<h1>Compensacion para nivel 1</h1>';
        premios.innerHTML='<h1>premios para nivel 1</h1>';

        requisitos.classList.add('transicion');
    };

    nivel2.onclick = function(){
        requisitos.innerHTML='<h1>requisitos para nivel 2</h1>';
        compensacion.innerHTML='<h1>Compensacion para nivel 2</h1>';
        premios.innerHTML='<h1>premios para nivel 2</h1>';
    };

    nivel3.onclick = function(){
        requisitos.innerHTML='<h1>requisitos para nivel 3</h1>';
        compensacion.innerHTML='<h1>Compensacion para nivel 3</h1>';
        premios.innerHTML='<h1>premios para nivel 3</h1>';
    };

    nivel4.onclick = function(){
        requisitos.innerHTML='<h1>requisitos para nivel 4</h1>';
        compensacion.innerHTML='<h1>Compensacion para nivel 4</h1>';
        premios.innerHTML='<h1>premios para nivel 4</h1>';
    };

    nivel5.onclick = function(){
        requisitos.innerHTML='<h1>requisitos para nivel 5</h1>';
        compensacion.innerHTML='<h1>Compensacion para nivel 5</h1>';
        premios.innerHTML='<h1>premios para nivel 5</h1>';
    };
}

function draw(){
    // Creates canvas 320 × 200 at 10, 50
    var paper = Raphael(10, 50, 700, 400);
    
    var circulos = [];
    circulos[0] = paper.circle(50,40,80);
    circulos[0].attr("fill", "red");
    circulos[0].attr("stroke","red");

    circulos[1] = paper.circle(50,40,40);
    circulos[1].attr("fill", "blue");
    circulos[1].attr("stroke","blue");

}