
  var data = [
    {parent: "Group 1", major: "Mining Eng", value: 13},
    {parent: "Group 1", major: "Mechanical",  value: 14},
    {parent: "Group 1", major: "Naval Architecture", value: 20},
    {parent: "Group 2", major: "Electrical Eng ", value: 9},
    {parent: "Group 2", major: "Chemistry", value: 9},
    {parent: "Group 2", major: "Civil Eng", value: 8},
    {parent: "Group 2", major: "Chemical Eng", value: 6},
    {parent: "Group 2", major: "Chemical Eng", value: 6},
    {parent: "Group 2", major: "Sanitary Eng", value: 4},
    {parent: "Group 2", major: "Aero", value: 4},
    {parent: "Group 2", major: "Public Health", value: 2},
    {parent: "Group 2", major: "Undeclared", value: 9},
  ];

var visualization = d3plus.viz()
    .container("#svg_pie")  // container DIV to hold the visualization
    .data(data)  // data to use with the visualization
    .type("pie")   // visualization type
    .id("major")         // key for which our data is unique on
    .size("value")  
    .draw() 
