var calculadora = {

	display: document.getElementById('display'),
	displayValue: '0',

	init: (function(){
		this.eventosBtn("teclado")
		this.functionNumber()
		this.functionNan()
	}),

//Evento para botones

	eventosBtn: function(selector){
		var selectorBtn = document.querySelectorAll('.' + selector + ' img')
		for (var i=0; i<selectorBtn.length; i++) {
			selectorBtn[i].onclick = this.eventoBtnCh;
			selectorBtn[i].onmouseleave = this.eventoBtnGr;


		}
	},

	eventoBtnCh: function(event){
		calculadora.btnCh(event.target);
	},

	eventoBtnGr: function(event){
		calculadora.btnGr(event.target);
	},



//Formato botones

	btnCh: function(element){
		var tecla = element.id;
		if (tecla=='1' || tecla=='2' || tecla=='3' || tecla=='4' || tecla=='5' || tecla=='6' || tecla=='7' || tecla=='8' || tecla=='9' || tecla=='0') {
		element.style.padding = "1.5px"
		} else {
			element.style.padding = "1.0px"
		}
	},

	btnGr: function(elementoDOM){
			elementoDOM.style.padding = '0px';
		},

//Funcion mostrar numeros y evaluar cero 
	
	functionNumber: function(){
		document.getElementById("0").addEventListener("click", function() {calculadora.entryNumber("0");});
		document.getElementById("1").addEventListener("click", function() {calculadora.entryNumber("1");});
		document.getElementById("2").addEventListener("click", function() {calculadora.entryNumber("2");});
		document.getElementById("3").addEventListener("click", function() {calculadora.entryNumber("3");});
		document.getElementById("4").addEventListener("click", function() {calculadora.entryNumber("4");});
		document.getElementById("5").addEventListener("click", function() {calculadora.entryNumber("5");});
		document.getElementById("6").addEventListener("click", function() {calculadora.entryNumber("6");});
		document.getElementById("7").addEventListener("click", function() {calculadora.entryNumber("7");});
		document.getElementById("8").addEventListener("click", function() {calculadora.entryNumber("8");});
		document.getElementById("9").addEventListener("click", function() {calculadora.entryNumber("9");});
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

	displayUpdate: function(){
		this.display.innerHTML = this.displayValue;
	},

//Funciones botones no numericos

	functionNan: function (){
		document.getElementById("on").addEventListener("click", function() {calculadora.deleteDisplay();});
	},

//Presionar tecla ON/C borrar numeros en display

	deleteDisplay: function(){
		  this.displayValue = "0"
		  this.displayUpdate()
	},


};

calculadora.init();