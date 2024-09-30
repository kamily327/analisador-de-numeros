let numeros = []
function enviar(){
    
   let nu = Number(document.getElementById('nu').value)
   let select = document.getElementById('select')
    if (nu >= 1 && nu <= 100){
       numeros.push(nu)
       let item = document.createElement('option')
       item.text = `Numero ${nu} Adicionado`
       select.appendChild(item)
  }
else 
  alert('Erro Digite um Numero entre 1 e 100.')

 
}
function fi (){
 
    let res = document.getElementById('res')
    let maior = Math.max(...numeros)
    let menor = Math.min(...numeros)
    let p = numeros.length
    let soma = numeros.reduce((acc,nu)=> acc + nu , 0 )
    let media = soma / p
    res.innerHTML = `AO TODO TEMOS ${p} NUMEROS CADASTRADOS <br><br> O MAIOR NUMERO ADICIONADO FOI ${maior} <br> <br> O MENOR NUMERO ADICIONADO FOI ${menor}  <br><br> A SOMA DOS NUMEROS E ${soma} <br><br> A MEDIA DOS NUMEROS E ${media.toFixed(2)}           `
}
