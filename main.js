console.log('teste arquivo');

var x = 1;
var y = 2.1;

var dia = "segunda";

console.log('O valor de x: é' + x);
console.log('O valor de x: é' + y);
console.log('Hoje o dia é: ' + dia);
var z = x * y;
console.log("A multiplicação é " + z);

var z = x * y + dia;
console.log("A multiplicação é " + z);

console.log(typeof "mario");
console.log(typeof x);
console.log(typeof y);
console.log(typeof dia);

const pessoa = {
    nome: 'Rogerio',
    profissao: 'Professor',
    idade: 44
}

console.log('O nome é ' + pessoa.nome + 'A profissao é' + pessoa.profissao + 'a idade é' + pessoa.idade);

function funcao() {
    console.log('olá');
}

const segundaFuncao = () => {
    console.log('olá');
}

function funcaoComParametro(nome, sobrenome) {
    console.log(`olá ${nome} ${sobrenome}`);
}

function funcaoComParametro1(nome, sobrenome) {
    return `olá[1] ${nome} ${sobrenome}`;
}

funcao();
segundaFuncao();
funcaoComParametro('Rogerio', 'Fontes');
var nomeSobrenome = funcaoComParametro1('Rogerio', 'Fontes');
console.log(nomeSobrenome);

function soma(x, y) {
  return x + y;
}

console.log(soma(10, 5)); // 15

const a = 10;
const b = '10';
const c = 20;

console.log(a == b); // true
console.log(a === b); // false

console.log(a != b); // false
console.log(a !== b); // true

console.log(a > c); // false
console.log(a < c); // true
console.log(a >= b); // true