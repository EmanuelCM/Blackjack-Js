import {valorCarta} from '../usecases';


export const acumularPuntos=(turno,carta,puntosJugadores)=>{
    const smallPuntos=document.querySelectorAll('small');

    puntosJugadores[turno]=puntosJugadores[turno]+valorCarta(carta);
    smallPuntos[turno].innerText=puntosJugadores[turno];
    return puntosJugadores[turno];
} 