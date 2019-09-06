/*VALIDACIÓ DEL FORMULARI*/
/*detectem l'event del 'click' del butó del form*/
/*funció de validació*/
function validar(){
  /*deixem a una variable el valor del primer 'input' (nom)*/
  /*afagem l'atribut 'value' de l'input mitjançant al DMO-Model d'objectes del Document-*/
  var nom = document.getElementById('nom').value;
  var missatge = document.getElementById('missatge').value;
  /*missatge popUp*/
  /*prova=> alert(nom);*/
  if(nom==""){
    alert("El camp nom és buit");
    document.getElementById("nom").style.border = "2px solid red";/*indicador visual d'error*/
  }else{
    if(missatge==""){
      alert("El camp missatge és buit");
    }
    else{
      alert("El formulari s'ha enviat corectament");
      }
  }
}
