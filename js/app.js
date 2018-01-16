var calculadora={
	nombre:"hola"
}
var total=0;
document.onreadystatechange = function () {
  if(document.readyState=="complete"){
    teclas = document.getElementsByClassName("tecla")
	for(tecla in teclas){	
		
		if(typeof teclas[tecla]=="object"){
			id =teclas[tecla].getAttribute("id")
			document.getElementById(id).addEventListener("click", valorTecla);
		}
	}
  }
}
function valorTecla(){
	var display = document.getElementById("display")
	var valor = this.getAttribute("id")
	var mensaje;
	if (!isNaN(valor)){
		numero = Number(valor)
		if(display.innerHTML=="0"){
			mensaje= numero
		}
		else{
			mensaje= display.innerHTML + numero
		}
				
	}
	else{
		if(valor=="on"){
			mensaje="0"
			total = 0
		}
		else if(valor=="punto"){
			if(display.innerHTML.indexOf(".") == -1){
				mensaje= display.innerHTML + "."
			}
		}
		else if(valor=="sign"){
			if(display.innerHTML !="0" && display.innerHTML[0] !="-"){

				mensaje=  "-" + display.innerHTML
			}
			else if(display.innerHTML !="0" && display.innerHTML[0] =="-"){

				mensaje=  display.innerHTML.substr(1)
			}

		}
		else if (valor =="mas"){
			total = total + display.innerHTML + "+"
			mensaje = "0"
		}
		else if (valor =="menos"){
			total = total + display.innerHTML + "-"
			mensaje = "0"
		}
		else if (valor =="por"){
			total = total + display.innerHTML + "*"
			mensaje = "0"
		}
		else if (valor =="dividido"){
			total = total + display.innerHTML + "/"
			mensaje = "0"
		}
		else if (valor =="igual"){
			if(display.innerHTML =="0"){
				console.log("valor cero")
				total = total + "0"

			}

			total = total + display.innerHTML
			var continuar  = false
			while (continuar == false){
				if(total[0]=="0"){
					total = total.substr(1)
					//console.log("arr" + total)
				}
				else if (total[0]!="0"){
					continuar=true
				}
			}
			
			if(continuar){
				if(typeof total == "undefined"){
					total = "0"
				}
			    console.log(total)
				mensaje = eval(total)

				if(typeof mensaje == "undefined"){
					mensaje = "0"
				}
				//console.log("re" + eval(total))
				total = "0"
			}
		}
		else{
			console.log("sin programar")
			mensaje = "0"
		}
	}

	display.innerHTML = mensaje.toString().slice(0,8)
	console.log(total)
	animarTecla(this)
}

function animarTecla(tecla){
	//var tecla = this
    w = tecla.width+ "px"
	h = tecla.height+ "px"
	//console.log(w + " " + h)
	tecla.style.width="15%"
	tecla.style.height ="50px"

	setTimeout(function(){
		tecla.style.width=w
		tecla.style.height =h
	},100);
}