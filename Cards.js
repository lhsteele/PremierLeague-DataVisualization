
d3.json("https://lhsteele.github.io/PremierLeague-DataVisualization/json/season_1819.json").then(function (data) {
  var width = 1000,
    height = 1000;

  var svg = d3.select("#cards-data-area")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(0,0)");

})