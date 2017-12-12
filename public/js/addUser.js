// The code in addUser.js handles what happens when the user clicks the "Add a book" button.

// When user clicks add-btn
$("#sub-muffin").on("click", function(event) {
  event.preventDefault();

  // Make a newUser object
  var newUser = {
    username: $("#username").val().trim(),
    password: $("#password").val().trim()
  };

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newUser)
    // On success, run the following code
    .done(function(data) {
      // Log the data we found
      console.log(data);
    });

  // Empty each input box by replacing the value with an empty string
  $("#username").val("");
  $("#password").val("");
});
