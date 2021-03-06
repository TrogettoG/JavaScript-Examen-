var calculadora = {

	display: document.getElementById('display'),
	displayValue: "0",
	result: 0,
	firstValue:0,
	secondValue:0,
	lastValue:0,
	oper: "",
	auxResult: false,


	init: (function(){
		this.eventBtn("teclado")
		this.functionNumber()
		this.functionNan()
	}),

//Evento para botones

	eventBtn: function(selector){
		var selectorBtn = document.querySelectorAll('.' + selector + ' img')
		for (var i=0; i<selectorBtn.length; i++) {
			selectorBtn[i].onclick = this.eventBtnSm
			selectorBtn[i].onmouseleave = this.eventBtnLg


		}
	},

	eventBtnSm: function(event){
		calculadora.btnSm(event.target)
	},

	eventBtnLg: function(event){
		calculadora.btnLg(event.target)
	},



//Formato botones

	btnSm: function(element){
		var tecla = element.id;
		if (tecla=='1' || tecla=='2' || tecla=='3' || tecla=='4' || tecla=='5' || tecla=='6' || tecla=='7' || tecla=='8' || tecla=='9' || tecla=='0') {
		element.style.padding = "1.5px"
		} else {
			element.style.padding = "1.0px"
		}
	},

	btnLg: function(elementoDOM){
			elementoDOM.style.padding = '0px'
		},

//Funcion mostrar numeros y evaluar cero 
	
	functionNumber: function(){
		document.getElementById("0").addEventListener("click", function() {calculadora.entryNumber("0");})
		document.getElementById("1").addEventListener("click", function() {calculadora.entryNumber("1");})
		document.getElementById("2").addEventListener("click", function() {calculadora.entryNumber("2");})
		document.getElementById("3").addEventListener("click", function() {calculadora.entryNumber("3");})
		document.getElementById("4").addEventListener("click", function() {calculadora.entryNumber("4");})
		document.getElementById("5").addEventListener("click", function() {calculadora.entryNumber("5");})
		document.getElementById("6").addEventListener("click", function() {calculadora.entryNumber("6");})
		document.getElementById("7").addEventListener("click", function() {calculadora.entryNumber("7");})
		document.getElementById("8").addEventListener("click", function() {calculadora.entryNumber("8");})
		document.getElementById("9").addEventListener("click", function() {calculadora.entryNumber("9");})
	},

	entryNumber: function(value){
		if (this.displayValue.length < 8) {
		
			if (this.displayValue=="0") {
				this.displayValue = ""
				this.displayValue = this.displayValue + value
			} else {
				this.displayValue = this.displayValue + value
			}
		this.displayUpdate();
		}
	},


//Funciones botones no numericos

	functionNan: function (){
		document.getElementById("on").addEventListener("click", function() {calculadora.deleteDisplay();})
		document.getElementById("punto").addEventListener("click", function() {calculadora.entryDot();})
		document.getElementById("sign").addEventListener("click", function() {calculadora.changeSymbol();})
		document.getElementById("mas").addEventListener("click", function() {calculadora.entryOperation("+");})
		document.getElementById("menos").addEventListener("click", function() {calculadora.entryOperation("-");})
		document.getElementById("por").addEventListener("click", function() {calculadora.entryOperation("*");})
		document.getElementById("dividido").addEventListener("click", function() {calculadora.entryOperation("/");})
		document.getElementById("raiz").addEventListener("click", function() {calculadora.entryOperation("raiz");})
		document.getElementById("igual").addEventListener("click", function() {calculadora.endResult();})
	},

//Presionar tecla ON/C borrar numeros en display

	deleteDisplay: function(){
		this.displayValue = "0";
		this.opValue = "";
		this.firstValue = 0;
		this.secondValue = 0;
		this.result = 0;
		this.auxResult = false;
		this.lastValue = 0;
		this.displayUpdate();
	},

//Ingreso decimal "punto"

	entryDot: function(){
		if (this.displayValue.indexOf(".")== -1) {
			if (this.displayValue == ""){
				this.displayValue = this.displayValue + "0."
			} else {
				this.displayValue = this.displayValue + "."
			}
		this.displayUpdate()
		}
	},

//Ingreso signo - 

	changeSymbol: function(){
			if (this.displayValue !="0") {
				var sign
				if (this.displayValue.charAt(0)=="-") {
					sign = this.displayValue.slice(1)
				}	else {
					sign = "-" + this.displayValue
				}
			this.displayValue = ""
			this.displayValue = sign
			this.displayUpdate()
			}
	},

//Operaciones

	entryOperation: function(oper){
		this.firstValue = parseFloat(this.displayValue)
		this.displayValue = ""
		this.opValue = oper 
		this.auxResult = false
		this.displayUpdate()
	},

	operation: function(firstValue, secondValue, opValue){
		switch(opValue){
			case "+": 
				this.result = eval(firstValue + secondValue)
			break;

			case "-": 
				this.result = eval(firstValue - secondValue)
			break;

			case "*": 
				this.result = eval(firstValue * secondValue)
			break;

			case "/": 
				this.result = eval(firstValue / secondValue)
			break;

			case "raiz":
				this.result = eval(Math.sqrt(firstValue))
		}
	},

//Tecla IGUAL

	endResult: function(){ 

		if(!this.auxResult){ 
			this.secondValue = parseFloat(this.displayValue)
			this.lastValue = this.secondValue;
			this.operation(this.firstValue, this.secondValue, this.opValue)
		
		} else { 
			this.operation(this.firstValue, this.lastValue, this.opValue)
		}

		this.firstValue = this.result
		this.displayValue = ""

		if (this.result.toString().length < 9){
			this.displayValue = this.result.toString()
		} else {
			this.displayValue = this.result.toString().slice(0,8) + "..."
		}

		this.auxResult = true
		this.displayUpdate()
	
	},
	
//Display 

	displayUpdate: function(){
		this.display.innerHTML = this.displayValue
	}

};

calculadora.init();