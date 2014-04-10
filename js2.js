$(function() {
  $('#school-btn').click(function() {
    var input = $("#task");
    var data = input.val();
    $('#school-tasks').append("<p class=\"single-task\">" + data + "</p>");
    $('#task').val("");

    $('#school-tasks').on('click', '.single-task', function() {

      var tasky = $(this);

      if (!tasky.hasClass('.completed-task')) {
        tasky.addClass('.completed-task');
      } else {
        tasky.remove();
      }
    });
  });
});