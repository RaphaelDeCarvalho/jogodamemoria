function botaosorteio() {
    naleatorio1=Math.round(Math.random()*20)
    alert(naleatorio1)
    naleatorio2=Math.round(Math.random()*40)
    alert(naleatorio2)
    naleatorio3=Math.round(Math.random()*60)
    alert(naleatorio3)
    resposta1=prompt("Digite o número que apareceu na PRIMEIRA vez")==naleatorio1
    resposta2=prompt("Digite o número que apareceu na SEGUNDA vez")==naleatorio2
    resposta3=prompt("Digite o número que apareceu na TERCEIRA vez")==naleatorio3
    respostacerta=resposta1&&resposta2&&resposta3
    if(respostacerta){respostafinal='Parabéns!<br>Você acertou todos os números.'}
    if(!respostacerta){respostafinal='Que pena, <br>não acertou todos os números.<br>Tente novamente!'}
    paragrafoSorteio.innerHTML=`${respostafinal}`
    
  }
  