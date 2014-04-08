$(function() {
  $('#work-btn').click(function() {
    var input = $("#task");
    var data = input.val();
    $('#work-tasks').append("<p>" + data + "</p>");
    $('#task').val("");
  });
});

$(function() {
  $('#school-btn').click(function() {
    var input = $("#task");
    var data = input.val();
    $('#school-tasks').append("<p>" + data +"</p>");
    $('#task').val("");
  });
});

$(function() {
  $('#home-btn').click(function() {
    var input = $("#task");
    var data = input.val();
    $('#home-tasks').append("<p>" + data +"</p>");
    $('#task').val("");    
  });
});