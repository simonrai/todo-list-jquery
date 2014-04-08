$(function() {
    $('#save-btn').click(function() {
        var input = $("#full-name");
        var data = input.val();
        $('#output').append("<p>" + data +"</p>");
    });
});