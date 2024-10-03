import { result } from "underscore";


export const isWiner=(puntosJugadores)=> {

    const [puntosJugador,puntosCPU]=puntosJugadores;

    setTimeout(() => {
        let resultado;
        resultado=(puntosJugador===puntosCPU)
        ?alert('Empate')
        :(puntosJugador>21)
        ?alert('Perdiste')
        : (puntosCPU>21)
        ?alert('ganaste')
        :(puntosJugador>puntosCPU)
        ?alert('ganaste')
        :alert("perdiste")

        
    }, 100);   

}