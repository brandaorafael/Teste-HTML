(function(){
	var app = angular.module("app", []);

	app.controller("CalculadoraController", function(){
		this.resultado;

		this.calcular = function(){
			this.resultado = null;
			if(this.operacao == "S"){
				this.resultado = +this.valor + +this.qnt;
			} else if (this.operacao == "M"){
				this.resultado = this.valor * this.qnt;
			}
		}
	})
})();

