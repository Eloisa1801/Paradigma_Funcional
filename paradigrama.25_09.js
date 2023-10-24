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

const qtdeMaiorQueTres = item => item.qtde > 3
const itensResul = compras.filtrer(qtdeMaiorQueTres)
console.log(itensResul)

const nomeResul = compras
    .filter(qtdeMaiorQueTres)
    .map(getNome)
console.log(nomeResul)

// REDUCE - acumulador (1,9) função + valor inicial (retorna apenas um número)

[2,3,4,4]
nmeArray.reduce(fn, i)

// EX:
const getTotal = item => item.qtde * item.preco
const somar = (acc, el) => acc + el
const totalGeral = compras
    .map(getTotal)
    .reduce(somar)
console.log(totalGeral)

// exercicio
const compras = [
    {nome: 'Mouse', qtde: 5, preco: 10, eletronico: true},
    {nome: 'Teclado', qtde: 0, preco: 25, eletronico: true},
    {nome: 'Monitor', qtde: 4, preco: 500, eletronico: true},
    {nome: 'Mesa', qtde: 8, preco: 200, eletronico: false},
    {nome: 'Cadeira', qtde: 8, preco: 80, eletronico: false},
]

// Tem que usar: filter, map e o reduce
// 1 - todos os elementos que tenha eletronico como verdadeiro
const elementos_verdadeiro = item => item.eletronico != false
const result_elementos = compras.filter(elementos_verdadeiro)
console.log(result_elementos)

// 2 - retornar o total de cada produto: quantidade * preco
// 3 - média do valor total

const elementos_verdadeiro = item => item.eletronico === true
const total_prod = item => item.qtde*item.preco
const result_elementos = compras.filter(elementos_verdadeiro).map(total_prod)
console.log(result_elementos)
const result_media = compras.reduce(result_elementos)/compras.filter(elementos_verdadeiro.length)

