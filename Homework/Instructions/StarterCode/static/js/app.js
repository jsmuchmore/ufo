// from data.js
var tableData = data;

var submit = d3.select("#filter-btn");
var tbody = d3.select("tbody");

submit.on("click", function() {
    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");
    
    for (var i = 0; i < tableData.length; i++) {
        if (tableData[i]["datetime"] === inputValue) {
            var row = tbody.append("tr");

            var datetime = row.append("td");
            var city = row.append("td");
            var state = row.append("td");
            var country = row.append("td");
            var shape = row.append("td");
            var durationMinutes = row.append("td");
            var comment = row.append("td");
            
            datetime.text(tableData[i]["datetime"]);
            city.text(tableData[i]["city"]);
            state.text(tableData[i]["state"]);
            country.text(tableData[i]["country"]);
            shape.text(tableData[i]["shape"]);
            durationMinutes.text(tableData[i]["durationMinutes"]);
            comment.text(tableData[i]["comments"]);   
        }
    }
});
