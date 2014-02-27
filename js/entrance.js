//indexes/placeholders
var sat_index = 0;
var ufo_index = 0;


//// ONLOAD ENTRANCES   ////
$(document).ready(function (){                
    ufoEntrance();
    // microwaveRock();
});	

//// SCROLL ANIMATIONS  ////

  //UFO EXIT
$(window).scroll(function(){
  if (ufo_index === 0) {
    if ($(window).scrollTop() > 100) {
      ufoExit();  
    };  
  };
	

if ($(window).scrollTop() > 900) {
    if (ufo_index === 1) {
      console.log(ufo_index)
      ufoReAppear();  
    };    
  };
  
//   // //SATELLITE ENTER/EXT
//   if ($(window).scrollTop() > 500 && sat_index == 0) {
//     console.log('wassup')
//     satelliteEntrance();  
//   };
//   if ($(window).scrollTop() < 450 && sat_index == 1) {
//     satelliteExit();  
//   };




});

// //////////////////////
// UFO stuff//
// /////////////////////
function ufoEntrance() {
    $("#ufo-container").
      delay(100).
      animate({opacity:1,left:'+=105%'},2200),
        $("#ufo-beam").
        delay(2400).
        animate({opacity:0.9},800, 'linear').
        delay(300).
        animate({opacity:0},800, 'linear').
        delay(300).
        animate({opacity:0.8},800, 'linear').
        delay(300).
        animate({opacity:0},800, 'linear').
        delay(300).
        animate({opacity:1},800, 'linear')
        ;
};    

function ufoExit() {
  ufo_index += 1;
  
    $("#ufo-beam").
    animate({opacity:0},100, 'linear'),
    $("#ufo-container").
      delay(900).
      animate({left:'-=50',top:'+=375'},1200).
      animate({opacity:1,left:'+=135%'},1800);
};    

// //display none after fly away!!!!!!
// function die() {
// 	$(this).addClass('noDisplay');
// };

function ufoReAppear(){
    ufo_index += 1;
  //addClass('ufo_small').
    console.log('reappear')
    $("#ufo").
      addClass('ufo-small'),
    $("#ufo-container").
      animate({top:'1600px'},100).
      animate({opacity:1,left:'-=160%'},5200);
};  








// //////////////////////
// Satelliate (<----lol) stuff//
// /////////////////////

// $(document).ready(function() {
//       $(window).bind('scroll', function() {
//         satelliteEntrance( $(window).scrollLeft() > 500 );
//       });    
//         function satelliteEntrance( right_of_bridge ) {
//           console.log('satentrance1')
//             if( $(".satellite").css('opacity') == 0 && right_of_bridge )
//             console.log('satentrance2') 
//           $(".satellite").delay(1100).animate({opacity:1,left:'+=500'},2200);
//         }
//     });



// function satelliteEntrance() {
// sat_index += 1;   
// console.log(sat_index)
//     $(".satellite").
//       delay(1100).
//       animate({left:'+=60%'},2200);
// };

// function satelliteExit() {
// sat_index -= 1;
//   console.log('get away')
//     $(".satellite").
//       delay(1100).
//       animate({left:'-=60%'},2200);
// };


// //////////////////////
// UFO stuff//
// /////////////////////
// function microwaveRock() {
//     $("#sat").
//       delay(100).
//       animate({rotate:'+=1deg'},500).
//       animate({rotate:'-=1deg'},500).
//       animate({rotate:'+=1deg'},500).
//       animate({rotate:'-=1deg'},500).
//       animate({rotate:'+=1deg'},500).
//       animate({rotate:'-=1deg'},500).
//       animate({rotate:'+=1deg'},500).
//       animate({rotate:'-=1deg'},500);
// };    

// SUN ANIMATION
$(document).ready(function microwaveRock() {
    $("#sat img").
      animate({rotate:'+=15deg'},5000).
      animate({rotate:'-=15deg'},5000, microwaveRock);
});










