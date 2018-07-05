// $('')
//     .hide()
//     .slideDown(1000)
//     .delay(3000)
//     .slideUp();



$(document).ready(function () {
    $(".active").click(function () {
        $(".items").hide(300);
    });
    $(".active").click(function () {
        $(".items").show(300);
    });
});

// $(document).ready(function() {
//   $('.toggle-nav').click(function(e) {
//     $(this).toggleClass('active')
//     $('.menu ul').toggleClass('active');
// 		e.preventDefault();
// 	});
// });