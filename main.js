(function () {
// contact slide-down
var contact_clicked = false;
$("#contact-button").on('click', function(){
    if (contact_clicked) {
        contact_clicked = false;
        $("#contact-links").fadeToggle(500);
        $("#contact-links").css({"top": "-40px"});
    } else {
        contact_clicked = true;
        $("#contact-links").fadeToggle(1000);
        $("#contact-links").css({"top": 0});
    }
});
})();
