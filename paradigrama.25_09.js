// MAP - ARRAY QUE RETORNA UMA CÓPIA DO ARRAY
// FILTER - ARRAY.FILTER(FN) <5 - RETORNA OS NÚMEROS MENORES QUE 5 DO ARRAY

// CONST NUMS = [1, 2, 3, 4, 5]
// CONST DOBRO = N => N*2
// CONSOLE.LOG(NUMS.MAP(DOBRO))

// CONST NOMES = [JOAO, MARI, JULIA, JOANA, PATRICIA]
// CONST PRIMEIRALETRA TEXT=>TEXT[0]
// CONSOLE.LOG(NUMS.MAP(DOBRO))

const compras = [
    {nome: 'Mouse', qtde: 5, preco: 10},
    {nome: 'Teclado', qtde: 0, preco: 25},
    {nome: 'Monitor', qtde: 4, preco: 500},
    {nome: 'Mesa', qtde: 8, preco: 200},
    {nome: 'Cadeira', qtde: 8, preco: 80},
] 

const nomes = (text) => text.nome
console.log(compras.map(nomes));

const mult = (multi) => multi.qtde*multi.preco
console.log(compras.map(mult))

