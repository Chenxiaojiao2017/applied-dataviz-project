
  var data = [
    {"year": 1877, "name":"Male", "value": 1},
    {"year": 1880, "name":"Male", "value": 10},
    {"year": 1885, "name":"Male", "value": 0},
    {"year": 1990, "name":"Male", "value": 0},
    {"year": 1905, "name":"Male", "value": 8},
    {"year": 1910, "name":"Male", "value": 25},
    {"year": 1915, "name":"Male", "value": 45},
    {"year": 1920, "name":"Male", "value": 55},
    {"year": 1925, "name":"Male", "value": 52},
    {"year": 1929, "name":"Fmale", "value": 1}


  ];

var visualization = d3plus.viz()
    .container("#svg_line")  // container DIV to hold the visualization
    .data(data)  // data to use with the visualization
    .type("line")       
    .id("name")         
    .text("name")       
    .y("value")         
    .x("year")
    .shape({
      "interpolate": "basis"  // takes accepted values to change interpolation type
    })
    .draw()         
  


