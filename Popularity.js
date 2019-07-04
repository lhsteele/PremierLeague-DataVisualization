d3.json("https://lhsteele.github.io/PremierLeague-DataVisualization/json/2018_19_player_data.json").then(function (data) {
  var width = 500,
    height = 500

  var svg = d3.select("#popularity-data-area")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")


  var circles = svg.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", 50)
    .attr("cy", 50)
    .attr("r", function (d) { return console.log(d.Current_fpl_sel) })
    .attr("fill", function (d) {
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