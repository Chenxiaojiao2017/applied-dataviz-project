
  var data = [
    {parent: "Group 1", province: "Guangdong", value: 115},
    {parent: "Group 1", province: "Jiangsu",  value: 99},
    {parent: "Group 1", province: "Zhejiang", value: 30},
    {parent: "Group 2", province: "Fujian", value: 30},
    {parent: "Group 3", province: "Hebei",   value: 28},
    {parent: "Group 3", province: "Hunan",   value: 14},
    {parent: "Group 3", province: "Anhui",   value: 10},
    {parent: "Group 3", province: "Jiangxi",   value: 10},
    {parent: "Group 3", province: "Hubei",   value: 9},
    {parent: "Group 3", province: "shandong",   value: 9},
    {parent: "Group 3", province: "Sichuan",   value: 8},
    {parent: "Group 3", province: "Other",   value: 19},
  ];


var visualization = d3plus.viz()
    .container("#svg_treemapchina")  // container DIV to hold the visualization
    .data(data)  // data to use with the visualization
    .type("tree_map")   // visualization type
    .id("province")         // key for which our data is unique on
    .size("value")      // sizing of blocks
    .draw() 
