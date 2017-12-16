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
    $("#user-row-" + i).append("<td class='win'>" + data[i].wins + "</td>");
    $("#user-row-" + i).append("<td class='loss'>" + data[i].losses + "</td>");
    $("#user-row-" + i).append("<td class='accurate'>" + data[i].accuracy + "%</td>");
    $("#user-row-" + i).append("</tr>");
    
  }
});

//functions that sort the leaderboard table

function sortTableAccuracy() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("tableOne");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("tr");
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByClassName("accurate")[0];
      y = rows[i + 1].getElementsByClassName("accurate")[0];

      var xx = parseInt(x.innerHTML);
      var yy = parseInt(y.innerHTML);
      //check if the two rows should switch place:
      if (xx < yy) {
        //if so, mark as a switch and break the loop:
        shouldSwitch= true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("tableOne");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("tr");
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByClassName("win")[0];
      y = rows[i + 1].getElementsByClassName("win")[0];

      var xx = parseInt(x.innerHTML);
      var yy = parseInt(y.innerHTML);
      //check if the two rows should switch place:
      if (xx < yy) {
        //if so, mark as a switch and break the loop:
        shouldSwitch= true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
function sortLosses() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("tableOne");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("tr");
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByClassName("loss")[0];
      y = rows[i + 1].getElementsByClassName("loss")[0];

      var xx = parseInt(x.innerHTML);
      var yy = parseInt(y.innerHTML);
      //check if the two rows should switch place:
      if (xx < yy) {
        //if so, mark as a switch and break the loop:
        shouldSwitch= true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

