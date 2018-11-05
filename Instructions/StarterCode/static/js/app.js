var tableData = data;

// Select the submit button
var submit = d3.select("#filter-btn");
var tbody = d3.select("tbody");

submit.on("click", function(){
   // Prevent the page from refreshing
   d3.event.preventDefault();
   // YOUR CODE
   // Select the input element and get the raw HTML node
var inputElement = d3.select("#datetime");

// Get the value property of the input element
var inputValue = inputElement.property("value");

console.log(inputValue);
console.log(tableData);

var filteredData = tableData.filter(observation => observation.datetime === inputValue);
   console.log(filteredData);


filteredData.forEach(function(ufoReport){
  var row = tbody.append("tr");
  var data_formatted = Object.entries(ufoReport);
  data_formatted.forEach(function(row_data){
    row.append("td").text(row_data[1]);
    });
  });
});
