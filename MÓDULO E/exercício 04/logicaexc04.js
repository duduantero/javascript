/*var inicio = 0
var inicio = 1
var fim = 10
var passo = 1*/


var inicio = 10
var fim = 1
var passo = 1


if (inicio < fim ){
    inicio = inicio
    do{
        console.log(inicio)
        inicio =  inicio + passo  
    }while(inicio <= fim){
        console.log('Acabei !')}
}else {
    do {
        console.log(inicio)
        inicio = inicio - passo
        
    } while (inicio>= fim){
        console.log('Acabei')
    }
}





