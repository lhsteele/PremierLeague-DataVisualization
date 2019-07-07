const top4CardsMatrix = [
  [0, 5, 5, 7],
  [5, 0, 3, 1],
  [5, 3, 0, 5],
  [7, 1, 5, 0]
]

const top4Colors = [
  "#6CABDD",
  "#C8102E",
  "#034694",
  "#132257"
]

const top4Names = [
  "Man City",
  "Liverpool",
  "Chelsea",
  "Tottenham"
]

const top4Tooltips = [
  [
    "Man City / Liverpool : 5",
    "Man City / Chelsea : 5", 
    "Man City / Tottenham : 7"
  ]
]

const bottom4CardsMatrix = [
  [0, 5, 11, 7],
  [5, 0, 6, 6],
  [11, 6, 0, 7],
  [7, 6, 7, 0]
]

const bottom4Colors = [
  "#0057B8",
  "#0070B5",
  "#CC0000",
  "#0E63AD"
]

const bottom4Names = [
  "Brighton",
  "Cardiff",
  "Fulham",
  "Huddersfield"
]

function top4() {
  var innerRadius = 200
  outerRadius = 200

  var svg = d3.select("#top-4-cards-data-area")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500)
    .append("g")
    .attr("transform", "translate(250,250)")

  var chord = d3.chord()
    .padAngle(0.05)
    .sortSubgroups(d3.descending)
    (top4CardsMatrix)

  var arc = d3.arc()
    .innerRadius(200)
    .outerRadius(225)

  function fade(opacity) {
    return function (g, i) {
      svg.selectAll(".chord path")
        .filter(function (d) { return d.source.index != i && d.target.index != i; })
        .transition()
        .style("opacity", opacity);
    };
  }

  var tooltip = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden")
    .attr("class", "tooltip")

  svg.selectAll("path")
    .data(chord.groups)
    .enter().append("path")
    .style("fill", function (d, i) { return top4Colors[i] })
    .attr("d", arc)
    .attr("class", "arc")
    .attr("id", function (d, i) { return "group" + i; })
    .on("mouseover", fade(.1))
    .on("mouseout", fade(1))
    .on("click", function(d, i) {
      return tooltip
        .style("visibility", "visible")
        .html(top4Tooltips[i])
    })

  svg.selectAll("text")
    .data(chord.groups)
    .enter().append("text")
    .attr("dx", 30)
    .attr("dy", -10)
    .append("textPath")
    .attr("class", "label")
    .attr("xlink:href", function (d) { return "#group" + d.index; })
    .text(function (d, i) { return top4Names[i] })

  svg.append("g")
    .datum(chord)
    .attr("class", "chord")
    .selectAll("path")
    .data(function (d) { return d; })
    .enter()
    .append("path")
    .attr("d", d3.ribbon()
      .radius(200)
    )
    .style("fill", function (d, i) { return (top4Colors[d.source.index]) })
    .style("opacity", 1)

}

function bottom4() {
  var innerRadius = 200
  outerRadius = 200

  var svg = d3.select("#bottom-4-cards-data-area")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500)
    .append("g")
    .attr("transform", "translate(250,250)")

  var chord = d3.chord()
    .padAngle(0.05)
    .sortSubgroups(d3.descending)
    (bottom4CardsMatrix)

  var arc = d3.arc()
    .innerRadius(200)
    .outerRadius(225)

  function fade(opacity) {
    return function (g, i) {
      svg.selectAll(".chord path")
        .filter(function (d) { return d.source.index != i && d.target.index != i; })
        .transition()
        .style("opacity", opacity);
    };
  }


  svg.selectAll("path")
    .data(chord.groups)
    .enter().append("path")
    .style("fill", function (d, i) { return bottom4Colors[i] })
    .attr("d", arc)
    .attr("class", "arc")
    .attr("id", function (d, i) { return "group" + i; })
    .on("mouseover", fade(.1))
    .on("mouseout", fade(1))

  svg.selectAll("text")
    .data(chord.groups)
    .enter().append("text")
    .attr("dx", 30)
    .attr("dy", -10)
    .append("textPath")
    .attr("class", "label")
    .attr("xlink:href", function (d) { return "#group" + d.index; })
    .text(function (d, i) { return bottom4Names[i] })

  svg.append("g")
    .datum(chord)
    .attr("class", "chord")
    .selectAll("path")
    .data(function (d) { return d; })
    .enter()
    .append("path")
    .attr("d", d3.ribbon()
      .radius(200)
    )
    .style("fill", function (d, i) { return (bottom4Colors[d.source.index]) })
    .style("opacity", 1)
}

window.onload = function() {
  top4()
  bottom4()
}
