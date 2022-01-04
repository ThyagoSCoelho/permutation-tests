const fs = require("fs");
const archive = 'desafio_tests.txt';
let list = [] 


function importList(input) {
    const content = fs.readFileSync(input, 'utf8')
    list = content.split(',',100000).map(x => parseInt(x))
}

let testes = []

function importTests(filename) {
    const content = fs.readFileSync(filename, 'utf8').toString()
    testes = JSON.parse(content)
    //console.log(testes[2])
}



function order(input) {
    console.time('tempo de execução order', input)
    input.sort((a,b) => a - b)
    console.log("input: [" + input + "]")
    console.timeEnd('tempo de execução order', input)
    return input
}

function repeat(input) {
    console.time('tempo de execução copies', input)
    var repeat = input.reduce(function(repeat, elemento, i, input) {
        if (input.indexOf(elemento) !== i && repeat.indexOf(elemento) < 0) repeat.push(elemento); return repeat;
      }, []);
    console.log("copies: [" + repeat + "]")
    console.timeEnd('tempo de execução copies', input)
}

function lack(input) {
    let listLack = []
    console.time('tempo de execução lack', input)
    input.map(function(value, i) { if((input.indexOf(i , 0) === -1) && i !== 0) return listLack.push(i)})
    console.log("removed: [" + listLack + "]")
    console.timeEnd('tempo de execução lack', input)
}

function above(input) {
    let above = []
    console.time('tempo de execução above', input)
    input.map(function(value) {if(value > input.length) return above.push(value)})
    console.log("above: [" + above + "]")
    console.timeEnd('tempo de execução above', input)
}

importTests('testes.txt')
importList(archive)

order(list)
repeat(list)
lack(list)
above(list)
