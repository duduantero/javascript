let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }

}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)

        //lista.options[lista.options.length] = new Option(`Valor ${num.value} adicionado`,`${num.value}`) 
    }else{ 
        window.alert('Valor inválido ou já encontradado na lista')

    }
    num.focus()
}     


function finalizar(){
    if (num.value.length == 0){
     window.alert('Adicione valores antes de finalizar !')   
    }else{
        let total = valores.length
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${total} números cadastrados.<p/>`

    }

    



}

function limpar(){
    valores = []

}