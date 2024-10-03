


import {pedirCarta,crearCarta,acumularPuntos,isWiner} from '../usecases';

export const turnoCPU=( puntosJugadores,deck)=>{
   
  
    let puntosCPU=0;
        
        do{
            let turno=puntosJugadores.length-1;
            const carta=pedirCarta(deck);
            puntosCPU =acumularPuntos(turno,carta,puntosJugadores);
            crearCarta(carta,turno);
            
        }while((puntosJugadores[0]>=puntosCPU)&&(puntosJugadores[0]<=21));
        
        isWiner(puntosJugadores);

}