d3.json("https://lhsteele.github.io/PremierLeague-DataVisualization/EPL_1718_season.json").then(function (data) {
  var margin = { top: 50, right: 50, bottom: 50, left: 50 },
    width = 500 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

  var svg = d3.select("#liverpool-data-area")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.height + margin.bottom)
    .append("g")
    .attr("transform",
      "translate(" + margin.left + "," + margin.top + ")")



  var x = d3.scaleLinear()
    .domain([0, 6])
    .range([0, width])

  var y = d3.scaleLinear()
    .domain([0, 20])
    .range([height, 0])


  svg
    .selectAll("whatever")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", function (d) { return x(d.FTHG) })
    .attr("cy", function (d) { return y(d.FTHG) })
    .attr("r", function (d) { return d.HST })
    .attr("fill", function (d) {
      if (d.FTR === "H") {
        return "red"
      } else if (d.FTR === "A") {
        return "black"
      } else {
        return "grey"
      }
    })
})