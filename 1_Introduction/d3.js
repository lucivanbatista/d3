
// ----------- 1. https://d3js.org/#properties ----------

// Determinar a cor de todos os "p" parágrafos como sendo brancos
d3.selectAll("p").style("color", "white");

// Determinar a cor do "body" como sendo preto
d3.select("body").style("background-color", "gray");

// Para todos os P, determinar a cor de forma aleatória
d3.selectAll("p").style("color", function(){
	return "hsl(" + Math.random() * 360 + ",100%,50%)";
});

// Alterar as cores dependendo dos nós se forem ímpar ou par
d3.selectAll("p").style("color", function(d, i){
	return i % 2 ? "pink" : "blue";
});

// d representa o array de números passado
d3.selectAll("p")
	.data([5, 8, 15, 16, 23, 42, 70])
		.style("font-size", function(d) {return d + "px"; });

// Função para mostrar o tamanho da letra correpondendo ao array passado
var p = d3.select("body")
	.selectAll("p")
  	.data([5, 8, 15, 16, 23, 42, 70])
    	.text(function(d) { return "I am number " + d + "!"; });

// Do variável p, possui 7 nodes, então o restante será removido
//p.exit().remove();


// Círculo

var dataset = [];
i = 0;

dataset.push(Math.round(Math.random()* 100));

var sampleSVG = d3.select("#bola")
	.append("svg")
	.attr("width", 500)
	.attr("height", 300);

sampleSVG.selectAll("circle")
  .data(dataset)
    .enter().append("circle")
      .style("stroke", "green")
      .style("fill", "green")
      .attr("r", 40)
      .attr("cx", function(d, i){
        return 50 + (i*80)
      })
      .attr("cy", 120);


d3.selectAll("circle").transition()
	.duration(750)
	.delay(function(d, i){ return i * 10;})
	.attr("r", function(d){ return d; });