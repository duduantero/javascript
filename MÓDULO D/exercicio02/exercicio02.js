function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    res = window.document.getElementById('res')
    if (fano.value.length == 0||fano.value > ano) {
      window.alert('Verifique os dados e tente novamente')
    } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    genero = ''
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    img.style.textAlign = 'center'
    if (fsex[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade < 10){
        img.setAttribute('src','bebe.png')
          //criança
      } else if (idade < 21){
        img.setAttribute('src', 'jovem.png')
          //Jovem
      } else if (idade <50) {
        img.setAttribute('src', 'homem.png')
          //Adulto
      }else {
        img.setAttribute('src', 'idoso.png')
          //idoso
      }
        
    } else if (fsex[1].checked) {
      genero = 'Mulher'
      if (idade >= 0 && idade < 10){
          //criança
        img.setAttribute('src', 'menina.png')
      } else if (idade < 21){
        img.setAttribute('src', 'jova.png')
          //Jovem
      } else if (idade <50) {
        img.setAttribute('src', 'mulher.png')
          //Adulto
      }else {
        img.setAttribute('src', 'idosa.png')
          //idoso
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `${genero} com idade ${idade} anos`
    res.appendChild(img)
    
  }
}