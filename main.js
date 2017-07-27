var contact_clicked = false;
$("#contact-button").on('click', function(){
    if (contact_clicked) {
        contact_clicked = false;
        $("#contact-links").css({"top": "-40px"});
    } else {
        contact_clicked = true;
        $("#contact-links").css({"top": 0});
    }
});
