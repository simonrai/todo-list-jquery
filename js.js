$(function() {
  $('#work-btn').click(function() {
    var input = $("#task");
    var data = input.val();
    $('#work-tasks').append("<p>" + data +"</p>");
  });
});

$(function() {
  $('#school-btn').click(function() {
    var input = $("#task");
    var data = input.val();
    $('#school-tasks').append("<p>" + data +"</p>");
  });
});

$(function() {
  $('#home-btn').click(function() {
    var input = $("#task");
    var data = input.val();
    $('#home-tasks').append("<p>" + data +"</p>");
  });
});