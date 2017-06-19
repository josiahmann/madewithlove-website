$(document).ready(function() {
	var features = [];
	$('.card--radio').click(function(){
		$('.card--radio').removeClass('card--hover');
		$(this).addClass('card--hover');
	});

	$('.card--checkbox').click(function(){
		$(this).toggleClass('card--hover');
	});

	$('input[type="checkbox"]').change(function(e) {
			features[$(this).val()] = $(this).prop('checked');				
	});

  var price = $('#price');
  var timeline = $('#timeline');

  // setup noUiSlider for project range
   $('#priceSlider').noUiSlider({
      range: [5, 45],
      start: [20, 30],
      step: 5,
      pips: {
        mode: 'range',
        density: 10
      },
      connect: true,
      behaviour: 'extend-tap',
      slide: function() {
          price.val("");
          var e = $(this).val();
          price.val("$" + e[0] + "-" + e[1] + "k");
          if (e[0] == e[1]) {
              if (e[0] == "45") {
                  price.val("$" + e[0] + "k +")
              } else {
                  price.val("$" + e[0] + "k")
              }
          } else if (e[1] == "45"){
              price.val("$" + e[0] + "-" + e[1] + "k+")
          }
      },
      serialization: {
          resolution: 1
      }
  });

  // setup noUiSlider for timeline range
 $('#timeSlider').noUiSlider({
    range: [1, 12],
    start: [6, 9],
    step: 1,
    connect: true,
    behaviour: 'extend-tap',
    slide: function() {
        timeline.val("");
        var e = $(this).val();
        timeline.val(e[0] + "-" + e[1] + " months");
        if (e[0] == e[1]) {
            if (e[0] == "12") {
                timeline.val(e[0] + "+ months")
            } else {
                timeline.val(e[0] + " months")
            }
        } else if (e[1] == "12"){
            timeline.val(e[0] + "-" + e[1] + "+ months")
        }
    },
    serialization: {
        resolution: 1
    }
  });



  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });
});