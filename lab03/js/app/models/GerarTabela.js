

class GerarTabela {

	//Lista de Itens (cada um como uma operacao)

	constructor() {
		this._itens = []; //esta tablela deve ser de string
	}

	adiciona(item) {
        this._itens.push(item);
	}

	get itens() {
       return [].concat(this._itens );
    }
}