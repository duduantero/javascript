//controles básicos
let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumber(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inList(n, l){
    if (l.indexOf(Number(n)) != -1 ){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumber(num.value) && !inList(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
    }else {
        window.alert('Valor inválidos ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar !')
    } else {
    let tot = valores.length
    let soma = 0
    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
    for (let i in valores) {
        soma += valores[i]
    }
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    let max = Math.max(...valores)
    res.innerHTML += `<p> O maior valor informado foi ${max}.<p/>`
    let min = Math.min(...valores)
    res.innerHTML += `<p> O menor valor informado foi ${min}. <p>`
    let med = soma/tot
    res.innerHTML += `A média dos valores digitados é ${med}.`
   }

}

function limpar() {
    res.innerHTML = ""
    lista.innerHTML= ""
}
