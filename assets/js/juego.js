
/**
 * 2C = Two of club
 * 2D = Two of diamonds
 * 2H = Two of hearts
 * 2S = Two of spades
 */

//! Funcion Anonima 
// se usa para el patron modulo 
const miModulo=(()=>{

    "use strict"

    let deck            = [];
    const tipos         = ['C','D','H','S'],
          espedciales   = ['A','J','Q','K'];
 

    let puntosJugadores=[];

    //Referencias HTML
    const btnPedir=document.querySelector('#btnPedir'),
          btnDetener=document.querySelector('#btnDetener'),
          btnNuevo=document.querySelector('#btnNuevo');


    const smallPuntos=document.querySelectorAll('small'),
          divCartasJugadores=document.querySelectorAll('.divCartas')
  
    // smallPuntosJugador.innerText=puntosJugador

//Inicializar juego 
const inicializarJuego=(numJugadores=2)=>{
        deck= crearDeck();
    
        puntosJugadores=[];

        for(let i=0;i<numJugadores;i++){
            puntosJugadores.push(0)
        }
        smallPuntos.forEach(elem=>elem.innerText=0);
        divCartasJugadores.forEach(elem=>elem.innerHTML='');

        btnDetener.disabled=false;
        btnPedir.disabled=false;
    
}

    //Crea nuevo Deck
  const crearDeck=()=>{
        deck=[];
        for (let i=2;i<=10;i++){
            for( let tipo of tipos ){
                deck.push(i+tipo);
            }
        }
        for(let especial of espedciales){
            for (let tipo of tipos){
                deck.push(especial+tipo);

            }
        }
        return  _.shuffle(deck);
    }

 

    //Tomar una carta
    const pedirCarta=()=>{

            if(deck.length===0){
                throw 'No hay mas cartas'
            }
            return deck.pop();
    }


    const valorCarta=(carta)=>{

    const valor =carta.substring(0,carta.length-1);
        
    return(!isNaN(valor)) 
        ? valor*1
        : (valor==='A')
            ?11
            :10
    }


    const acumularPuntos=(turno,carta)=>{
        puntosJugadores[turno]=puntosJugadores[turno]+valorCarta(carta);
        smallPuntos[turno].innerText=puntosJugadores[turno];
        return puntosJugadores[turno];
    }

    const crearCarta=(carta,turno)=>{

        const imgCarta=document.createElement('img'); //Creamos el elemento
        imgCarta.src=`assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta'); //agregar la clase css
        divCartasJugadores[turno].append(imgCarta);

    }


    const turnoCPU=( puntosMinimos)=>{
        let puntosCPU=0;
            
            do{
                let turno=puntosJugadores.length-1;
                const carta=pedirCarta();
                puntosCPU =acumularPuntos(turno,carta);
                crearCarta(carta,turno);
                
            }while((puntosMinimos>=puntosCPU)&&(puntosMinimos<=21));

       
            isWiner();

    }


    //! Eventos 
    // usamos el listener para escuchar al boton y hacemos un callback al mandar una funcion por el argumento 
    btnPedir.addEventListener('click',function(){
        
        const carta=pedirCarta();
        
        let  puntosJugador=  acumularPuntos(0,carta)
        console.log({puntosJugador});

        crearCarta(carta,0);

        if(puntosJugador>21){
            btnPedir.disabled =true;
            btnDetener.disabled =true;
            turnoCPU(puntosJugador);
    
            
        }else if(puntosJugador===21){
            btnPedir.disabled =true;
            btnDetener.disabled =true;
            turnoCPU(puntosJugador);
        }


    }
    )

    btnDetener.addEventListener('click',function(){
        console.log(puntosJugadores[0]);
        turnoCPU(puntosJugadores[0]);
        btnPedir.disabled    =true;
        btnDetener.disabled  =true;

    })

    const isWiner=(resultado=>{
        const [puntosJugador,puntosCPU]=puntosJugadores;

        setTimeout(() => {
            resultado=(puntosJugador===puntosCPU)
            ?alert('Empate')
            :((puntosJugador>21))
            ?alert('Perdiste')
            : (puntosCPU>21)
            ?alert('ganaste')
            :(puntosJugador>puntosCPU)
            ?alert('ganaste')
            :alert("perdiste")
            console.log(resultado);
            
        }, 100);   

    })


    btnNuevo.addEventListener('click',()=>{

        inicializarJuego();
 
    })

    return {
        nuevoJuego:inicializarJuego
    };
})();

