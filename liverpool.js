d3.json("https://lhsteele.github.io/PremierLeague-DataVisualization/liverpool_results.json").then(function (data) {
  var margin = { top: 50, right: 50, bottom: 50, left: 50 },
    width = 500 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;


  var parentDiv = document.getElementById("liverpool-parent-div");
  
  var svg = d3.select("#liverpool-data-area")
    .append("svg")


  var x = d3.scaleLinear()
    .domain([0, 6])
    .range([-100, width])

  var y = d3.scaleLinear()
    .domain([0, 20])
    .range([height, 100])


  svg
    .selectAll("whatever")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", function (d) { return x(d.HST) })
    .attr("cy", function (d) { return y(d.HST) })
    .attr("r", function (d) { return (d.FTHG * 10) })
    .attr("fill", function(d) {
      if (d.FTR === "H") {
        return "red"
      } else if (d.FTR === "A") {
        return "black"
      } else {
        return "grey"
      }
    })
})