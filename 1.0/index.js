function calcular(){
	var x = parseInt(document.getElementById("valor").value);
	var y = parseInt(document.getElementById("qnt").value);

	console.log(x+y);

	var resultado = document.getElementById("res");

	var operacao = document.getElementById("drop").value;

	console.log(operacao);

	if(operacao == "M"){
		resultado.innerHTML = x*y;
	} else if (operacao == "S"){
		resultado.innerHTML = x+y;
	}
}