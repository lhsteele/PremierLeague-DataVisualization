d3.json("https://lhsteele.github.io/PremierLeague-DataVisualization/json/2018_19_player_data.json").then(function (data) {
  var width = 500,
  height = 500

  var svg = d3.select("#goals-data-area")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")

  
  var circles = svg.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", 150)
    .attr("cy", 150)
    .attr("r", function (d) { return d.Goals * 6 })
    .attr("fill", "white")
    .attr("stroke-width", 5)
    .attr("stroke", function (d) {
      switch (d.Club) {
        case "Arsenal":
          return "#EF0107"
        case "Bournemouth":
          return "#DA291C"
        case "Brighton":
          return "#0057B8"
        case "Chelsea":
          return "#034694"
        case "Crystal Palace":
          return "#1B458F"
        case "Everton":
          return "#003399"
        case "Leicester":
          return "#003090"
        case "Liverpool":
          return "#C8102E"
        case "Man City":
          return "#6CABDD"
        case "Man United":
          return "#DA291C"
        case "Newcastle":
          return "#241F20"
        case "Tottenham":
          return "#132257"
        case "Wolves":
          return "#FDB913"
      }
    })
})