function soma(n1 = 0, n2 = 0) {
    return n1 + n2;
}

function multiplica(n1 = 1, n2 = 1) {
    return n1 * n2;
}

function divisao(n1 = 1, n2 = 1) {
    return n1 / n2;
}

function subtracao(n1 = 0, n2 = 0) {
    return n1 - n2;
}

function nomeIdade( nome, idade ){
    return `Meu nome é ${nome} e tenho ${idade} anos!`;
}

// console.log(soma( 10, 10 ));
// console.log(multiplica( 10 , 7 ));
// console.log(divisao( 2000 , 4 ));
// console.log(subtracao( 100, 23));

console.log( soma( multiplica(2,5), soma(85,5) ));
console.log( multiplica( 4, ));

console.log(nomeIdade( 27, "Charles"));
console.log(nomeIdade("Charles", 27));