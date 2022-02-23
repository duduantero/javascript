function contar(){
    let ini = window.document.getElementById('begin')
    let fim = window.document.getElementById('end')
    let passo = window.document.getElementById('passo')
    let res = window.document.getElementById("result")
    
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('ERRO:Faltam dados ! ')
        res.innerHTML = 'Impossível contar !'
        
    }else {
        res.innerHTML = 'Contando: '
        let i =Number(ini.value)
        let f =Number(fim.value)
        let p =Number(passo.value)
        if (p <= 0){
             window.alert('Passo inválido ! Passo um terá valor atribuido a 1.')
            p = 1
        }
        //contagem 
        if(i<f){
        for(let c = i;c <= f; c+= p){
            res.innerHTML+= ` ${c} \u{2192}`

        }
            res.innerHTML += ` Acabou !`
        }else{
            //contagem regressiva
            for(let c = i;c >=f; c-=p) {
                res.innerHTML+= ` ${c} \u{2192}`
            }
        res.innerHTML += ` Acabou !`
    }

    }
        
}