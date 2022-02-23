let num = [5, 8, 2, 9, 3]
console.log(num)
console.log(`Nosso vetor é ${num}`)

//acrescentar valor no num 

num[5] = 6  //coloque o valor 6 na posição {5]
console.log(num)
console.log(`Nosso vetor é ${num}`)

//colocar valor 7  na ultima posição
num.push(7)
console.log(num)
console.log(`Nosso vetor é ${num}`)

//como saber o comprimento do num
console.log('Nosso vetor tem',num.length,'posições')

//pegar todos os valores do vetor e colocar em ordem CRESCENTE
num.sort()
console.log(num)
console.log(`Nosso vetor é ${num}`)

//monstrar número especifico de uma posição
console.log('O valor da posição 0 é',num[0])

//mostrar posições dos vetores
let valores = [8, 1, 7, 4, 2, 9]

console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])



let num =[]
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
    
}
let valores = [8, 1, 7, 4, 2, 9]
valores.sort()

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
} 
//buscar um valor dentro de um vetor
console.log(`O valor 7 está na posição ${valores.indexOf(7)}`)

//buscar um valor dentro de um vetor, porém ele não se encontra
let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
pos = valores.indexOf(7)
if(pos == -1){
    console.log('O valor não foi encontrado')
}else{
console.log(`O valor está na posição ${pos}`)}

