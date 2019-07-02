d3.json("https://lhsteele.github.io/PremierLeague-DataVisualization/EPL_1718_season.json").then(function (data) {
  var margin = { top: 50, right: 50, bottom: 50, left: 50 },
    width = 500 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

  var svg = d3.select("#league-data-area")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.height + margin.bottom)
    .append("g")
    .attr("transform",
      "translate(" + margin.left + "," + margin.top + ")")



  var x = d3.scaleLinear()
    .domain([0, 35])
    .range([0, width])

  var y = d3.scaleLinear()
    .domain([0, 32])
    .range([height, 0])

  console.log(data)
  console.log("hello")

  svg
    .selectAll("whatever")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", function (d) { return x(d.HST) })
    .attr("cy", function (d) { return y(d.HST) })
    .attr("r", function (d) { return (d.FTHG * 10) })
    .attr("fill", function (d) {
      switch (d.HomeTeam) {
        case "Arsenal": 
          return "#EF0107"
        case "Bournemouth":
          return "#DA291C"
        case "Brighton":
          return "#0057B8"
        case "Burnley":
          return "#6C1D45"
        case "Chelsea":
          return "#034694"
        case "Crystal Palace":
          return "#1B458F"
        case "Everton":
          return "#003399"
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
        case "Stoke":
          return "#E03A3E"
        case "Swansea":
          return "#121212"
        case "Tottenham":
          return "#132257"
        case "Watford":
          return "#FBEE23"
        case "West Brom":
          return "#122F67"
        case "West Ham":
          return "#7A263A"
      }
    })
})