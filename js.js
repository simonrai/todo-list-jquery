$(function() {
  $('#work-btn').click(function() {
    var input = $("#task");
    var data = input.val();
    $('#work-tasks').append("<p class=\"delete\">" + data + "</p>");
    $('#task').val("");
    $('#work-tasks').on('click', '.delete', function() {
  	$(this).remove();
	});
  });
});

$(function() {
  $('#school-btn').click(function() {
    var input = $("#task");
    var data = input.val();
    $('#school-tasks').append("<p class=\"delete\">" + data + "</p>");
    $('#task').val("");
    $('#school-tasks').on('click', '.delete', function() {
  	$(this).css("text-decoration", "line-through");
  });
});
});

$(function() {
  $('#home-btn').click(function() {
    var input = $("#task");
    var data = input.val();
    $('#home-tasks').append("<p class=\"delete\">" + data + "</p>");
    $('#task').val("");
    $('#home-tasks').on('click', '.delete', function() {
  	$(this).remove();
  });
});
});
