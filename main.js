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

// Try deep-link, back up to href link if that fails
$('a.intent').on('click', function (event) {
    document.location($(this).data('scheme'));
    setTimeout(function () {
      document.location($(this).attr(href)); 
    }, 100);
});
})();
