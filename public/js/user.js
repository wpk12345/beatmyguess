$(document).ready(function() {
  // Getting references to the name inout and author container, as well as the table body
  var nameInput = $("#author-name");
  var authorList = $("tbody");
  var authorContainer = $(".author-container");
  // Adding event listeners to the form to create a new object, and the button to delete
  // an Author
  $(document).on("submit", "#author-form", handleAuthorFormSubmit);
  $(document).on("click", ".delete-author", handleDeleteButtonPress);

  // Getting the intiial list of Authors
  getAuthors();

  // A function to handle what happens when the form is submitted to create a new Author
  function handleAuthorFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (!nameInput.val().trim().trim()) {
      return;
    }
    // Calling the upsertAuthor function and passing in the value of the name input
    upsertAuthor({
      name: nameInput
        .val()
        .trim()
    });
  }

  // A function for creating an author. Calls getAuthors upon completion
  function upsertAuthor(authorData) {
    $.post("/api/users", authorData)
      .then(getAuthors);
  }

  // Function for creating a new list row for authors
  function createAuthorRow(authorData) {
    var newTr = $("<tr>");
    newTr.data("author", authorData);
    newTr.append("<td>" + authorData.username + "</td>");
    newTr.append("<td> " + authorData.Posts.length + "</td>");
    newTr.append("<td><a href='/blog?author_id=" + authorData.id + "'>Go to Posts</a></td>");
    newTr.append("<td><a href='/cms?author_id=" + authorData.id + "'>Create a Post</a></td>");
    newTr.append("<td><a style='cursor:pointer;color:red' class='delete-author'>Delete Author</a></td>");
    return newTr;
  }

  // Function for retrieving authors and getting them ready to be rendered to the page
  function getAuthors() {
    $.get("/api/users", function(data) {
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createAuthorRow(data[i]));
      }
      renderAuthorList(rowsToAdd);
      nameInput.val("");
    });
  }

  // A function for rendering the list of authors to the page
  function renderAuthorList(rows) {
    authorList.children().not(":last").remove();
    authorContainer.children(".alert").remove();
    if (rows.length) {
      console.log(rows);
      authorList.prepend(rows);
    }
    else {
      renderEmpty();
    }
  }

  // Function for handling what to render when there are no authors
  function renderEmpty() {
    var alertDiv = $("<div>");
    alertDiv.addClass("alert alert-danger");
    alertDiv.text("You must create an Author before you can create a Post.");
    authorContainer.append(alertDiv);
  }

  
});



















// $(document).ready(function() {
//   var userName = $("#username");
//   var password = $("#password");
//   var email = $("#email");

//   // var currentUser = [];
  
//   $(document).on("submit", "#sub-muffin", insertUser);

  
//  // This function inserts a new user into our database 
//  function insertUser(event) {
//   event.preventDefault();
//   var user = {
//     username: userName.val().trim(),
//     password: password.val().trim(),
//     email: email.val().trim()
//   };

//   $.post("/api/users", user);
//   userName.val("");
//   password.val("");  
//   email.val("");
// }


  // function addUser() {
  //   userName.val().trim();
  //   password.val().trim();
  //   email.val().trim();
  //   $(document).on("submit", "#sub-muffin", handleUserFormSubmit);
  // };

//    // Getting the intiial list of Users
//    getUsers();
//   // A function to handle what happens when the form is submitted to create a new User
//   function handleUserFormSubmit(event) {
//     event.preventDefault();
//     // Don't do anything if the name/password/email fields haven't been filled out
//     if (!userName.val().trim().trim() && !password.val().trim().trim() && !email.val().trim().trim()
//     ) {
//       return;
//     }

//     // Calling the upsertUser function and passing in the value of the name input
//     upsertUser({
//       username: userName.val().trim(),
//       password: password.val().trim(),
//       email: email.val().trim()
//     });
//   };
// // A function for creating an author. Calls getUsers upon completion
// function upsertUser(userData) {
//   $.post("/api/users", userData)
//     .then(getUsers);
// }
//   // Function for retrieving users and getting them ready to be rendered to the page
//   function getUsers() {
//     $.get("/api/users", function(data) {
//       for (var i = 0; i < data.length; i++) {
//         var row = $("<tr>");
//         row.addClass("user");
//         row.append("<td>" + data[i].username + "</td>");
//         row.append("<td>" + data[i].win + "</td>");
//         row.append("<td>" + data[i].loss + "</td>");
//         row.append("<td>" + data[i].accuracy + "</td>");      }
//     });
//   }
// });
