document.addEventListener('DOMContentLoaded',function(){
    iniciarApp();
});

function iniciarApp(){
    obtenerBotones();
    // draw();
}

function obtenerBotones(){
    const BaseAnimacion = "animate__animated";
    const animacion = "animate__jello";

    let niveles = [];
    for (let i = 1; i <=10; i++) {
        niveles[i]= document.querySelector('#nivel_'+i);

        

        niveles[i].onclick = function(){
            resetearAnimaciones();
            llenarTexto(i);
        }
        
        niveles[i].onmouseover = function(){
            niveles[i].classList.add(BaseAnimacion);
            niveles[i].classList.add(animacion);
        }

        niveles[i].onmouseout = function(){
            niveles[i].classList.remove(BaseAnimacion);
            niveles[i].classList.remove(animacion);
        }

    }
}

function resetearAnimaciones(BaseAnimacion,animacion){
    let requisitos = [];
    let compensaciones = [];
    for (let i = 1; i <=5; i++) {
        requisitos[i]= document.querySelector('#req_'+i);
        requisitos[i].classList.remove(BaseAnimacion);
        requisitos[i].classList.remove(animacion);
    }

    for (let i = 1; i <=4; i++) {
        compensaciones[i]= document.querySelector('#comp_'+i);
        compensaciones[i].classList.remove(BaseAnimacion);
        compensaciones[i].classList.remove(animacion);
    }
}


