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
$(document).ready(
  function microwaveRock() {
    $("#sat img").
      animate({rotate:'+=15deg'},5000).
      animate({rotate:'-=15deg'},5000, microwaveRock);
  });


$("#ufo-beam").
    animate({opacity:0},100, 'linear'),
    $("#ufo-container").
      delay(900).
      animate({left:'-=50',top:'+=375'},1200).
      animate({opacity:1,left:'+=135%'},1800);



$(document).ready(
  function laserRock() {
    $("#laser-left-large").
          animate({rotate:'-=15deg'},2500).
          animate({rotate:'+=5deg'},2500).
          animate({rotate:'-=15deg'},2500).
          animate({rotate:'+=5deg'},2500).
          animate({rotate:'-=15deg'},2500).
          animate({rotate:'+=5deg'},2500).
          animate({rotate:'+=15deg'},2500).
          animate({rotate:'-=5deg'},2500).
          animate({rotate:'+=15deg'},2500).
          animate({rotate:'-=5deg'},2500).
          animate({rotate:'+=15deg'},2500).
          animate({rotate:'-=5deg'},2500, laserRock)
  }
);
$(document).ready(
  function laserBeam() {
      $("#laser-left-beam").
          delay(1000).
          animate({opacity:1},1000).
          delay(1000).
          animate({opacity:0},1000, laserBeam);
      }
    );

$(document).ready(
  function minilaserRock1() {
    $("#l1").
          animate({rotate:'-=15deg',top:'+=20',left:'+=10'},1500).
          animate({rotate:'+=15deg',top:'-=20',left:'-=10'},1500,minilaserRock1);
        }
      );

$(document).ready(  
  function minilaserRock2() {
    $("#l2").
          animate({rotate:'+=20deg',top:'-=10'},2000).
          animate({rotate:'-=20deg',top:'+=10'},2000,minilaserRock2);
  }
);        

$(document).ready(
  function minilaserRock3() {
    $("#l3").
          animate({rotate:'-=6deg',top:'+=30',left:'-=15'},3000).
          animate({rotate:'+=6deg',top:'-=30',left:'+=15'},3000,minilaserRock3);
    }
);        

// $(document).ready(
//   function laserrightmicrowave() {
//     $("#laser-right-microwave").
//           animate({rotate:'-=6deg',top:'+=30',left:'-=15'},3000).
//           animate({rotate:'+=6deg',top:'-=30',left:'+=15'},3000,laserrightmicrowave);
//     }
// );   



// Little planets
// $(document).ready(function littleEarth() {
//     $("#distance-legend-earth").
//       animate({rotate:'+=15deg'},5000).
//       animate({rotate:'-=15deg'},5000, littleEarth);
// });









