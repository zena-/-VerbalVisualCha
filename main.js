$(function(){

	// full page img
	'use strict';
	var window_height = $(window).height(),
       content_height = window_height ;
    $('#banner').height(content_height);


    // the from factory text stays on the bottom of page
    $('.pull-down').each(function() {
	    var $this = $(this);
	    $this.css('margin-top', $this.parent().height() - $this.height() - 40)
	});


	// menu bar
	var nav = $('#main-menu-container');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 525) {
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
        }
    });


    // ///////////////  Task 2 ///////////////////// //
    var sum = 0, 
        i = 1000;

    while (i --) {
      if (i%3===0 || i%5===0) {
        sum += i;
       }
     }
    console.log("The sum of all the multiples of 3 or 5 below 1000 === "+ sum);
    console.log("This simple code is saying, staring from 1000 and counting down. get the multiples of 3 and 5, we know its a multiple because it will return 0. after we have all that, add up the multiples ");

});