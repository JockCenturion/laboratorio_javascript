class GerarTabelaController {

	constructor() {

        let $ = document.querySelector.bind( document );
       
        this._inputNumero1 = $( '#numero1' );
        this._inputNumero2 = $( '#numero2' );

        this._gerarTabela = new GerarTabela(); 

        this._gerarTabelaView = new GerarTabelaView( $('#js-pedidoVendaView') );
        this._gerarTabelaView.update( this._gerarTabela );
	}

	adiciona(event) {
		event.preventDefault();


		let item = [

			new Operacao(
				this._inputNumero1.value,
				this._inputNumero2.value,
				'+'
			),

			new Operacao(
				this._inputNumero1.value,
				this._inputNumero2.value,
				'*'
			),

			new Operacao(
				this._inputNumero1.value,
				this._inputNumero2.value,
				'/'
			),

			new Operacao(
				this._inputNumero1.value,
				this._inputNumero2.value,
				'%'
			)
		];

		this._gerarTabela.adiciona(item);
		this._gerarTabelaView.update(this._gerarTabela);

        this._limpaFormulario();
	}

	_limpaFormulario() {
        this._inputNumero1.value = '2';
        this._inputNumero2.value = '1';

        this._inputNumero1.focus();
    }
}