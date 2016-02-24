var textBox = $('#console');
var message = $("#message");
var maxLength = textBox.attr("maxLength");
var seventiyfivePercentOfMax = maxLength * .75;
var twentyfivePercentOfMax = maxLength * .25;
var messageVisible = false;

function keyChecker(){
    var charLength = textBox.val().length;
    console.log(charLength);
    if (charLength > 0 && !messageVisible) {
        message.parent().removeClass("toast-hide").addClass("toast-show");
        messageVisible = true;
    }
    if (charLength > twentyfivePercentOfMax && charLength < seventiyfivePercentOfMax) { // if
        message.addClass("alert-warning")
    }
    if (charLength >= seventiyfivePercentOfMax) {
        message.addClass("alert-danger");
    } else {
        message.removeClass("alert-danger");
    }
    if (charLength < twentyfivePercentOfMax) {
        message.removeClass("alert-warning")
            .addClass("alert-info");
    }
    if (charLength == 0 && messageVisible) {
        message.parent().removeClass("toast-show").addClass("toast-hide");
        messageVisible = false;
    }
    message.text(maxLength - charLength)
}

textBox.keyup(keyChecker);
textBox.keydown(keyChecker);