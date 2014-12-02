/**
 * AngularJS 
 * @author Lili Ng <lng@bmj.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('bmjTech', [ 'ngRoute']).run(
		[ '$anchorScroll', function($anchorScroll) {
			//$anchorScroll.yOffset = 50; // always scroll by 50 extra pixels
		} ]);


/**
 * Configure the Routes
 */
app.config([ '$routeProvider', function($routeProvider) {
	$routeProvider
	// Home
	.when("/", {
		templateUrl : "partials/home.html",
		controller : "PageCtrl"
	})
	.when("/page-top", {
		templateUrl : "partials/home.html",
		controller : "PageCtrl"
	})
	// Pages
	.when("/about", {
		templateUrl : "partials/about/home.html",
		controller : "PageCtrl"
	})	
	/*.when("/coLab", {
		templateUrl : "partials/about/home.html",
		controller : "PageCtrl"
	})
	.when("/engineering", {
		templateUrl : "partials/about/home.html",
		controller : "PageCtrl"
	})
	.when("/businessServices", {
		templateUrl : "partials/about/home.html",
		controller : "PageCtrl"
	})
	.when("/operations", {
		templateUrl : "partials/about/home.html",
		controller : "PageCtrl"
	})*/
	.when("/work", {
		templateUrl : "partials/work/home.html",
		controller : "PageCtrl"
	})	
	.when("/jobs", {
		templateUrl : "partials/jobs.html",
		controller : "PageCtrl"
	})
	.when("/news", {
		templateUrl : "partials/news-and-events.html",
		controller : "PageCtrl"
	})
	.when("/contact", {
		templateUrl : "partials/contact-us.html",
		controller : "PageCtrl"
	})
	// else 404
	.otherwise("/404", {
		templateUrl : "partials/404.html",
		controller : "PageCtrl"
	});
} ]);

/**
 * Controls all Pages
 */
app.controller('PageCtrl', function($scope, $location, $http) {
	console.log("Page Controller reporting for duty.");

	// jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
	    if ($(".navbar").offset().top > 50) {
	        $(".navbar-fixed-top").addClass("top-nav-collapse");
	    } else {
	        $(".navbar-fixed-top").removeClass("top-nav-collapse");
	    }
	});

	// jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
	    $('a.page-scroll').bind('click', function(event) {
	    	event.preventDefault();
	        var $anchor = $(this); 	      
	        $('html, body').stop().animate({
	            scrollTop: $($anchor.attr('href')).offset().top
	        }, 1500, 'easeInOutExpo');	       
	    });   		  
	});
	
	// How we work section using nimble js
	// cache container
    var container = $('#portfolio-items-wrap');


    container.isotope({
        animationEngine: 'best-available',
        animationOptions: {
            duration: 200,
            queue: false
        },
        layoutMode: 'fitRows'
    });


    jQuery('#filters a').click(function () {
        jQuery('#filters a').removeClass('active');
        jQuery(this).addClass('active');
        var selector = jQuery(this).attr('data-filter');
        container.isotope({
            filter: selector
        });
        setProjects();
        return false;
    });


    function columnsWidth() {
        var winWidth = jQuery(window).width(),
            columns = 1;


        if (winWidth > 1200) {
            columns = 4;
        } else if (winWidth > 900) {
            columns = 4;
        } else if (winWidth > 600) {
            columns = 3;
        } else if (winWidth > 300) {
            columns = 1;
        }

        return columns;
    }

    function setColumns() {
        var winWidth = jQuery(window).width(),
            columns = columnsWidth(),
            postWidth = Math.floor(winWidth / columns);

        container.find('.portfolio-item').each(function () {
            jQuery(this).css({
                width: postWidth + 'px'
            });
        });
    }

    function setProjects() {
        setColumns();
        container.isotope('reLayout');
    }

    container.imagesLoaded(function () {
        setColumns();
    });


    $(window).bind('resize', function () {
        setProjects();
    });
	
});

/* home scrolling function */
$(function() {
	function onScrollInit( items, trigger ) {
    items.each( function() {
    var osElement = $(this),
        osAnimationClass = osElement.attr('data-os-animation'),
        osAnimationDelay = osElement.attr('data-os-animation-delay');
      
        osElement.css({
            '-webkit-animation-delay':  osAnimationDelay,
            '-moz-animation-delay':     osAnimationDelay,
            'animation-delay':          osAnimationDelay
        });

        var osTrigger = ( trigger ) ? trigger : osElement;
        
        osTrigger.waypoint(function() {
            osElement.addClass('animated').addClass(osAnimationClass);
            },{
                triggerOnce: true,
                offset: '90%'
            });
    	});
	}

	onScrollInit( $('.os-animation') );
	onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') ); 
});

	
	$(document).ready(function() {		
		
		// preload images function
		$("body").queryLoader2({
            barColor:"#6e6d73",
            backgroundColor:"#0000CD",
            percentage:true,
            barHeight:5
        });

	    /*
	     *  Simple image gallery. Uses default settings
	     */
	    $('.fancybox').fancybox($);

	    /*
	     *  Different effects
	     */   
		$('.fancybox-media').fancybox({
			openEffect  : 'none',
			closeEffect : 'none',
			helpers : {
				media : {}
			}
		});			
	
	// Closes the Responsive Menu on Menu Item Click
	$('.navbar-collapse ul li a').click(function() {
	    $('.navbar-toggle:visible').click();
	});
	

	//init work portfolio images		
	$('#filter-technologies').bind('click', function(){
		//$('#filter-technologies').trigger('click');	
	});
	
});

app.controller('ScrollCtrl', [ '$anchorScroll', '$location', '$scope',
		function($anchorScroll, $location, $scope) {	
			$scope.gotoAnchor = function(x) {	
				var newHash = x;
				// set element to visible	
				var selElement = "."+x;	
				$(selElement).attr("style", "display:block");
				if ($location.hash() !== newHash) {
					// set the $location.hash to `newHash` and
					// $anchorScroll will automatically scroll to it									
					$location.hash(x);				
				} else {
					// call $anchorScroll() explicitly,
					// since $location.hash hasn't changed
					$anchorScroll();
				}
			};
		} ]);