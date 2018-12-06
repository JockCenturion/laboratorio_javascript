

class Operacao {

	constructor(numero1, numero2, tipoOperacao) {
		this._numero1 = parseInt(numero1);
		this._numero2 = parseInt(numero2);
		this._tipoOperacao = tipoOperacao;

		Object.freeze(this);
	}

	get expressao() {
		return this._numero1 + ' ' + this._tipoOperacao + ' ' + this._numero2;
	}

	get valor() {

		switch(this._tipoOperacao) {
			case '+':
				return this._numero1 + this._numero2;
			case '*':
				return this._numero1 * this._numero2;
			case '/':
				return this._numero1 / this._numero2;
			case '%':
				return this._numero1 % this._numero2;
		}
	}




}