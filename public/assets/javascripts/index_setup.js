$(document).ready(function(){
    if ($(window).innerWidth() <= 480) {

        $(".nav li a[href*=#]:not([href=#])").on("click", function(e) {
            var hash;
            e.preventDefault();
            hash = this.hash;
            $("html, body").animate({
                scrollTop: parseInt($(this.hash).offset().top - 50) + "px"
            }, 1500);

            $(".navbar-toggle").click()

        });
    } else {

        $(".nav li a[href*=#]:not([href=#])").on("click", function(e) {
            var hash;
            e.preventDefault();
            hash = this.hash;
            $("html, body").animate({
                scrollTop: parseInt($(this.hash).offset().top) + "px"
            }, 1500);});
    }
});
