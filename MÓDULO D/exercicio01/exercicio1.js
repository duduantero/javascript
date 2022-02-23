var intervald = window.setInterval(() => {carregar()
        
},1000);

function carregar(){

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
    msg.innerHTML = `Agora são ${hora}:${minuto}:${segundo}`
    if(hora <= 12 ){img.src='manha.png'
    document.body.style.background = 'rgb(180,223,251,9)'
}else if(hora <= 18){img.src='tarde.png'
    document.body.style.background = 'rgb(150,92,81,0.9)'
}else if(hora > 18 ) {img.src='noite.png'
    document.body.style.background = 'rgb(8,28,29,0.9)'}
}


