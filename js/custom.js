/*

	Template Name: Eventech -  Conference & Event HTML Template
	Author: Tripples
	Version: 1.0

	1. Preloader
	2. Mobile Menu
	3. Main Slideshow
	4. Gallery popup
	5. Counter
	6. Contact form
	7. Back to top

*/

/* CountDown JavaScript for event goes here*/

function countDown(){
  let now = new Date(),
      eventDate = new Date(2018, 08, 01),
      currentTime = now.getTime(),
      eventTime = eventDate.getTime(),
      remTime = eventTime - currentTime,
      s = Math.floor(remTime/1000),
      m = Math.floor(s/60),
      h = Math.floor(m/60),
      d = Math.floor(h/24);

      h %= 24;
      m %= 60;
      s %= 60;

      h = (h < 10) ? "0"+ h : h;
      m = (m < 10) ? "0"+ m : m;
      s = (s < 10) ? "0"+ s : s;

      document.getElementById("days").textContent = d;
      document.getElementById("hours").textContent = h;
      document.getElementById("minutes").textContent = m;
      document.getElementById("seconds").textContent = s;

      setInterval(countDown , 1000);

}

countDown();

/* JS for tab panel for about section */

var tabButtons = document.querySelectorAll(".tabContainer .buttonContainer button");

var tabPanels = document.querySelectorAll(".tabContainer .tabPanel");

function showPanel(panelIndex, colorCode){
  tabButtons.forEach(function(node){
    node.style.backgroundColor ="";
    node.style.color="";
  });
  tabButtons[panelIndex].style.backgroundColor=colorCode;
  tabButtons[panelIndex].style.color="#000";

  tabPanels.forEach(function(node){
    node.style.display="none";
  });
  tabPanels[panelIndex].style.display ="block";
  tabPanels[panelIndex].style.backgroundColor =colorCode;
}

showPanel(0, '#fff');


jQuery(function($) {
  "use strict";

  	/* ----------------------------------------------------------- */
	/*  Preload
	/* ----------------------------------------------------------- */

	function handlePreloader() {

		if($('.preload').length){
			$('.preload').delay(220).fadeOut(500);
		}
	}


	/* ----------------------------------------------------------- */
	/*  Mobile Menu
	/* ----------------------------------------------------------- */

	jQuery(".nav.navbar-nav li a").on("click", function() {
		jQuery(this).parent("li").find(".dropdown-menu").slideToggle();
		jQuery(this).find("i").toggleClass("fa-angle-down fa-angle-up");
	});


	/* ----------------------------------------------------------- */
	/*  Main slideshow
	/* ----------------------------------------------------------- */

		$('#main-slide').carousel({
			pause: true,
			interval: 3000,
		});


	/* ----------------------------------------------------------- */
	/*  Gallery popup
	/* ----------------------------------------------------------- */

	  $(document).ready(function(){

			$(".gallery-popup").colorbox({rel:'gallery-popup', transition:"fade", innerHeight:"700"});

			$(".popup").colorbox({iframe:true, innerWidth:650, innerHeight:450});

	  });



	/* ----------------------------------------------------------- */
	/*  Counter
	/* ----------------------------------------------------------- */

		$('.counterUp').counterUp({
		 delay: 10,
		 time: 1000
		});



	/* ----------------------------------------------------------- */
	/*  Contact form
	/* ----------------------------------------------------------- */

	$('#contact-form').submit(function(){

		var $form = $(this),
			$error = $form.find('.error-container'),
			action  = $form.attr('action');

		$error.slideUp(750, function() {
			$error.hide();

			var $name = $form.find('.form-control-name'),
				$email = $form.find('.form-control-email'),
				$subject = $form.find('.form-control-subject'),
				$message = $form.find('.form-control-message');

			$.post(action, {
					name: $name.val(),
					email: $email.val(),
					subject: $subject.val(),
					message: $message.val()
				},
				function(data){
					$error.html(data);
					$error.slideDown('slow');

					if (data.match('success') != null) {
						$name.val('');
						$email.val('');
						$subject.val('');
						$message.val('');
					}
				}
			);

		});

		return false;

	});


	/* ----------------------------------------------------------- */
	/*  Back to top
	/* ----------------------------------------------------------- */

		$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				 $('#back-to-top').fadeIn();
			} else {
				 $('#back-to-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#back-to-top').on('click', function () {
			 $('#back-to-top').tooltip('hide');
			 $('body,html').animate({
				  scrollTop: 0
			 }, 800);
			 return false;
		});

		$('#back-to-top').tooltip('hide');


		/* Preloade */

		$(window).on('load', function() {
			handlePreloader();
		});


});