function llenarTexto(num){
    console.log("presionaron el boton "+num);
    let requisitos = [];
    let compensaciones = [];
    const premios = document.querySelector('#premios');
    const nivel = document.querySelector('#nivel');
    const tituloNivel = document.querySelector('#titulo-nivel');

    const BaseAnimacion = "animate__animated";
    const animacion = "animate__zoomInRight";

    
    resetearAnimaciones(BaseAnimacion,animacion);

    for (let i = 1; i <=5; i++) {
        requisitos[i]= document.querySelector('#req_'+i);
        requisitos[i].classList.add(BaseAnimacion);
        requisitos[i].classList.add(animacion);
    }

    for (let i = 1; i <=4; i++) {
        compensaciones[i]= document.querySelector('#comp_'+i);
        compensaciones[i].classList.add(BaseAnimacion);
        compensaciones[i].classList.add(animacion);
    }

    premios.classList.add(BaseAnimacion);
    premios.classList.add(animacion);
    nivel.classList.add(BaseAnimacion);
    nivel.classList.add(animacion);
    tituloNivel.classList.add(BaseAnimacion);
    tituloNivel.classList.add(animacion);

    switch (num) {
        case 1:
            nivel.textContent = "Nivel 1";
            tituloNivel.textContent = "Consultora independiente";

            requisitos[1].textContent="N/A";
            requisitos[2].textContent="N/A";
            requisitos[3].textContent="N/A";
            requisitos[4].textContent="N/A";
            requisitos[5].textContent="1 a 2 patrocinios si se participa en el programa 'buscando talento Nivel A'";

            compensaciones[1].textContent="N/A";
            compensaciones[2].textContent="N/A";
            compensaciones[3].textContent="N/A";
            compensaciones[4].textContent="N/A";

            premios.innerHTML=`Obtención de 100% o más de ganancias en ventas <br>
            43% de descuento en pedido sugerido en diciembre 2021 <br>
            Del 08-14 de diciembre 40% en toda la línea de productos Terramar <br>
            15 de cierre 35% de descuento en toda la línea Terramar <br>
            En todo el mes 50% de descuento en toda la línea de productos Terramar <br>
            Programa 'Buscando talento nivel A', se necesita de 1 a 2 patrocinios <br>
            En los premios de 1 solo patrocinio:<br>
            <ul>
                <li>Opción 1: Licuadora Taurus</li>
                <li>Opción 2: Tarjeta MasterCard Terramar con 200 pesos y Beyond Lift en la promoción de 810 pesos, esto los recibe en enero 2022</li>
            </ul>
            Si son 2 patrocinios directos: <br>
            <ul>
                <li>Obsequio A: Tarjeta MasterCard con 400 pesos</li>
                <li>Obsequio B1: Licuadora Taurus</li>
                <li>Obsequio B2: Tarjeta MasterCard Terramar con 200 pesos y Beyond Lift en la promoción de 810 pesos, esto los recibe en enero 2022</li>
            </ul>`;
            break;
    
        case 2:
            nivel.textContent = "Nivel 2";
            tituloNivel.textContent = "Emprendedora independiente";

            requisitos[1].textContent="N/A";
            requisitos[2].textContent="9";
            requisitos[3].textContent="9";
            requisitos[4].textContent="9";
            requisitos[5].textContent="9 y 3 directas, Patrocinar a 3 si se quiere concursar en el programa 'Buscando talento nivel B'";

            compensaciones[1].textContent="12%";
            compensaciones[2].textContent="N/A";
            compensaciones[3].textContent="N/A";
            compensaciones[4].textContent="N/A";

            premios.innerHTML=`12% de comisión y nombrará a la consultora una emprendedora independiente. <br> Bono programa impulsando líderes 2021. Obteniendo hasta $80,000.00 pesos por cada Líder que crezca en tu 1ra línea. <br> Obtén el Saco Líder Ejecutiva y una mascada, al mantenerse como Líder de Grupo Estrella, un mes después de tu calificación a dicha categoría. <br>
            Bono A
            <ul>
            <li>Desprende 2 nuevos grupos y mantén tu categoría 2 meses posteriores al segundo desprendimiento. Obten un bono de 10,000 pesos. </li>
            <li>Desprende 3 nuevos grupos y mantén tu categoría los dos meses posteriores al 3° desprendimiento.Obten bono de 15,000. </li>
            <li>Desprende 5 nuevos grupos y mantén tu categoría dos meses posteriores al 5° desprendimiento. Obtén un bono de 30,000 pesos. Participación del programa buscando talento nivel B por 3 patrocinios. </li>
            </ul>
             Obsequio A- Tarjeta Mastercard de 1000 pesos.<br>
            Obsequio B opción 1- Licuadora Taurus, Obsequio B opción 2
            `;
            break;

        case 3:
            nivel.textContent = "Nivel 3";
            tituloNivel.textContent = "Líder de grupo estrella";

            requisitos[1].textContent="1";
            requisitos[2].textContent="12";
            requisitos[3].textContent="12";
            requisitos[4].textContent="9";
            requisitos[5].textContent="9";

            compensaciones[1].textContent="13%";
            compensaciones[2].textContent="7%";
            compensaciones[3].textContent="N/A";
            compensaciones[4].textContent="N/A";

            premios.innerHTML=`Obtención de 100% o más de ganancias en ventas <br>
            43% de descuento en pedido sugerido en diciembre 2021 <br>
            Del 08-14 de diciembre 40% en toda la línea de productos Terramar <br>
            15 de cierre 35% de descuento en toda la línea Terramar <br>
            En todo el mes 50% de descuento en toda la línea de productos Terramar <br>
            Programa 'Buscando talento nivel A', se necesita de 1 a 2 patrocinios <br>
            En los premios de 1 solo patrocinio:<br>
            <ol>
                <li>Opción 1: Licuadora Taurus</li>
                <li>Opción 2: Tarjeta MasterCard Terramar con 200 pesos y Beyond Lift en la promoción de 810 pesos, esto los recibe en enero 2022</li>
            </ol>
            Si son 2 patrocinios directos: <br>
            <ol>
                <li>Obsequio A: Tarjeta MasterCard con 400 pesos</li>
                <li>Obsequio B1: Licuadora Taurus</li>
                <li>Obsequio B2: Tarjeta MasterCard Terramar con 200 pesos y Beyond Lift en la promoción de 810 pesos, esto los recibe en enero 2022</li>
            </ol>`;
            break;

        case 4:
            nivel.textContent = "Nivel 4";
            tituloNivel.textContent = "Líder de grupo 2 estrellas";

            requisitos[1].textContent="2";
            requisitos[2].textContent="15";
            requisitos[3].textContent="15";
            requisitos[4].textContent="9";
            requisitos[5].textContent="2 grupos de 9 personas del grupo centro.";

            compensaciones[1].textContent="14%";
            compensaciones[2].textContent="7%";
            compensaciones[3].textContent="1%";
            compensaciones[4].textContent="N/A";

            premios.innerHTML=`Obtención de 100% o más de ganancias en ventas <br>
            43% de descuento en pedido sugerido en diciembre 2021 <br>
            Del 08-14 de diciembre 40% en toda la línea de productos Terramar <br>
            15 de cierre 35% de descuento en toda la línea Terramar <br>
            En todo el mes 50% de descuento en toda la línea de productos Terramar <br>
            Programa 'Buscando talento nivel A', se necesita de 1 a 2 patrocinios <br>
            En los premios de 1 solo patrocinio:<br>
            <ol>
                <li>Opción 1: Licuadora Taurus</li>
                <li>Opción 2: Tarjeta MasterCard Terramar con 200 pesos y Beyond Lift en la promoción de 810 pesos, esto los recibe en enero 2022</li>
            </ol>
            Si son 2 patrocinios directos: <br>
            <ol>
                <li>Obsequio A: Tarjeta MasterCard con 400 pesos</li>
                <li>Obsequio B1: Licuadora Taurus</li>
                <li>Obsequio B2: Tarjeta MasterCard Terramar con 200 pesos y Beyond Lift en la promoción de 810 pesos, esto los recibe en enero 2022</li>
            </ol>`;
            break;

        case 5:
            nivel.textContent = "Nivel 5";
            tituloNivel.textContent = "Líder de grupo 3 estrellas";

            requisitos[1].textContent="3";
            requisitos[2].textContent="18";
            requisitos[3].textContent="18";
            requisitos[4].textContent="9";
            requisitos[5].textContent="18";

            compensaciones[1].textContent="15%";
            compensaciones[2].textContent="7%";
            compensaciones[3].textContent="7%";
            compensaciones[4].textContent="1%";

            premios.innerHTML=`Obtención de 100% o más de ganancias en ventas <br>
            43% de descuento en pedido sugerido en diciembre 2021 <br>
            Del 08-14 de diciembre 40% en toda la línea de productos Terramar <br>
            15 de cierre 35% de descuento en toda la línea Terramar <br>
            En todo el mes 50% de descuento en toda la línea de productos Terramar <br>
            Programa 'Buscando talento nivel A', se necesita de 1 a 2 patrocinios <br>
            En los premios de 1 solo patrocinio:<br>
            <ol>
                <li>Opción 1: Licuadora Taurus</li>
                <li>Opción 2: Tarjeta MasterCard Terramar con 200 pesos y Beyond Lift en la promoción de 810 pesos, esto los recibe en enero 2022</li>
            </ol>
            Si son 2 patrocinios directos: <br>
            <ol>
                <li>Obsequio A: Tarjeta MasterCard con 400 pesos</li>
                <li>Obsequio B1: Licuadora Taurus</li>
                <li>Obsequio B2: Tarjeta MasterCard Terramar con 200 pesos y Beyond Lift en la promoción de 810 pesos, esto los recibe en enero 2022</li>
            </ol>`;
            break;

        case 6:
            nivel.textContent = "Nivel 6";
            tituloNivel.textContent = "Líder ejecutiva 5 estrellas";

            requisitos[1].textContent="5";
            requisitos[2].textContent="20";
            requisitos[3].textContent="20";
            requisitos[4].textContent="9";
            requisitos[5].textContent="20 consultoras";

            compensaciones[1].textContent="16%";
            compensaciones[2].textContent="7%";
            compensaciones[3].textContent="2%";
            compensaciones[4].textContent="1%";

            premios.innerHTML=`Obtención de 100% o más de ganancias en ventas <br>
            43% de descuento en pedido sugerido en diciembre 2021 <br>
            Del 08-14 de diciembre 40% en toda la línea de productos Terramar <br>
            15 de cierre 35% de descuento en toda la línea Terramar <br>
            En todo el mes 50% de descuento en toda la línea de productos Terramar <br>
            Programa 'Buscando talento nivel A', se necesita de 1 a 2 patrocinios <br>
            En los premios de 1 solo patrocinio:<br>
            <ol>
                <li>Opción 1: Licuadora Taurus</li>
                <li>Opción 2: Tarjeta MasterCard Terramar con 200 pesos y Beyond Lift en la promoción de 810 pesos, esto los recibe en enero 2022</li>
            </ol>
            Si son 2 patrocinios directos: <br>
            <ol>
                <li>Obsequio A: Tarjeta MasterCard con 400 pesos</li>
                <li>Obsequio B1: Licuadora Taurus</li>
                <li>Obsequio B2: Tarjeta MasterCard Terramar con 200 pesos y Beyond Lift en la promoción de 810 pesos, esto los recibe en enero 2022</li>
            </ol>`;
            break;
    
        case 7:
            nivel.textContent = "Nivel 7";
            tituloNivel.textContent = "Líder ejecutiva 8 estrellas";

            requisitos[1].textContent="8";
            requisitos[2].textContent="25";
            requisitos[3].textContent="25";
            requisitos[4].textContent="9";
            requisitos[5].textContent="De base son 1 patrocinio directo y 1 consultora patrocinando, pero pueden varias según el beneficio que se desea obtener.";

            compensaciones[1].textContent="17%";
            compensaciones[2].textContent="7%";
            compensaciones[3].textContent="2%";
            compensaciones[4].textContent="1%";

            premios.innerHTML=`Obtención de 100% o más de ganancias en ventas <br>
            43% de descuento en pedido sugerido en diciembre 2021 <br>
            Del 08-14 de diciembre 40% en toda la línea de productos Terramar <br>
            15 de cierre 35% de descuento en toda la línea Terramar <br>
            En todo el mes 50% de descuento en toda la línea de productos Terramar <br>
            Programa 'Buscando talento nivel A', se necesita de 1 a 2 patrocinios <br>
            En los premios de 1 solo patrocinio:<br>
            <ol>
                <li>Opción 1: Licuadora Taurus</li>
                <li>Opción 2: Tarjeta MasterCard Terramar con 200 pesos y Beyond Lift en la promoción de 810 pesos, esto los recibe en enero 2022</li>
            </ol>
            Si son 2 patrocinios directos: <br>
            <ol>
                <li>Obsequio A: Tarjeta MasterCard con 400 pesos</li>
                <li>Obsequio B1: Licuadora Taurus</li>
                <li>Obsequio B2: Tarjeta MasterCard Terramar con 200 pesos y Beyond Lift en la promoción de 810 pesos, esto los recibe en enero 2022</li>
            </ol>`;
            break;

        case 8:
            nivel.textContent = "Nivel 8";
            tituloNivel.textContent = "Líder ejecutiva 11 estrellas";

            requisitos[1].textContent="11";
            requisitos[2].textContent="30";
            requisitos[3].textContent="30";
            requisitos[4].textContent="9";
            requisitos[5].textContent="De base son 1 patrocinio directo y 1 consultora patrocinando, pero pueden varias según el beneficio que se desea obtener.";

            compensaciones[1].textContent="18%";
            compensaciones[2].textContent="8%";
            compensaciones[3].textContent="2%";
            compensaciones[4].textContent="1%";

            premios.innerHTML=`Obtención de 100% o más de ganancias en ventas <br>
            43% de descuento en pedido sugerido en diciembre 2021 <br>
            Del 08-14 de diciembre 40% en toda la línea de productos Terramar <br>
            15 de cierre 35% de descuento en toda la línea Terramar <br>
            En todo el mes 50% de descuento en toda la línea de productos Terramar <br>
            Programa 'Buscando talento nivel A', se necesita de 1 a 2 patrocinios <br>
            En los premios de 1 solo patrocinio:<br>
            <ol>
                <li>Opción 1: Licuadora Taurus</li>
                <li>Opción 2: Tarjeta MasterCard Terramar con 200 pesos y Beyond Lift en la promoción de 810 pesos, esto los recibe en enero 2022</li>
            </ol>
            Si son 2 patrocinios directos: <br>
            <ol>
                <li>Obsequio A: Tarjeta MasterCard con 400 pesos</li>
                <li>Obsequio B1: Licuadora Taurus</li>
                <li>Obsequio B2: Tarjeta MasterCard Terramar con 200 pesos y Beyond Lift en la promoción de 810 pesos, esto los recibe en enero 2022</li>
            </ol>`;
            break;

        case 9:
            nivel.textContent = "Nivel 9";
            tituloNivel.textContent = "Líder ejecutiva 15 estrellas";

            requisitos[1].textContent="15";
            requisitos[2].textContent="35";
            requisitos[3].textContent="35";
            requisitos[4].textContent="9";
            requisitos[5].textContent="De base son 1 patrocinio directo y 1 consultora patrocinando, pero pueden varias según el beneficio que se desea obtener.";

            compensaciones[1].textContent="19%";
            compensaciones[2].textContent="8%";
            compensaciones[3].textContent="2%";
            compensaciones[4].textContent="1%";

            premios.innerHTML=`Obtención de 100% o más de ganancias en ventas <br>
            43% de descuento en pedido sugerido en diciembre 2021 <br>
            Del 08-14 de diciembre 40% en toda la línea de productos Terramar <br>
            15 de cierre 35% de descuento en toda la línea Terramar <br>
            En todo el mes 50% de descuento en toda la línea de productos Terramar <br>
            Programa 'Buscando talento nivel A', se necesita de 1 a 2 patrocinios <br>
            En los premios de 1 solo patrocinio:<br>
            <ol>
                <li>Opción 1: Licuadora Taurus</li>
                <li>Opción 2: Tarjeta MasterCard Terramar con 200 pesos y Beyond Lift en la promoción de 810 pesos, esto los recibe en enero 2022</li>
            </ol>
            Si son 2 patrocinios directos: <br>
            <ol>
                <li>Obsequio A: Tarjeta MasterCard con 400 pesos</li>
                <li>Obsequio B1: Licuadora Taurus</li>
                <li>Obsequio B2: Tarjeta MasterCard Terramar con 200 pesos y Beyond Lift en la promoción de 810 pesos, esto los recibe en enero 2022</li>
            </ol>`;
            break;

        case 10:
            nivel.textContent = "Nivel 10";
            tituloNivel.textContent = "Partner independiente";

            requisitos[1].textContent="19";
            requisitos[2].textContent="50";
            requisitos[3].textContent="50";
            requisitos[4].textContent="9";
            requisitos[5].textContent="De base son 1 patrocinio directo y 1 consultora patrocinando, pero pueden varias según el beneficio que se desea obtener.";

            compensaciones[1].textContent="20%";
            compensaciones[2].textContent="8%";
            compensaciones[3].textContent="2%";
            compensaciones[4].textContent="1%";

            premios.innerHTML=`Obtención de 100% o más de ganancias en ventas <br>
            43% de descuento en pedido sugerido en diciembre 2021 <br>
            Del 08-14 de diciembre 40% en toda la línea de productos Terramar <br>
            15 de cierre 35% de descuento en toda la línea Terramar <br>
            En todo el mes 50% de descuento en toda la línea de productos Terramar <br>
            Programa 'Buscando talento nivel A', se necesita de 1 a 2 patrocinios <br>
            En los premios de 1 solo patrocinio:<br>
            <ol>
                <li>Opción 1: Licuadora Taurus</li>
                <li>Opción 2: Tarjeta MasterCard Terramar con 200 pesos y Beyond Lift en la promoción de 810 pesos, esto los recibe en enero 2022</li>
            </ol>
            Si son 2 patrocinios directos: <br>
            <ol>
                <li>Obsequio A: Tarjeta MasterCard con 400 pesos</li>
                <li>Obsequio B1: Licuadora Taurus</li>
                <li>Obsequio B2: Tarjeta MasterCard Terramar con 200 pesos y Beyond Lift en la promoción de 810 pesos, esto los recibe en enero 2022</li>
            </ol>`;
            break;
        default:
            break;
    }
}