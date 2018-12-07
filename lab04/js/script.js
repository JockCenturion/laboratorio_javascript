function calculaConsumo(event) {
	event.preventDefault();

	let suco = getElemento("suco");
	let refrigerante = getElemento("refrigerante");
	let agua = getElemento("agua");
	let bolo = getElemento("bolo");
	let pastel = getElemento("pastel");
	let torta = getElemento("torta");

	let nomeCliente = getElemento("nome_cliente").value;

	let soma = 0;
	let itensConsumidos = []

	if (suco.checked == true) {
		soma += 4.0;
		itensConsumidos.push("Suco");
	}

	if (refrigerante.checked == true) {
		soma += 2.50;
		itensConsumidos.push("Refrigerante");
	}

	if (agua.checked == true) {
		soma += 1.5;
		itensConsumidos.push("Água");
	}

	if (bolo.checked == true) {
		soma += 3.5;
		itensConsumidos.push("Bolo");
	}

	if (pastel.checked == true) {
		soma += 3;
		itensConsumidos.push("Pastel");
	}

	if (torta.checked == true) {
		soma += 4;
		itensConsumidos.push("Torta");
	}


	alert("Cliente: " + nomeCliente + "\n" +
		  "Valor a Pagar: " + soma  + "\n" +
		  "Itens Consumidos: {" + itensConsumidos.join(', ') + "}");



	//if (suco.checked == true) alert("ok");
}



function getElemento(elemento) {
	return document.getElementById(elemento);
}




/*function transformaDataEmExtenso(event) {
	event.preventDefault();
	let data = document.getElementById("data").value;
	let corpo = document.getElementById("js-divResultado");

	corpo.innerHTML  = "<p style='font-size: 20px'>" + transformaData(data) +"</p>";
}

function transformaData(data) {
	let meses = [
		'Janeiro', 'Fevereiro', 'Março', 
		'Abril', 'Maio', 'Junho',
		'Julho', 'Agosto', 'Setembro',
		'Outubro', 'Novembro', 'Dezembro'
	];

	let dt = data.split('/');

	return dt[0] + ' de ' + meses[parseInt(dt[1]) - 1] + ' de ' + dt[2];
}


*/