d3.json("https://lhsteele.github.io/PremierLeague-DataVisualization/json/2018_19_player_data.json").then(function (data) {
  var width = 300,
    height = 300
    radius = Math.min(width, height) / 2

  var svg = d3.select("#popularity-data-area")
    .append("svg")
    .attr("width", width)
    .attr("height", height)

  var tooltip = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden")
    .attr("class", "tooltip")

  var pieDetails = d3.pie()
    .sort(null)
    .value(function(d) { return d.Current_fpl_sel })(data)

  var segments = d3.arc() 
    .outerRadius(radius - 25)
    .innerRadius(50)
    .padAngle(.05)
    .padRadius(50)

  var sections = svg.append("g")
    .attr("transform", "translate(150, 150)")
    .selectAll("path")
    .data(pieDetails)

  sections.enter() 
    .append("path")
    .attr("d", segments)
    .attr("fill", function (d) {
      switch (d.data.Club) {
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
    .on("mouseover", function(d) {
      return tooltip
        .style("visibility", "visible")
        .html(d.data.Player + " " + Math.floor(d.data.Current_fpl_sel * 100) + "%")
    })
    .on("mousemove", function() {
      return tooltip.style("top", (event.pageY-10)+"px").style("left", (event.pageX+10)+"px")
    })
    .on("mouseout", function() {
      return tooltip.style("visibility", "hidden")
    })

    
})