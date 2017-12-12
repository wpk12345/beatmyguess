$(document).ready(function(){
  
// When the page loads, grab and display all of our users for populating the leaderboard table

$.get("/api/users", function(data) {
    console.log(data);
      if (data.length !== 0) {
    
        for (var i = 0; i < data.length; i++) {
    
          var row = $("<tr>");
          row.addClass("user");
    
          row.append("<td>" + data[i].username + "</td>");
          row.append("<td>" + data[i].win + "</td>");
          row.append("<td>" + data[i].loss + "</td>");
          row.append("<td>" + data[i].accuracy + "</td>");
          $("#userHub").prepend(row);
    
        }
    
      }
    
    });
     });

     // This function grabs users from the database and updates the view
  //  function getUsers() {
  //   $.get("/api/users", function(data) {
  //     var row = $("<tr>");
  //     row.addClass("user");

  //     row.append("<td>" + data[i].username + "</td>");
  //     row.append("<td>" + data[i].win + "</td>");
  //     row.append("<td>" + data[i].loss + "</td>");
  //     row.append("<td>" + data[i].accuracy + "</td>");
  //     $("#userHub").append(row);
  //     // currentUser = data;
  //     console.log(data);
  //     // initializeRows();
  //   });
  // }