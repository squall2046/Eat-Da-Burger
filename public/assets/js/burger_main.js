// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  //////////////// create new burger from input form ////////////////
  $(".newForm").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    let newBurger = {
      burger_name: $("#burgerInput").val().trim(),
      devoured: 0
      // in DB, devoured is boolean: 0 is false; 1 is true
    };
    console.log(newBurger)

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function () {
      location.reload();
    });
  });

  //////////////// update burger condition from noDevour/devoured list to devoured/noDevour list ////////////////
  $(".devour").on("click", function (event) {
    var id = $(this).data("id");
    console.log(id);

    var newState = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newState
    }).then(
      function () {
        console.log(newState);
        // Reload the page to get the updated list
        location.reload();
      });
  });

});
