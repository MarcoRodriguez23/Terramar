document.addEventListener('DOMContentLoaded',function(){
    iniciarApp();
});

function iniciarApp(){
    obtenerBotones();
}

function obtenerBotones(){
    const BaseAnimacion = "animate__animated";
    const animacion = "animate__heartBeat";

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
    const nivel = document.querySelector('#nivel');
    const tituloNivel = document.querySelector('#titulo-nivel');
    let requisitos = [];
    let compensaciones = [];
    
    for (let i = 1; i <=5; i++) {
        requisitos[i]= document.querySelector('#req_'+i);
        requisitos[i].classList.remove(BaseAnimacion);
        requisitos[i].classList.remove(animacion);
        console.log("quito animaciones en req");
    }
    for (let i = 1; i <=4; i++) {
        compensaciones[i]= document.querySelector('#comp_'+i);
        compensaciones[i].classList.remove(BaseAnimacion);
        compensaciones[i].classList.remove(animacion);
        console.log("quito animaciones en comp");
    }
    nivel.classList.remove(BaseAnimacion);   
    nivel.classList.remove(animacion); 
    tituloNivel.classList.remove(BaseAnimacion);   
    tituloNivel.classList.remove(animacion);  
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

    

    for (let i = 1; i <=5; i++) {
        requisitos[i]= document.querySelector('#req_'+i);
        requisitos[i].classList.add(BaseAnimacion);
        requisitos[i].classList.add(animacion);
        console.log("agregando animaciones a req");
    }

    for (let i = 1; i <=4; i++) {
        compensaciones[i]= document.querySelector('#comp_'+i);
        compensaciones[i].classList.add(BaseAnimacion);
        compensaciones[i].classList.add(animacion);
        console.log("agregando animaciones a comp");
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

            premios.innerHTML=`Obtenci??n de 100% o m??s de ganancias en ventas <br>
            43% de descuento en pedido sugerido en diciembre 2021 <br>
            Del 08-14 de diciembre 40% en toda la l??nea de productos Terramar <br>
            15 de cierre 35% de descuento en toda la l??nea Terramar <br>
            En todo el mes 50% de descuento en toda la l??nea de productos Terramar <br>
            Programa 'Buscando talento nivel A', se necesita de 1 a 2 patrocinios <br>
            En los premios de 1 solo patrocinio:<br>
            <ul>
                <li>Opci??n 1: Licuadora Taurus</li>
                <li>Opci??n 2: Tarjeta MasterCard Terramar con 200 pesos y Beyond Lift en la promoci??n de 810 pesos, esto los recibe en enero 2022</li>
            </ul>
            Si son 2 patrocinios directos: <br>
            <ul>
                <li>Obsequio A: Tarjeta MasterCard con 400 pesos</li>
                <li>Obsequio B1: Licuadora Taurus</li>
                <li>Obsequio B2: Tarjeta MasterCard Terramar con 200 pesos y Beyond Lift en la promoci??n de 810 pesos, esto los recibe en enero 2022</li>
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

            premios.innerHTML=`12% de comisi??n y nombrar?? a la consultora una emprendedora independiente. <br> 
            Bono programa impulsando l??deres 2021. Obteniendo hasta $80,000.00 pesos por cada L??der que crezca en tu 1ra l??nea. <br> 
            Obt??n el Saco L??der Ejecutiva y una mascada, al mantenerse como L??der de Grupo Estrella, un mes despu??s de tu calificaci??n a dicha categor??a. <br>
            Bono A <br>
            <ul>
            <li>Desprende 2 nuevos grupos y mant??n tu categor??a 2 meses posteriores al segundo desprendimiento. Obten un bono de 10,000 pesos. </li>
            <li>Desprende 3 nuevos grupos y mant??n tu categor??a los dos meses posteriores al 3?? desprendimiento. Obten bono de 15,000. </li>
            <li>Desprende 5 nuevos grupos y mant??n tu categor??a dos meses posteriores al 5?? desprendimiento. Obt??n un bono de 30,000 pesos. Participaci??n del programa buscando talento nivel B por 3 patrocinios. </li>
            </ul>
             Obsequio A <br>
            Tarjeta Mastercard de 1000 pesos.<br>
            Obsequio B <br>
            <ul>
            <li>opci??n 1- Licuadora Taurus</li>
            <li>opci??n 2- Tarjeta Mastercard con 200 pesos y Beyond Lift en la promoci??n de 810 pesos estos los recibe en enero 2022. Por cada 3 PATROCINIOS DIRECTOS, recibe $1,000.00 pesos en una Tarjeta MasterCard TERRAMAR. O podr?? participar igualmente en el programa buscando talento Nivel C si patrocina a 2 o m??s consultoras. </li>
            </ul>
            2 consultoras directas patrocinando: Bono vale 1,200 pesos <br>
            3 consultoras directas patrocinando: Bono vale 3,000 pesos o tarjeta Mastercard de 1,000 pesos <br>
            6 consultoras directas patrocinando: vale de 6,000 pesos o 2,000 pesos en tarjeta Master card. <br>
            9 consultoras directas patrocinando: vale de 9,000 pesos o tarjeta mastercard de 3,000 pesos. <br>
            Por cada 3 CONSULTORAS DIRECTAS PATROCINANDO, recibes 1 vale por $3,000.00 pesos precio p??blico en productos TERRAMAR ?? $1,000.00 pesos en una Tarjeta MasterCard TERRAMAR.
            `;
            break;

        case 3:
            nivel.textContent = "Nivel 3";
            tituloNivel.textContent = "L??der de grupo estrella";

            requisitos[1].textContent="1";
            requisitos[2].textContent="12";
            requisitos[3].textContent="12";
            requisitos[4].textContent="9";
            requisitos[5].textContent="9";

            compensaciones[1].textContent="13%";
            compensaciones[2].textContent="7%";
            compensaciones[3].textContent="N/A";
            compensaciones[4].textContent="N/A";

            premios.innerHTML=`Comisi??n del 13%, la empresa premiar?? por desarrollar a las dem??s consultoras que las personas que ingresen a su grupo de la consultora tambi??n decidan hacer un grupo de 9 personas. En el momento en el que se logre que una de las consultoras dentro del grupo logre este nivel de emprendedora, la consultora obtendr?? el nivel de l??der de grupo estrella.<br>
            SMARTWATCH ?? HUAWEI Y9 ?? COMPUTADORA PORT??TIL ?? PANTALLA SMART TV DE 43???. Al contar por 2 meses con 5 consultoras patrocinando, de las cuales 3 son directas.<br>
           Saco l??der ejecutiva, mascada, lo podr?? obtener despu??s de mantenerse como L??der de Grupo Estrella, un mes despu??s de tu calificaci??n a dicha categor??a. <br>
           Bono programa impulsando l??deres.
           <ul>
           <li> Bono A </li>
           </ul>
           Desprende 2 nuevos grupos y mant??n tu categor??a 2 meses posteriores al segundo desprendimiento. Obten un bono de 10,000 pesos. <br>
           Desprende 3 nuevos grupos y mant??n tu categor??a los dos meses posteriores al 3?? desprendimiento.Obten bono de 15,000 pesos <br>
           Desprende 5 nuevos grupos y mant??n tu categor??a dos meses posteriores al 5?? desprendimiento. Obt??n un bono de 30,000 pesos. <br>
           Participaci??n del programa buscando talento nivel B por 3 patrocinios. <br>
           Obsequio A- Tarjeta Mastercard de 1000 pesos. <br>
           Obsequio B 
           <ul>
           <li>opci??n 1- Licuadora Taurus</li>
           <li>opci??n 2- Tarjeta Mastercard con 200 pesos y Beyond Lift en la promoci??n de 810 pesos estos los recibe en enero 2022. </li>
           </ul>
           Por cada 3 PATROCINIOS DIRECTOS, recibe $1,000.00 pesos en una Tarjeta MasterCard TERRAMAR.
           `;
            break;

        case 4:
            nivel.textContent = "Nivel 4";
            tituloNivel.textContent = "L??der de grupo 2 estrellas";

            requisitos[1].textContent="2";
            requisitos[2].textContent="15";
            requisitos[3].textContent="15";
            requisitos[4].textContent="9";
            requisitos[5].textContent="2 grupos de 9 personas del grupo centro.";

            compensaciones[1].textContent="14%";
            compensaciones[2].textContent="7%";
            compensaciones[3].textContent="1%";
            compensaciones[4].textContent="N/A";

            premios.innerHTML=`Ganar?? comisi??n de 14% y de los grupos el 7%.<br> 
            Participar en el programa Terramar al volante por un VW vento. Contando con
            <ul>
             <li>3 meses de bases. </li> 
            <li> Bases m??s bajas del mercado. </li>
             <li>2 a??os de mantenimiento y Bono programa impulsando l??deres. Bono A </li>
            </ul>
            Desprende 2 nuevos grupos y mant??n tu categor??a 2 meses posteriores al segundo desprendimiento. Obten un bono de 10,000 pesos.<br>
            Desprende 3 nuevos grupos y mant??n tu categor??a los dos meses posteriores al 3?? desprendimiento.Obten bono de 15,000 pesos <br>
            Desprende 5 nuevos grupos y mant??n tu categor??a dos meses posteriores al 5?? desprendimiento. Obt??n un bono de 30,000 pesos.
            `;
            break;

        case 5:
            nivel.textContent = "Nivel 5";
            tituloNivel.textContent = "L??der de grupo 3 estrellas";

            requisitos[1].textContent="3";
            requisitos[2].textContent="18";
            requisitos[3].textContent="18";
            requisitos[4].textContent="9";
            requisitos[5].textContent="18";

            compensaciones[1].textContent="15%";
            compensaciones[2].textContent="7%";
            compensaciones[3].textContent="7%";
            compensaciones[4].textContent="1%";

            premios.innerHTML=`Se tendr?? el 15% de comisi??n sobre el grupo central y sobre grupos desprendidos que tienen que ser 3 el 7% como m??nimo de comisi??n. Tambi??n se tiene la oportunidad de ingresar al programa de Terramar al volante.<br>
            Bono programa impulsando l??deres 2021.
            `;
            break;

        case 6:
            nivel.textContent = "Nivel 6";
            tituloNivel.textContent = "L??der ejecutiva 5 estrellas";

            requisitos[1].textContent="5";
            requisitos[2].textContent="20";
            requisitos[3].textContent="20";
            requisitos[4].textContent="9";
            requisitos[5].textContent="20 consultoras";

            compensaciones[1].textContent="16%";
            compensaciones[2].textContent="7%";
            compensaciones[3].textContent="2%";
            compensaciones[4].textContent="1%";

            premios.innerHTML=`Se ganar?? el 16% del grupo central y de los 5 grupos el 7%, adicional de que se puede ganar el coche Actitud 2016, tambi??n Terramar le entregar?? a la l??der un reconocimiento que es un anillo de zafiros y rub??es oro de 18 quilates.<br>
            Participaci??n de Terramar al volante por un VW Vento. <br>
            Bono programa impulsando l??deres 2021. 
            <ul>
            <li> Bono B </li>
            </ul>
            Logra que una estrella de tu primera l??nea desprenda una emprendedora y ambas deben mantenerse activas 2 meses posteriores al desprendimiento obteniendo un bono de 10,000 pesos.<br>
            Logra que una estrella de tu primera l??nea desprenda 3 emprendedoras, las 4 deben mantenerse activas 2 meses posteriores al desprendimiento. Obten un bono de 20,000 pesos <br>
            Logra que una estrella de tu primera l??nea desprenda 5 emprendedoras, las 6 deben mantenerse activas 2 meses posteriores al desprendimiento obteniendo un bono de 50,000 pesos. <br>
            Ayuda de venta de l??nea B
            <ul>
            <li>KIT MUESTRAS MINI LABIALES (18) CLAVE 79048 / $75.00 IVA INCLUIDO</li>
            <li>BOLSA TERRAMAR CLAVE 79049 / $120.00 IVA INCLUIDO</li>
            <li>SACHET VITA??LEO / 5 ml CLAVE 78321 / $11.00 IVA INCLUIDO</li>
            <li>FOLLETO DE PROMOCIONES DICIEMBRE 2021 CLAVE 78344/ $11.00 IVA INCLUIDO</li>
            <li>FOLLETO DE PROMOCIONES ENERO 2022 CLAVE 78346/ $11.00 IVA INCLUIDO</li>
            <li>REVISTA TERRAMAR DICIEMBRE 2021 CLAVE 78345 / $7.00 IVA INCLUIDO</li>
            <li>AGENDA TERRAMAR 2022 CLAVE 87825 / $175.00 IVA INCLUIDO</li>
            <li>Programa anfitriona en donde se te hacen descuentos en los productos: 
            <ul>
             <li>CELLULAR STRENGTH SYSTEM CLAVE 90002 $355.00 IVA INCLUIDO BEYOND LIFT CLAVE 90005 $180.00 IVA INCLUIDO</li>
            <li>TIME FREEZE CLAVE 90772 $230.00 IVA INCLUIDO</li>
            <li>HYDRACELL CLAVE 91040 $250.00 IVA INCLUIDO</li>
            <li>GUANTES INT. GEL / 2 pzs CLAVE 23033 / $100.00 IVA INCLUIDO</li>
            </ul>
            </li>
            </ul>
            `;
            break;
    
        case 7:
            nivel.textContent = "Nivel 7";
            tituloNivel.textContent = "L??der ejecutiva 8 estrellas";

            requisitos[1].textContent="8";
            requisitos[2].textContent="25";
            requisitos[3].textContent="25";
            requisitos[4].textContent="9";
            requisitos[5].textContent="De base son 1 patrocinio directo y 1 consultora patrocinando, pero pueden varias seg??n el beneficio que se desea obtener.";

            compensaciones[1].textContent="17%";
            compensaciones[2].textContent="7%";
            compensaciones[3].textContent="2%";
            compensaciones[4].textContent="1%";

            premios.innerHTML=`Obtienes pendientes de oro, zafiros y rub??es al cumplir las bases que permiten llegar al nivel.<br>
            Acceso al programa Terramar al volante opci??n 1 al lograr que el GC cumpla durante 3 meses 1 m??dulo personal, 1 patrocinio directo y cuente con 8 consultoras patrocinando en el mismo, adem??s de contar con dos emprendedoras independientes en la primer linea que tengan 1 m??dulo personal, 1 patrocinio directo y 6 consultoras patrocinando en su grupo central. <br>
            Acceso al programa Terramar al volante opci??n 2 al lograr que el GC cumpla durante 3 meses 1 m??dulo personal, 1 patrocinio directo y cuente con 8 consultoras patrocinando en el mismo, adem??s de contar con tres o m??s emprendedoras independientes en la primer linea que tengan 1 m??dulo personal, 1 patrocinio directo y un total de 12 consultoras patrocinando en su grupo central. <br>
            Acceso al programa Bono impulsando l??deres 2021 tipo B, al lograr que 1 estrella de tu primer l??nea desprenda 1 emprendedora y ambas se mantengan activas 2 meses posteriores a esto, se obtienen $10,000; si se logra que 1 estrella de primer l??nea desprenda 3 emprendedoras y las 4 se mantengan activas los 2 meses posteriores a esto, obtendr?? $20,000; pero si logra que 1 estrella de primer l??nea desprenda 5 emprendedoras y las 6 se mantengan activas los 2 meses posteriores a esto, obtendr?? $50,000. <br>
            Premio de actividad al realizar un pedido de un m??dulo mensual se obtiene un regalo anunciado en la revista mensual. Poder participar en el programa ???Buscando Talento Nivel C???, manteniendo a dos consultoras con un patrocinio cada una, hacer un pedido de un m??dulo pagado durante el mes de anuncio y que las consultoras repitan pedido al mes siguiente, se obtiene un vale de producto terramar con valor de $1,200. Entre m??s consultoras patrocinen, aumenta el valor del premio. <br>
            Acceso a la promoci??n ???Crecer te hace ganar??? donde se puede ascender de forma r??pida a partner independiente, se obtiene al desprender un nuevo grupo y durante los 4 meses siguientes a esto se paga la mediaci??n con el porcentaje del grupo central.
            `;
            break;

        case 8:
            nivel.textContent = "Nivel 8";
            tituloNivel.textContent = "L??der ejecutiva 11 estrellas";

            requisitos[1].textContent="11";
            requisitos[2].textContent="30";
            requisitos[3].textContent="30";
            requisitos[4].textContent="9";
            requisitos[5].textContent="De base son 1 patrocinio directo y 1 consultora patrocinando, pero pueden varias seg??n el beneficio que se desea obtener.";

            compensaciones[1].textContent="18%";
            compensaciones[2].textContent="8%";
            compensaciones[3].textContent="2%";
            compensaciones[4].textContent="1%";

            premios.innerHTML=`Obtienes Gargantilla de oro, zafiros y rub??es al cumplir las bases que permiten llegar al nivel. <br>
            Acceso al programa Bono impulsando l??deres 2021 tipo B, al lograr que 1 estrella de tu primer l??nea desprenda 1 emprendedora y ambas se mantengan activas 2 meses posteriores a esto, se obtienen $10,000; si se logra que 1 estrella de primer l??nea desprenda 3 emprendedoras y las 4 se mantengan activas los 2 meses posteriores a esto, obtendr?? $20,000; pero si logra que 1 estrella de primer l??nea desprenda 5 emprendedoras y las 6 se mantengan activas los 2 meses posteriores a esto, obtendr?? $50,000. <br>
            Premio de actividad al realizar un pedido de un m??dulo mensual se obtiene un regalo anunciado en la revista mensual. Poder participar en el programa ???Buscando Talento Nivel C???, manteniendo a dos consultoras con un patrocinio cada una, hacer un pedido de un m??dulo pagado durante el mes de anuncio y que las consultoras repitan pedido al mes siguiente, se obtiene un vale de producto terramar con valor de $1,200.Entre m??s consultoras patrocinen, aumenta el valor del premio. <br>
            Acceso a la promoci??n ???Crecer te hace ganar??? donde se puede ascender de forma r??pida a partner independiente, se obtiene al desprender un nuevo grupo y durante los 4 meses siguientes a esto se paga la mediaci??n con el porcentaje del grupo central. <br>
            Acceso a Plan de retiro terramar al mantener 5 o 10 a??os consecutivos su nivel dentro del linaje Terramar, obteniendo el pago del 100% de mediaci??n durante 10 a??os a mantener nivel por 5 a??os y si se mantiene durante 10 a??os se pagar?? el 100% de la mediaci??n de por vida.
            `;
            break;

        case 9:
            nivel.textContent = "Nivel 9";
            tituloNivel.textContent = "L??der ejecutiva 15 estrellas";

            requisitos[1].textContent="15";
            requisitos[2].textContent="35";
            requisitos[3].textContent="35";
            requisitos[4].textContent="9";
            requisitos[5].textContent="De base son 1 patrocinio directo y 1 consultora patrocinando, pero pueden varias seg??n el beneficio que se desea obtener.";

            compensaciones[1].textContent="19%";
            compensaciones[2].textContent="8%";
            compensaciones[3].textContent="2%";
            compensaciones[4].textContent="1%";

            premios.innerHTML=`Acceso al programa Terramar al volante premium al lograr calificar en el nivel y si durante 3 meses se mantienen 50 consultoras activas, 50 m??dulos en GC, 15 Consultoras patrocinando en GC, 15 grupos activos en primer linea, 5 lideres o m??s en primer l??nea con categor??as a partir de LE5E y cerrar en su categor??a. <br>
            Premio de actividad al realizar un pedido de un m??dulo mensual se obtiene un regalo anunciado en la revista mensual. <br>
            Poder participar en el programa ???Buscando Talento Nivel C???, manteniendo a dos consultoras con un patrocinio cada una, hacer un pedido de un m??dulo pagado durante el mes de anuncio y que las consultoras repitan pedido al mes siguiente, se obtiene un vale de producto terramar con valor de $1,200.Entre m??s consultoras patrocinen, aumenta el valor del premio. <br>
            Acceso a la promoci??n ???Crecer te hace ganar??? donde se puede ascender de forma r??pida a partner independiente, se obtiene al desprender un nuevo grupo y durante los 4 meses siguientes a esto se paga la mediaci??n con el porcentaje del grupo central. <br>
            Acceso a Plan de retiro terramar al mantener 5 o 10 a??os consecutivos su nivel dentro del linaje Terramar, obteniendo el pago del 100% de mediaci??n durante 10 a??os a mantener nivel por 5 a??os y si se mantiene durante 10 a??os se pagar?? el 100% de la mediaci??n de por vida.
            `;
            break;

        case 10:
            nivel.textContent = "Nivel 10";
            tituloNivel.textContent = "Partner independiente";

            requisitos[1].textContent="19";
            requisitos[2].textContent="50";
            requisitos[3].textContent="50";
            requisitos[4].textContent="9";
            requisitos[5].textContent="De base son 1 patrocinio directo y 1 consultora patrocinando, pero pueden varias seg??n el beneficio que se desea obtener.";

            compensaciones[1].textContent="20%";
            compensaciones[2].textContent="8%";
            compensaciones[3].textContent="2%";
            compensaciones[4].textContent="1%";

            premios.innerHTML=`Estelar Fase 1 se obtiene seguro de vida anual de $1,000,000, al cumplir con los 4 meses de mantenimiento en la categor??a, y un bono estelar de $1,000,000 si se cuenta con 20 l??deres ejecutivas 5 estrellas en la primera l??nea cerrando en categor??a donde cada una realice y pague 30 m??dulos mensuales y se tenga 20 consultoras activas, adem??s de tener 75 consultoras independientes activas en GC y mantenerlas 6 meses consecutivos. <br>
            Estelar Fase 2 se obtiene un bono estelar diamante de $2,000,000 si se cuenta con 20 l??deres ejecutivas 15 estrellas en la primera l??nea cerrando en categor??a, adem??s de tener 100 consultoras independientes activas en GC y mantenerlas 6 meses consecutivos. <br>
            Poder participar en el programa ???Buscando Talento Nivel C???, manteniendo a dos consultoras con un patrocinio cada una, hacer un pedido de un m??dulo pagado durante el mes de anuncio y que las consultoras repitan pedido al mes siguiente, se obtiene un vale de producto terramar con valor de $1,200.Entre m??s consultoras patrocinen, aumenta el valor del premio. <br>
            Acceso a Plan de retiro terramar al mantener 5 o 10 a??os consecutivos su nivel dentro del linaje Terramar, obteniendo el pago del 100% de mediaci??n durante 10 a??os a mantener nivel por 5 a??os y si se mantiene durante 10 a??os se pagar?? el 100% de la mediaci??n de por vida.
            `;
            break;
        default:
            break;
    }
    
    setTimeout(() => {
        resetearAnimaciones(BaseAnimacion,animacion);
    }, 1500);
}