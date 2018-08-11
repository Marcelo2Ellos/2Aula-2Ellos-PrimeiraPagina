function enviar(){
  var nome = document.getElementById("txt-nome");
  //Se o valor na variável Nome for diferente de vazio
  if (nome.value !="") {
    //Mostrar mensagem com nome
    alert("Obrigado, " + nome.value + ", mas esta área está em desenvolvimento");
  } else {
      alert("Obrigado, mas esta área está em desenvolvimento");
    //Mostrar mensagem genérica
  }
}
