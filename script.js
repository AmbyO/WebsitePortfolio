$(document).ready(function(){
	
		var height = $(window).innerHeight();
		var width = $(window).innerWidth();		
			
		document.onload = dimensions();
		
		function dimensions(){
			if ( width > 1024){		
					$("#landingPage").css("height", height);
			}else{		
					
						$("#landingPage").css({"height": "auto", "padding-bottom":" 30px"});
				}
		
		}
		
		$(window).resize(function(){
			
				if(width < 1024){
					
					$("#landingPage").css({"height": "auto", "padding-bottom":" 30px"});
					
				}
			
			
			});
		
		//clicking on the menu button will open up the navigation
	
		$("#menu").click(function(){
			
			
				$("#navigation, #close-nav").fadeToggle();
			
			
			});
			
		//clicking on the link or x button will close the nav
	
		$("#close-nav, #navigation ul li").click(function(){
			
			
				$("#navigation, #close-nav").fadeToggle();
			
			
			});
		
		//animating the reach me button
			
		$("#reach-me").mouseenter(function(){
			
				$("#left").addClass("leftanim");
			
			});
			
		$("#reach-me").mouseleave(function(){
			
				$("#left").removeClass("leftanim");
			
			});
			
		//scrolling up to the about me page with the nav link and button
		
		$("#landingPageFooter, #aboutme-link").click(function(){
			
				$('body').stop().animate({
					scrollTop: $("#aboutMe").offset().top + 2}, "slow");
				
		});
		
		$("#portfolio-link").click(function(){
			
				$('body').stop().animate({
					scrollTop: $("#portfolio").offset().top + 2}, "slow");
				
		});
		
		$("#home-link").click(function(){
			
				$('body').stop().animate({
					scrollTop: $("#landingPage").offset().top + 2}, "slow");
				
		});
		
		$("#reach-me, #contactme-link").click(function(){
			
				$('body').stop().animate({
					scrollTop: $("#contactme").offset().top + 2}, "slow");
				
		});
		
		
		
		$("#reach-me").waypoint(function(){
			
				$("#html5").addClass("html5anim");
				$("#j-s").addClass("jsanim");
				$("#css").addClass("cssanim");
				$("#jquery").addClass("jqanim");
				$("#b-strap").addClass("bsanim");
				$("#sass").addClass("sassanim");
				
			});

		
		
	});
