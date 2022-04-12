function positions(firstPlace, secondPlace, lastPlace) {
    let posicao = [firstPlace, secondPlace, lastPlace]
    if (posicao[0] == 'Daniel') {   
            console.log('1º - Colocado ' + posicao[0])
            console.log('2º - Colocado ' + posicao[1])
            console.log('3º - Colocado ' + posicao[2])

    } else if(posicao[1] == 'Daniel') {
        console.log('1º - Colocado ' + posicao[1])
        console.log('2º - Colocado ' + posicao[0])
        console.log('3º - Colocado ' + posicao[2])

    } else {
        console.log('1º - Colocado ' + posicao[0])
        console.log('2º - Colocado ' + posicao[2])
        console.log('3º - Colocado ' + posicao[1])
    }
}


positions('Rafael', 'Manoel', 'Daniel')



































/* function positions([firstPlace, secondPlace, lastPlace]) {
    let posicoesDoPodio = [1, 2, 3]
    return console.log(posicoesDoPodio[0] + 'º colocado ' + firstPlace + ', '
    + posicoesDoPodio[1] + 'º colocado ' + secondPlace + ', '
    + posicoesDoPodio[2] + 'º colocado ' + lastPlace + '.'
    
    )
    

}

let competidores = ['Rafael', 'Manoel', 'Daniel']

console.log(positions(competidores)) */