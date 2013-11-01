function suma()
{
  var numero1 = parseInt(document.getElementById("txtNum1").value);
  var numero2 = parseInt(document.getElementById("txtNum2").value);
  
   if(isNaN(numero1))
  {
    numero1 = 0;
  }
   
   if(isNaN(numero2))
  {
    numero2 = 0;
  }
  
  var suma = numero1 + numero2;
  document.getElementById("txtResultado").value=suma;
}

function resta()
{
  var numero1 = parseInt(document.getElementById("txtNum1").value);
  var numero2 = parseInt(document.getElementById("txtNum2").value);
  
   if(isNaN(numero1))
  {
    numero1 = 0;
  }
   
   if(isNaN(numero2))
  {
    numero2 = 0;
  }
  
 var resta = numero1 - numero2;
 document.getElementById("txtResultado").value=resta;
}

function divicion()
{
  var numero1 = parseInt(document.getElementById("txtNum1").value);
  var numero2 = parseInt(document.getElementById("txtNum2").value);

  if(isNaN(numero1) || isNaN(numero2))
  {
   alert('Divicion no acepta 0');
  }
  else
  {
   var divicion = numero1 / numero2;
   document.getElementById("txtResultado").value=divicion;
  }
}

function multiplicacion()
{
  var numero1 = parseInt(document.getElementById("txtNum1").value);
  var numero2 = parseInt(document.getElementById("txtNum2").value);

  if(isNaN(numero1) || isNaN(numero2))
  {
   alert('Multiplicacion no acepta 0');
  }
  else
  {
   var multiplicacion = numero1 * numero2;
   document.getElementById("txtResultado").value=multiplicacion;
  }
}

function carga()
{
 document.getElementById("btnSuma").onclick=suma;
 document.getElementById("btnResta").onclick=resta;
 document.getElementById("btnDivicion").onclick=divicion;
 document.getElementById("btnMultiplicacion").onclick=multiplicacion;
}

window.onload = carga;