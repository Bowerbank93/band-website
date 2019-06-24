$(function () {
    $(document).scroll(function() {
        let $nav = $("#main-nav");
        $nav.toggleClass("scroll", $(this).scrollTop() > $nav.height());
    })
});