const fs = require("fs");
const archive = 'input.txt'
let list = [] 


function importList(input) {
    const content = fs.readFileSync(input, 'utf8').toString()
    list = content.split(',',100000)
}

let testes = []

function importTests(filename) {
    const content = fs.readFileSync(filename, 'utf8').toString()
    testes = JSON.parse(content)
    console.log(testes[5])
}



function order(input) {
    input.sort((a,b) => a - b)
    console.log(input)
    return input
}

function repeat(input) {
    let repeat = input.filter(function(value, i, input ){ return input.indexOf( i, 1 ) === 1; });
    console.log(repeat)
}

function lack(input) {
    let listLack = []
    input.map(function(value, i) { if(input.indexOf(i , 0) === -1) return listLack.push(i)})
    console.log(listLack)
}

function above(input) {
    let above = []
    input.map(function(value) {if(value > input.length) return above.push(value)})
    console.log(above)
}

importTests('testes.txt')
importList(archive)

order(list)
repeat(list)
lack(list)
above(list)
