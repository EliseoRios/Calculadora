function suma()
{
  var numero1 = parseInt(document.getElementById("txtNum1").value);
  var numero2 = parseInt(document.getElementById("txtNum2").value);
  
  document.getElementById("txtResultado").value=0;
  
 if(isNaN(numero1) || isNaN(numero2))
  {
      if(isNaN(numero1))
     {
       numero1 = 0;
     }
   
      if(isNaN(numero2))
     {
       numero2 = 0;
     }
	  alert('Datos no validos convertidos en 0');
  }
  
  var suma = numero1 + numero2;
  document.getElementById("txtResultado").value=suma;
}

function resta()
{
  var numero1 = parseInt(document.getElementById("txtNum1").value);
  var numero2 = parseInt(document.getElementById("txtNum2").value);
  
  document.getElementById("txtResultado").value=0;

    if(isNaN(numero1) || isNaN(numero2))
  {
      if(isNaN(numero1))
     {
       numero1 = 0;
     }
   
      if(isNaN(numero2))
     {
       numero2 = 0;
     }
	  alert('Datos no validos convertidos en 0');
	  
  }
  
 var resta = numero1 - numero2;
 document.getElementById("txtResultado").value=resta;
}

function divicion()
{
  var numero1 = parseInt(document.getElementById("txtNum1").value);
  var numero2 = parseInt(document.getElementById("txtNum2").value);
  
  document.getElementById("txtResultado").value=0;

  if((isNaN(numero1) || isNaN(numero2)) || (numero1==0 || numero2==0))
  {
   alert('Numeros no validos');
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
  
  document.getElementById("txtResultado").value=0;
  
   if(isNaN(numero1) || isNaN(numero2))
  {
      if(isNaN(numero1))
     {
       numero1 = 0;
     }
   
      if(isNaN(numero2))
     {
       numero2 = 0;
     }
	  alert('Datos no validos convertidos en 0');
	  
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