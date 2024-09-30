
/**
 * 2C = Two of club
 * 2D = Two of diamonds
 * 2H = Two of hearts
 * 2S = Two of spades
 */

let deck            = [];
const tipos         = ['C','D','H','S'];
const espedciales   = ['A','J','Q','K']
let newDeck;
let puntosJugador       =0;
    puntosCPU   =0;
let jugadorPerdio=false;
let resultado;

//Referencias HTML
const btnPedir=document.querySelector('#btnPedir');
const btnDetener=document.querySelector('#btnDetener');
const btnNuevo=document.querySelector('#btnNuevo');
const smallPuntos=document.querySelectorAll('small');
const divCartaJugador=document.querySelector('#jugador-cartas') // #llamar por ID
const divCartaCPU=document.querySelector('#computadora-cartas') // #llamar por ID
// smallPuntosJugador.innerText=puntosJugador
//Crea nuevo Deck
const crearDeck=()=>{
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
    return  deck=_.shuffle(deck);
}

crearDeck();
console.log(deck);


//Tomar una carta
const pedirCarta=()=>{

        if(deck.length===0){
            throw 'No hay mas cartas'
        }else{
        }
        const carta=deck.pop();
        

        console.log(carta);
        return carta;
}

const valorCarta=(carta)=>{

const valor =carta.substring(0,carta.length-1);
    
 return(!isNaN(valor)) 
    ? valor*1
    : (valor==='A')
        ?11
        :10
}

const turnoCPU=( puntosMinimos)=>{


        do{
       
            const carta=pedirCarta();
            puntosCPU=puntosCPU+valorCarta(carta);
            smallPuntos[1].innerText=puntosCPU;
            
            const imgCarta=document.createElement('img'); //Creamos el elemento
            imgCarta.src=`assets/cartas/${carta}.png`;
            imgCarta.classList.add('carta'); //agregar la clase css
            divCartaCPU.append(imgCarta);

           
         }while((puntosMinimos>=puntosCPU)&&(puntosMinimos<=21));
    
      isWiner();




}






//! Eventos 
// usamos el listener para escuchar al boton y hacemos un callback al mandar una funcion por el argumento 
btnPedir.addEventListener('click',function(){
    const carta=pedirCarta();
    puntosJugador=puntosJugador+valorCarta(carta);
    smallPuntos[0].innerText=puntosJugador;
    
    const imgCarta=document.createElement('img'); //Creamos el elemento
    imgCarta.src=`assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta'); //agregar la clase css
     divCartaJugador.append(imgCarta);

     if(puntosJugador>21){
         jugadorPerdio=true;
         btnPedir.disabled =true;
         btnDetener.disabled =true;
         turnoCPU(puntosJugador);
   
         
    }else if(puntosJugador===21){
        console.log('21,genial');
        btnPedir.disabled =true;
        btnDetener.disabled =true;
        turnoCPU(puntosJugador);
     }


}
)

btnDetener.addEventListener('click',function(){

    turnoCPU(puntosJugador);
    btnPedir.disabled    =true;
    btnDetener.disabled  =true;

})

 const isWiner=(resultado=>{
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
        
    }, 10);   

 })


 btnNuevo.addEventListener('click',()=>{


    deck=  [];
    deck=  crearDeck();
    puntosJugador=0;
    puntosCPU=0;

    smallPuntos[0].innerText=0;
    smallPuntos[1].innerText=0;

    divCartaJugador.innerHTML='';
    divCartaCPU.innerHTML='';

    btnDetener.disabled=false;
    btnPedir.disabled=false;
 })



