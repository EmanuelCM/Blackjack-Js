

export const crearCarta=(carta,turno)=>{
    const  divCartasJugadores=document.querySelectorAll('.divCartas');

    const imgCarta=document.createElement('img'); //Creamos el elemento
    imgCarta.src=`assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta'); //agregar la clase css
    divCartasJugadores[turno].append(imgCarta);

}