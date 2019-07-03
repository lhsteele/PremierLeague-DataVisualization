d3.json("https://lhsteele.github.io/PremierLeague-DataVisualization/json/season_1819.json").then(function (data) {
  var width = 1000,
    height = 1000;

  var svg = d3.select("#league-data-area")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(0,0)");
  // .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  var radiusScale = d3.scaleSqrt().domain([0, 8]).range([5, 25])

  var simulation = d3.forceSimulation()
    .force("x", d3.forceX(width / 2).strength(0.05))
    .force("y", d3.forceY(height / 2).strength(0.05))
    .force("collide", d3.forceCollide(function (d) { return radiusScale(d.GPM) + 3 }))

  simulation.nodes(data)
    .on("tick", ticked)

  function ticked() {
    circles
      .attr("cx", function (d) { return d.x })
      .attr("cy", function (d) { return d.y })
  }

  var toolTip = d3.select("body")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "white")
    .style("border-radius", 10)
    .style("padding", "10px")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden")

  var showData = function (d) {
    toolTip
      .transition()
      .duration(200)
    toolTip
      .html(d.WinClub + " " + d.FTHG + " " + d.LossClub + " " + d.FTAG)
    toolTip
      .style("opacity", 1)
      .style("left", (d3.mouse(this)[0]) + "px")
      .style("top", (d3.mouse(this)[1]) + "px")
      .style("visibility", "visible")
      .style("display", "inline")
    console.log(d.team)
  }

  var moveData = function (d) {
    toolTip
      .style("left", (d3.mouse(this)[0]) + "px")
    .style("top", (d3.mouse(this)[1]) + "px")
  }

  var hideData = function (d) {
    toolTip
      .transition()
      .duration(200)
      .style("opacity", 0)
  }

  var circles = svg.selectAll("clubs")
    .data(data)
    .enter()
    .append("circle")
    .attr("r", function (d) { return radiusScale(d.GPM) })
    .on("mouseover", showData)
    .on("mousemove", moveData)
    .on("mouseleave", hideData)
    .attr("fill", function (d) {
      switch (d.WinClub) {
        case "Arsenal":
          return "#EF0107"
        case "Bournemouth":
          return "#DA291C"
        case "Brighton":
          return "#0057B8"
        case "Burnley":
          return "#6C1D45"
        case "Cardiff":
          return "#0070B5"
        case "Chelsea":
          return "#034694"
        case "Crystal Palace":
          return "#1B458F"
        case "Everton":
          return "#003399"
        case "Fulham":
          return "#CC0000"
        case "Huddersfield":
          return "#0E63AD"
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
        case "Southampton":
          return "#D71920"
        case "Tottenham":
          return "#132257"
        case "Watford":
          return "#FBEE23"
        case "West Ham":
          return "#7A263A"
        case "Wolves":
          return "#FDB913"
      }
    })


})



