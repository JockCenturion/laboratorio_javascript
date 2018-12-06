class PedidoController {
    
    constructor() {
        
        let $ = document.querySelector.bind(document);
       
        this._inputCodigoItem = $('#codigo_item');
        this._inputQuantidade = $('#quantidade');
        //this._inputValor      = this._pegaValor($('#codigo_item'));

        this._pedido = new Pedido(); 

        this._pedidoView = new PedidoView($('#js-pedidoVendaView') );
        this._pedidoView.update(this._pedido );
    }
    
    adiciona(event ) {
        
        event.preventDefault();

        if (this._verificaCodigo(this._inputCodigoItem.value)) {
            let item = new ItemPedido(
                this._inputCodigoItem.value,
                this._inputQuantidade.value,
                this._pegaValor(this._inputCodigoItem.value)
            );
             // adiciona no objeto pedido ...
            this._pedido.adiciona(item ); 
            this._pedidoView.update(this._pedido );

            this._limpaFormulario();
            //console.log(item );     
            
            return true;       
        } else {
            alert("Códgio Inválido!");
            return false;
        }

    }

    _pegaValor(codigo) {

        console.log(codigo);
        switch (codigo) {
            case '100': 
                return 1.20;
            case '101':
                return 1.30;
            case '102':
                return 1.50;
            case '103':
                return 1.20;
            case '104':
                return 1.30;
            case '105':
                return 1.00;
        }
    }

    _verificaCodigo(codigo) {
        let faixaCodigo = ['100', '101', '102', '103', '104', '105'];
        return faixaCodigo.includes(codigo);
    }

    _limpaFormulario() {
        this._inputCodigoItem.value = '';
        this._inputQuantidade.value = 1;

        this._inputCodigoItem.focus();
    }
}