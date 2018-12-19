var calculadora = {

	init: (function(){
		this.eventosBtn(".tecla");
	}),

//Evento para botones

	eventosBtn: function(selector){
		var selectorBtn = document.querySelectorAll(selector);
		for (var i=0; i<selectorBtn.length; i++) {
			selectorBtn[i].onclick = this.eventoBtnCh;


		}
	},

	eventoBtnCh: function(event){
		calculadora.btnCh(event.target);
	},



//Formato botones

	btnCh: function(element){
		var tecla = element.id;
		if (tecla=='1' || tecla=='2' || tecla=='3' || tecla=='4' || tecla=='5' || tecla=='6' || tecla=='7' || tecla=='8' || tecla=='9' || tecla=='0') {
		element.style.padding = "1.3px"
		} else {
			element.style.padding = "1.3px"
		}
	},

};

calculadora.init();