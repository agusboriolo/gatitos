const select = document.querySelector('select');
select.addEventListener('change', signos);

function signos() {
    const eleccion = select.value;
    const img = document.querySelector('img');

    if (img.src) {
       img.style.display = "block";
    }

    switch(eleccion){
        case "aries":
            img.src='imagenes/aries.jpg'
            break;
        case "tauro":
            img.src='imagenes/tauro.jpg'
            break;
        case "geminis":
            img.src='imagenes/geminis.jpg'
            break;
        case "cancer":
            img.src='imagenes/cancer.jpg'
            break;
        case "leo":
            img.src='imagenes/leo.jpg'
            break;
        case "virgo":
            img.src='imagenes/virgo.jpg'
            break;
        case "libra":
            img.src='imagenes/libra.jpg'
            break;
        case "escorpio":
            img.src='imagenes/escorpio.jpg'
            break;
        case "sagitario":
            img.src='imagenes/sagitario.jpg'
            break;
        case "capricornio":
            img.src='imagenes/capricornio.jpg'
            break;
        case "acuario":
            img.src='imagenes/acuario.jpg'
            break;
        case "piscis":
            img.src='imagenes/piscis.jpg'
            break;

    }
}
