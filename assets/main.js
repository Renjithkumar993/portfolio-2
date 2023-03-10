



$(".mainlist").hide();
$(".aboutmesec").hide();


$(".home").on("click", function () {
  location.reload();
  firstPage.show();
})





$(".aboutme").on("click", function () {
  if ($(".aboutmesec").hasClass("active")) {
    $(".aboutmesec").slideDown(1000);
  }
  $(".maincontent").addClass("d-none")
  $(".mainlist").show();

})




$('ul.nav-tabs li').click(function () {
  var tab_id = $(this).find('a').attr('href');
  $('ul.nav-tabs li').removeClass('active');
  $('.tab-pane').removeClass('active');
  $(this).addClass('active');
  $(tab_id).addClass('active');
});





$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


