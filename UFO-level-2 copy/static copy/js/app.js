// from data.js
var tableData = data;

// YOUR CODE HERE!
console.log(tableData)

// Reference the table body
var tableBody = d3.select("tbody")

// UFO sightings per column
tableData.forEach(function(sighting) {
    console.log(sighting);

    var row = tableBody.append("tr");

    Object.entries(sighting).forEach(function([key, value]) {
        console.log(key, value);

        var cell = row.append("td");
        cell.text(value);
    });
}) ;

// Input Button (selection button)
var btn = d3.select("filter-btn");
btn.on("click", function(){

    tableBody.hmtl("");

    var nptElement = d3.select("#input")
    var nptValue = nptElement.property("value")

    var filtered = tableData.filter(sighting => sighting.datetime === nptValue ||
                                                sighting.city === nptValue ||
                                                sighting.state === nptValue ||
                                                sighting.country === nptValue ||
                                                sighting.shape === nptValue);
    console.log(filtered);

    filtered.forEach(function(selections) {
        console.log(selections);

    var row = tableBody.append("tr");
    Object.entries(selections).forEach(function([key, value]){
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});
});