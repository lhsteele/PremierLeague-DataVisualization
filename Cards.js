
d3.json("https://lhsteele.github.io/PremierLeague-DataVisualization/2017-18_Foul_Matrix-Sheet1.csv").then(function (data) {
  var width = 1000,
    height = 1000;

  var svg = d3.select("#cards-data-area")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(0,0)");

  console.log(data)
})