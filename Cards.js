const cardsMatrix = [
  [0, 7, 10, 13, 13, 4, 8, 8, 3, 14, 9, 5, 6, 10, 2, 4, 13, 7, 6, 9],
  [5, 7, 2, 3, 2, 3, 5, 8, 5, 2, 9, 0, 10, 6, 2, 8, 1, 3, 5, 2],
  [6, 3, 3, 6, 5, 5, 4, 5, 2, 6, 10, 10, 0, 6, 5, 8, 7, 3, 2, 5],
  [13, 11, 6, 6, 5, 5, 3, 4, 5, 8, 8, 1, 7, 9, 5, 6, 0, 7, 5, 8]
]

const clubColors = [
  "#EF0107",
  "#C8102E",
  "#6CABDD",
  "#132257"
]

const clubNames = [
  "Arsenal",
  "Liverpool",
  "Man City",
  "Tottenham"
]

window.onload = function() {
  var innerRadius = 400
    outerRadius = 400 

  var svg = d3.select("#cards-data-area")
    .append("svg")
    .attr("width", 1000)
    .attr("height", 1000)
    .append("g")
    .attr("transform", "translate(500,500)")

  var chord = d3.chord()
    .padAngle(0.05)
    .sortSubgroups(d3.descending)
    (cardsMatrix)

  var arc = d3.arc()
    .innerRadius(400)
    .outerRadius(430)


  svg.selectAll("path")
    .data(chord.groups)
    .enter().append("path")
    .style("fill", function (d, i) { return clubColors[i] })
    .attr("d", arc)
    .attr("class", "arc")
    .attr("id", function (d, i) { return "group" + i; });
  
  svg.selectAll("text")
    .data(chord.groups)
    .enter().append("text")
    .attr("dx", 20)
    .attr("dy", -10)
    .append("textPath")
    .attr("class", "label")
    .attr("xlink:href", function (d) { return "#group" + d.index; })
    .text(function (d, i) { return clubNames[i] })

  svg.append("g")
    .datum(chord)
    .attr("class", "chord")
    .selectAll("path")
    .data(function (d) { return d; })
    .enter()
    .append("path")
    .attr("d", d3.ribbon()
      .radius(400)
    )
    .style("fill", "white")
    .style("stroke", function (d, i) { return (clubColors[d.target.index]) })


}
