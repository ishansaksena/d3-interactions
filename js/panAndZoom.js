// Panning and Zooming

// Geometric Zooming
// Inspired by
// https://bl.ocks.org/mbostock/3680999
$(function () {
    var svg = d3.select("#panZoomGeometric"),
        width = +svg.attr("width"),
        height = +svg.attr("height");

    // Random normal probabilty distribution.
    // Just generating random points to display.
    var randomX = d3.randomNormal(width / 2, 80),
        randomY = d3.randomNormal(height / 2, 80),
        data = d3.range(2000).map(function () { return [randomX(), randomY()]; });

    var g = svg.append("g");

    // Enter a circle for each data point. 
    var circle = g.selectAll("circle")
        .data(data)
        .enter().append("circle")
        .attr("r", 2.5)
        .attr("transform", function (d) { return "translate(" + d + ")"; });

    // Make a rectangle covering the whole visualization. 
    // Listen for all pointer events, including scroll up and down. 
    // d3.zoom does the rest. 
    svg.append("rect")
        .attr("fill", "none")
        .attr("pointer-events", "all")
        .attr("width", width)
        .attr("height", height)
        .call(d3.zoom()
            .scaleExtent([1, 8])
            .on("zoom", zoom));

    // D3 will generate the transform values depending on the user pointer input.
    function zoom() {
        g.attr("transform", d3.event.transform);
    }
})

// Semantic Zooming 
// Inspired by
// https://bl.ocks.org/mbostock/3680957
$(function () {

    var svg = d3.select("#panZoomSemantic"),
        width = +svg.attr("width"),
        height = +svg.attr("height");

    var randomX = d3.randomNormal(width / 2, 80),
        randomY = d3.randomNormal(height / 2, 80),
        data = d3.range(2000).map(function () { return [randomX(), randomY()]; });

    var circle = svg.selectAll("circle")
        .data(data)
        .enter().append("circle")
        .attr("r", 2.5)
        .attr("transform", transform(d3.zoomIdentity));

    svg.append("rect")
        .attr("fill", "none")
        .attr("pointer-events", "all")
        .attr("width", width)
        .attr("height", height)
        .call(d3.zoom()
            .scaleExtent([1, 8])
            .on("zoom", zoom));

    function zoom() {
        circle.attr("transform", transform(d3.event.transform));
    }

    function transform(t) {
        return function (d) {
            return "translate(" + t.apply(d) + ")";
        };
    }
})