class ItemPedido {

  
    constructor(codigoItem, quantidade, valor) {
        
        this._codigoItem = codigoItem;
        this._quantidade = quantidade;
        this._valor = valor;

        Object.freeze(this );
    }
    
    get subTotal() {
        return this._quantidade * this._valor;
    }

    get codigoItem() {
        return this._codigoItem;
    }
    
    get quantidade() {
        return this._quantidade;
    }
    
    get valor() {
        return this._valor;
    }
}