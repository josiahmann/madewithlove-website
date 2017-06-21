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
  
  $('section').each(function(i){
    var anchorToggle = $(this).find('a.js-toggle-' + (i + 2));
    var inputToggle = $(this).find('input.js-toggle-' + (i + 2));
    
    anchorToggle.click(function(e){
      e.preventDefault();
      var target = $(this.hash);

      $('#section-' + (i + 2)).addClass('section--visible');
      waitThenScroll(target);
    });
    
    inputToggle.change(function(e){
      e.preventDefault();
      var target = $(this).closest('section').next();

      $('#section-' + (i + 2)).addClass('section--visible');
      if (i === 5) {
        $('#section-8, #section-9').addClass('section--visible');
        initSliders();
      }
      
      if ($(this).attr('type') === 'radio') { 
        waitThenScroll(target);
      }
    });
  });

  function waitThenScroll(target) {
    setTimeout(function(){
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
    }, 100)
  }
  new WOW().init();
  
  function initSliders() {
    $('.slicky').slick({
      lazyLoad: 'ondemand',
      dots: true,
      adaptiveHeight: true
    });

    $('.slick-logos').slick({
      lazyLoad: 'ondemand',
      dots: true,
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2
        }
      }, 
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1
        }
      }]
    });
  }

  // Select all links with hashes
    // $('a[href*="#"]')
    //   // Remove links that don't actually link to anything
    //   .not('[href="#"]')
    //   .not('[href="#0"]')
    //   .click(function(event) {
    //     // On-page links
    //     if (
    //       location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    //       && 
    //       location.hostname == this.hostname
    //     ) {
    //       // Figure out element to scroll to
    //       var target = $(this.hash);
    //       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //       // Does a scroll target exist?
    //       if (target.length) {
    //         // Only prevent default if animation is actually gonna happen
    //         event.preventDefault();
    //         $('html, body').animate({
    //           scrollTop: target.offset().top
    //         }, 1000, function() {
    //           // Callback after animation
    //           // Must change focus!
    //           var $target = $(target);
    //           $target.focus();
    //           if ($target.is(":focus")) { // Checking if the target was focused
    //             return false;
    //           } else {
    //             $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
    //             $target.focus(); // Set focus again
    //           };
    //         });
    //       }
    //     }
    //   });

});
$(window).load(function() {
  // When the page has loaded
  $("body").addClass('loaded');
});