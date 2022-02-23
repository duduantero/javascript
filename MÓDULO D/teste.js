var data = new Date()
let hora = data.getHours
console.log(hora)
if(hora > 0 && hora < 12){
    console.log('Bom dia')
}else if(hora >= 12 && hora <= 18){
    console.log('Boa tarde')
}else {
    console.log('Boa noite')
}