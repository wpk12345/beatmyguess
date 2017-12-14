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

// $("#wins-filter").on("click", function(){
//   function sortTable(){
//     var table,rows,switching,i,x,y, shouldSwitch;
//     switching = true;
//     while (switching){
//       switching = false;

//       x = rows[i].getElementsByTagName("TR");
//       for(i = 1; i < (rows.length-1); i++){
//         x = rows[i].getElementsByTagName("TD")[0];        
//         y = rows[i + 1].getElementsByTagName("TD")[0];
        
//               if (x.innerHTML > y.innerHTML){
//                 shouldSwitch = true;
//                 break;
//               } 
//       }
//     if (shouldSwitch){
//       rows[i].parentNode.insertBefore(rows[i+1],rows[i]);
//       switching = true;
//     }
//   }
//   }
// });

$("#losses-filter").on("click", function(){
  
});

$("#accuracy-filter").on("click", function(){
  
});