

class GerarTabelaView {

	constructor(elementoAGerar) {
		this._elemento = elementoAGerar;
	}

    _template(model) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>OPERAÇÃO</th>
                    <th>VALOR</th>
                </tr>
            </thead>
        
            <tbody>
                ${model.itens.map(item => (item.map(operacao => `
                    <tr>
                        <td>${operacao.expressao}</td>
                        <td>${operacao.valor}</td>
                    </tr>
                	`).join(''))).join('')}                
            </tbody>
            
        </table>
        `;
    }

    update(model) {
        this._elemento.innerHTML = this._template(model);
    }
}



/*
                ${model.itens.map(item => `
                    
                    <tr>
                        <td>${item[0].expressao}</td>
                        <td>${item[0].valor}</td>
                    </tr>
                    
                    <tr>
                        <td>${item[1].expressao}</td>
                        <td>${item[1].valor}</td>
                    </tr>

                    <tr>
                        <td>${item[2].expressao}</td>
                        <td>${item[2].valor}</td>
                    </tr>

                    <tr>
                        <td>${item[3].expressao}</td>
                        <td>${item[3].valor}</td>
                    </tr>                    

                `).join('')}  

*/