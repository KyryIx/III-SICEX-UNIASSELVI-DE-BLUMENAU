function imc(massa, altura){
	// https://www.fetalmed.net/calculadoras/calculadora-de-indice-de-massa-corporal-imc-e-peso-ideal/
	return massa / (altura *altura);
}

function classificacao_imc( valor ){
	// https://www.w3schools.com/jsref/jsref_tofixed.asp
	// https://www.w3schools.com/jsref/jsref_toprecision.asp
	valor = parseFloat( valor.toFixed(1) );
	if( valor <= 18.5 ){
		return "Baixo Peso";
	}
	else{
		if( (18.6 <= valor) && (valor <=24.9) ){
			return "Peso Ideal";
		}
		else{
			if( (25.0 <= valor) && (valor <=29.9) ){
				return "Sobrepeso";
			}
			else{
				if( (30.0 <= valor) && (valor <=34.9) ){
					return "Obesidade I";
				}
				else{
					if( (35.0 <= valor) && (valor <=39.9) ){
						return "Obesidade II";
					}
					else{
						return "Obesidade III";
					}
				}
			}
		}
	}
}

function classificacao_imc_outra( valor ){
	// https://www.w3schools.com/jsref/jsref_tofixed.asp
	// https://www.w3schools.com/jsref/jsref_toprecision.asp
	valor = parseFloat( valor.toFixed(1) );
	if( valor <= 18.5 ){
		return "Baixo Peso";
	}
	else if( (18.6 <= valor) && (valor <=24.9) ){
		return "Peso Ideal";
	}
	else if( (25.0 <= valor) && (valor <=29.9) ){
		return "Sobrepeso";
	}
	else if( (30.0 <= valor) && (valor <=34.9) ){
		return "Obesidade I";
	}
	else if( (35.0 <= valor) && (valor <=39.9) ){
		return "Obesidade II";
		}
	else{
		return "Obesidade III";
	}
}

function cor_classificacao_imc( valor ){
	// https://www.w3schools.com/jsref/jsref_tofixed.asp
	// https://www.w3schools.com/jsref/jsref_toprecision.asp
	valor = parseFloat( valor.toFixed(1) );
	if( valor <= 18.5 ){
		return "rgb(6,202,166)";
	}
	else if( (18.6 <= valor) && (valor <=24.9) ){
		return "rgb(114,210,79)";
	}
	else if( (25.0 <= valor) && (valor <=29.9) ){
		return "rgb(235,197,53)";
	}
	else if( (30.0 <= valor) && (valor <=34.9) ){
		return "rgb(249,127,32)";
	}
	else if( (35.0 <= valor) && (valor <=39.9) ){
		return "rgb(237,41,10)";
	}
	else{
		return "rgb(231,0,0)";
	}
}

function executa_calculo_imc(){
	let valor_massa = parseFloat( document.querySelector('#massa').value );
	let valor_altura = parseFloat( document.querySelector('#altura').value );
	let resultado = imc( valor_massa, valor_altura );
	let classificacao = classificacao_imc( resultado );
	let coloracao = cor_classificacao_imc( resultado );
	document.querySelector('#resultado_valor').innerText = resultado;
	document.querySelector('#resultado_classe').innerText = classificacao;
	document.querySelector('#resultado_classe').style.textAlign = "center";
	document.querySelector('#resultado_classe').style.backgroundColor = coloracao;
}

window.onload = function(){
	// https://www.w3schools.com/js/js_events.asp
	// https://www.w3schools.com/jsref/dom_obj_event.asp
	// https://www.w3schools.com/jsref/event_onclick.asp
	let botao_calcular = document.querySelector('#botao_calcular');
	botao_calcular.addEventListener( "click", executa_calculo_imc );
}