var data = [30, 86, 168, 281, 303, 365];

d3.select(".chart")
	.selectAll("div") // selecionando a div e suas filhas
	.data(data) // passando o data
		.enter() // criação de placeholders (data)
		.append("div")
		.style("width", function(d){ return d + "px"; }) // d representa o elemento atual e determina o tamanho da barra
		.text(function(d) {return '$ ' + d;});