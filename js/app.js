var calculadora = {

	init: (function(){
		this.eventosBtn("teclado");
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
		}

};

calculadora.init();