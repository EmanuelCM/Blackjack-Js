import _ from 'underscore';

/**
 * Esta funcion crea un deck de cartas 
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C','D','H','S']
 * @param {array} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {array} regresa un nuevo deck de cartas
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    
    if(!tiposDeCarta || tiposDeCarta.length===0) 
        throw new Error('El argumento tiposDeCartas como array de String no puede estar vacio');
    if(!tiposEspeciales || tiposEspeciales.length===0)  
        throw new Error('El argumento tiposEspeciales como array de String no puede estar vacio');
    
    let deck = [];

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCarta) {
            deck.push(i + tipo);
        }
    }
    for (let especial of tiposEspeciales) {
        for (let tipo of tiposDeCarta) {
            deck.push(especial + tipo);
        }
    }
    deck = _.shuffle(deck);
    return deck;
}
//usamos para realizar una exportacion global
// export default crearDeck;