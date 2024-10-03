

/**
 * 
 * @param {Array <String>} arrelgo string
 * @returns {String} ultima carta del deck 
 */
export const pedirCarta=(deck)=>{

    if(!deck    || deck.length===0){
        throw 'No hay mas cartas'
    }
    deck=deck.pop();
    return deck;
}