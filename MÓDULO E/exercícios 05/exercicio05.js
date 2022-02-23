function multiplicar(){
    let num = window.document.getElementById('number1')
    let tab = window.document.getElementById("seltab")
    if(num.value.length == 0 ) {
        window.alert('[ERRO]: Faltam dados, por favor insira um número ! ')
        }else { 
        let n = Number(num.value)
        tab.innerHTML = ''
        for (let m = 0; m <=10 ; m++) {
            let item = document.createElement('option')
            item.text = `${n} x ${m} = ${n*m}`
            item.value= `tab${m}`
            tab.appendChild(item)
        } 
    }
}