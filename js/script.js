// $('')
//     .hide()
//     .slideDown(1000)
//     .delay(3000)
//     .slideUp();

// $(function () {
//     $('a.hamburger').click(function () {
//         toggleNavbar();
//     });
// });

// function toggleNavbar() {
//     $('.nav-btn-group').toggleClass('navbarOpen');
// }
$(document).ready(function () {
    $('span.mobile').click(function () {
        $('#navbar').toggle();
    });
});