$(document).ready(function(){


    $(".btn").on("click", function(event) {
        event.preventDefault();
      
        // Make a newPick object
        var newPick = {
          pick: $(".btn").val()
        };
       
      
        // Send an AJAX POST-request with jQuery
        $.post("/api/newPick", newPick)
          // On success, run the following code
          .done(function(data) {
            // Log the data we found
            console.log(data);
          });
      });
});