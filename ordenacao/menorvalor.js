const livros = require('./listaLivros');

function menorValor(vetor, posicaoInit){

let menorPreco = posicaoInit

for(let atual=posicaoInit; atual<vetor.length; atual++){
    if(vetor[atual].preco < vetor[menorPreco].preco){
        menorPreco=atual
    }
}

return menorPreco
}
module.exports = menorValor;