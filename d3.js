
// ----------- 1. https://d3js.org/#properties ----------

// Determinar a cor de todos os "p" parágrafos como sendo brancos
d3.selectAll("p").style("color", "white");

// Determinar a cor do "body" como sendo preto
d3.select("body").style("background-color", "black");

// Para todos os P, determinar a cor de forma aleatória
d3.selectAll("p").style("color", function(){
	return "hsl(" + Math.random() * 360 + ",100%,50%)";
});

// Alterar as cores dependendo dos nós se forem ímpar ou par
d3.selectAll("p").style("color", function(d, i){
	return i % 2 ? "red" : "blue";
});

