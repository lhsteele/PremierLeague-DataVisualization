d3.json("https://lhsteele.github.io/PremierLeague-DataVisualization/json/player_data_1718.json").then(function (data) {
  var margin = { top: 100, right: 100, bottom: 100, left: 100 },
    width = 500 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;


  var parentDiv = document.getElementById("player-parent-div");

  var svg = d3.select("#player-data-area")
    .append("svg")
    .attr("class", "player-data-area")


  var x = d3.scaleLinear()
    .domain([35, 75])
    .range([0, width])

  var y = d3.scaleLinear()
    .domain([5, 13])
    .range([height, 0])


  svg
    .selectAll("whatever")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", function (d) { return x(d.market_value) })
    .attr("cy", function (d) { return y(d.fpl_value) })
    .attr("r", function (d) { return (parseInt(d.fpl_sel)) })
    .attr("fill", function (d) {
      switch (d.club) {
        case "Arsenal":
          return "#EF0107"
        case "Chelsea":
          return "#034694"
        case "Liverpool":
          return "#C8102E"
        case "Manchester+City":
          return "#6CABDD"
        case "Manchester+United":
          return "#DA291C"
        case "Newcastle United":
          return "#241F20"
        case "Tottenham":
          return "#132257"
      }
    })
})