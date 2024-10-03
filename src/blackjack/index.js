
import _ from 'underscore';
import {acumularPuntos, crearDeck,pedirCarta,crearCarta}from './usecases'
import { turnoCPU } from './usecases/turno-cpu';
//! Funcion Anonima 



const miModulo=(()=>{

  "use strict"
 let  deck = [];
  const tipos = ['C', 'D', 'H', 'S'],
        tiposEspeciales = ['A', 'J', 'Q', 'K']; 

  let puntosJugadores=[];

  //Referencias HTML
  const btnPedir=document.querySelector('#btnPedir'),
        btnDetener=document.querySelector('#btnDetener'),
        btnNuevo=document.querySelector('#btnNuevo');


  const smallPuntos=document.querySelectorAll('small'),
        divCartasJugadores=document.querySelectorAll('.divCartas')
     


//Inicializar juego 
const inicializarJuego=(numJugadores=2)=>{
    deck=crearDeck(tipos, tiposEspeciales) ; 
  
      puntosJugadores=[];

      for(let i=0;i<numJugadores;i++){
          puntosJugadores.push(0)
      }
      smallPuntos.forEach(elem=>elem.innerText=0);
      divCartasJugadores.forEach(elem=>elem.innerHTML='');

      btnDetener.disabled=false;
      btnPedir.disabled=false;
  
}
  //! Eventos 
  // usamos el listener para escuchar al boton y hacemos un callback al mandar una funcion por el argumento 
  btnPedir.addEventListener('click',function(){
      
      const carta=pedirCarta(deck);
      
      let  puntosJugador=  acumularPuntos(0,carta,puntosJugadores)
      console.log({puntosJugador});

      crearCarta(carta,0,);

      if(puntosJugador>21){
          btnPedir.disabled =true;
          btnDetener.disabled =true;
          turnoCPU(puntosJugadores,deck,);
  
          
      }else if(puntosJugador===21){
          btnPedir.disabled =true;
          btnDetener.disabled =true;
          turnoCPU(puntosJugadores,deck);
      }


  }
  )

  btnDetener.addEventListener('click',function(){
      console.log(puntosJugadores[0]);
      turnoCPU(puntosJugadores,deck);
      btnPedir.disabled    =true;
      btnDetener.disabled  =true;

  })

  btnNuevo.addEventListener('click',()=>{
      inicializarJuego();
  })
  return {
      nuevoJuego:inicializarJuego
  };
})();

