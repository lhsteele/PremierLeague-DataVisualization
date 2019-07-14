function generateChart() {
  var radii = [];
  var width = 300
  var height = 300

  function chart(container) {
    g = container;

    container.select("svg").remove();

    var svg = container.append("svg")
      .attr("width", width)
      .attr("height", height)

    svg
      .selectAll("circle")
      .data(datum)
      .enter()
      .append("circle")
      .attr("r", function(d) { return d.Goals })
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
    return my
  }


}

var newChart = generateChart()

d3.json("https://lhsteele.github.io/PremierLeague-DataVisualization/json/player_data_1718.json").then(function (data) {
  data.forEach(function(d) {
    d3.select("#player-parent-div")
        .datum([data])
        .call(newChart)
  })
  
})