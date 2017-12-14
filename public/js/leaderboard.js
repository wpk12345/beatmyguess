// Make a get request to our api route that will return every book
$.get("/api/all", function(data) {
  // For each book that our server sends us back
  for (var i = 0; i < data.length; i++) {
    // Create a parent div to hold book data
    var tableSection = $("<tr>");
    // Add a class to this div: 'well'
    // tableSection.addClass("table");
    // Add an id to the well to mark which well it is
    tableSection.attr("id", "user-row-" + i);
    // Append the well to the well section
    $("#userHub").append(tableSection);

    // Now  we add our book data to the well we just placed on the page
    // $("#user-row-" + i).append("<tr>" + (i + 1) + ". " + data[i].username);
    $("#user-row-" + i).append("<td>" + data[i].username + "</td>");
    $("#user-row-" + i).append("<td>" + data[i].win + "</td>");
    $("#user-row-" + i).append("<td>" + data[i].loss + "</td>");
    $("#user-row-" + i).append("<td>" + data[i].accuracy + "%</td>");
    $("#user-row-" + i).append("</tr>");
    
  }
});

        // Table data sorting starts....
      //   function sortData(){
      //     var tableData = document.getElementById('tableOne').getElementsByTagName('tbody').item(0);
      //     var rowData = tableData.getElementsByTagName('tr');            
      //     for(var i = 0; i < rowData.length - 1; i++){
      //         for(var j = 0; j < rowData.length - (i + 1); j++){
      //                      if(parseInt(rowData.item(j).getElementsByTagName('td').item(0).innerHTML) > parseInt(rowData.item(j+1).getElementsByTagName('td').item(0).innerHTML)){
      //                 tableData.insertBefore(rowData.item(j+1),rowData.item(j));
      //             }
      //         }
      //     }
      // }
      // Table data sorting ends....

// var usernameArr = [];
// var winArr = [];
// var lossArr = [];
// var accuracyArr = [];
// var userObj = [];

// for (var i=0; i < data.length; i++){
// usernameArr.push(data[i].username);
// winArr.push(data[i].win);
// lossArr.push(data[i].loss);
// accuracyArr.push(data[i].accuracy);
// }
// for (var i=0; i < data.length; i++){
// userObj.push({username = data[i].username, win = data[i].win, loss = data[i].loss, accuracy = data[i].accuracy})
// }

// function myFunction() {
//   usernameArr.sort(function(a, b){return b-a});

// for (var i = 0; i < usernameArr.length; i++) {

//   $("#user-row-" + i).html("<td>" + data[i].username + "</td>");
//   $("#user-row-" + i).html("<td>" + data[i].win + "</td>");
//   $("#user-row-" + i).html("<td>" + data[i].loss + "</td>");
//   $("#user-row-" + i).html("<td>" + data[i].accuracy + "%</td>");
//   $("#user-row-" + i).html("</tr>");
// }
// }

//accuracyArr.push(data[i].accuracy);