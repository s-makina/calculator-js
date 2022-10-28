
new Vue({
	el: "#calculator-el",

	data(){
		return {
			ans: 0,
			expression: '',
			a: false,
		}
	},

	methods:{
		evaluate(value){
			if(value !== undefined) {
				// I'm good to go.
				if(value == 'ac') {
					this.expression = '';
					this.ans.value = 0;
					return true;
				}
				else if(value == 'x^2'){
					this.expression = this.square();
					this.a = true;
				}
				
				else if(value == 'radic'){
					this.expression = Math.sqrt(this.expression);
					this.a = true;
				}
				else if(value == 'log'){
					this.expression = Math.log(this.expression);
					this.a = true;
				}
				else if(value == 'sin'){
					this.expression = Math.sin(this.expression);
					this.a = true;
				}
				else if(value == 'cos'){
					this.expression = Math.cos(this.expression);
					this.a = true;
				}

				else if(value == 'tan'){
					this.expression = Math.tan(this.expression);
					this.a = true;
				}

				else if(value == 'ans'){
					this.expression += eval(this.expression);
				}

				else if(value == '=') {
					const answer = eval(this.expression);
					this.expression = answer;
					this.a = true;
				} else {
					if( this.a && value >= 0 && value <= 9) this.expression = '';
					this.a = false;
					this.expression += value;
				}

				if(this.expression == undefined) {
					this.expression = '';
					this.ans.value = 0;
				} else {
					this.ans.value = this.expression;
				}
				// this.expression += value;
			}
		},

		square(){
			return eval( this.expression * this.expression );
		},

		actionBtn(e){
			var value = e.target.dataset['value'];
			this.evaluate(value);
		}
	},

	created(){

	}
});
