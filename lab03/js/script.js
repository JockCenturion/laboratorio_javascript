function transformaDataEmExtenso(event) {
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


