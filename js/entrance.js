//indexes/placeholders
var sat_index = 0;
var ufo_index = 0;
var comet_index = 0;

//// ONLOAD ENTRANCES   ////
$(document).ready(function (){                
    ufoEntrance();
    // microwaveRock();
});	

//// SCROLL ANIMATIONS  ////

  //UFO EXIT
$(window).scroll(function(){
  if (ufo_index === 0) {
    if ($(window).scrollTop() > 200) {
      ufoExit();  
    };  
  };
	

if ($(window).scrollTop() > 900) {
    if (ufo_index === 1) {
      
      ufoReAppear();  
    };    
  };

if ($(window).scrollTop() > 1200) {
  if (ufo_index === 2) {
    
    ufoReAppear2();  
  };    
};

if ($(window).scrollTop() > 2300) {
  if (ufo_index === 3) {
    
    ufoReAppear3();  
  };    
};  

if ($(window).scrollTop() > 2700) {
  if (ufo_index === 4) {
    
    ufoReAppear4();  
  };    
};  


//   // //SATELLITE ENTER/EXT
//   if ($(window).scrollTop() > 500 && sat_index == 0) {

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
    
    $("#ufo"),
      // addClass('ufo-small'),
    $("#ufo-beam").
      addClass('beam-none'),
    $("#ufo-container").
      animate({top:'1600px'},100).
      animate({opacity:1,left:'-=160%'},5200);
};  

function ufoReAppear2(){
    ufo_index += 1;
  //addClass('ufo_small').
    
    $("#ufo-container").
      animate({top:'2119px'},100).
      animate({left:'+=80%'},4000).
      delay(300).
      animate({top:'+=50'},500).
      animate({top:'-=100'},1000).
      animate({top:'+=50'},500).
      animate({rotate:'-=15deg'},100).
      animate({left:'+=80%'},1000).
      animate({rotate:'+=15deg'},10);
};  

function ufoReAppear3(){
    ufo_index += 1;
  //addClass('ufo_small').
    
    $("#ufo-container").
      animate({top:'2600px'},1000).
      animate({left:'-=160%',top:'+=600px'},5500);
};

function ufoReAppear4(){
    ufo_index += 1;
  //addClass('ufo_small').
    
    $("#ufo-container").
      animate({top:'3600px'},100).
      animate({left:'+=10%'},1000).
      animate({top:'+=100',left:'+=45%'},2000).
      animate({left:'+=45%'},3000).
      delay(1000).
      animate({top:'+=280',scale:'-=1'},2000);
};


// //////////////////////
// Satelliate (<----lol) stuff//
// /////////////////////

// $(document).ready(function() {
//       $(window).bind('scroll', function() {
//         satelliteEntrance( $(window).scrollLeft() > 500 );
//       });    
//         function satelliteEntrance( right_of_bridge ) {

//             if( $(".satellite").css('opacity') == 0 && right_of_bridge )

//           $(".satellite").delay(1100).animate({opacity:1,left:'+=500'},2200);
//         }
//     });



// function satelliteEntrance() {
// sat_index += 1;   

//     $(".satellite").
//       delay(1100).
//       animate({left:'+=60%'},2200);
// };

// function satelliteExit() {
// sat_index -= 1;

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

// move the comet
$(document).ready(function (){                
    comet();  
}); 

// see if its even
function isOdd(num) { return num % 2;}


function comet(){
  comet_index += 1;
  var fart = isOdd(comet_index);
  console.log(fart);
  if (comet_index === 1) {
    $("#comet-container").
      animate({rotate:"-=160deg"}).
      animate({left:'+=250%',top:'500px'},5500,comet)    
  } else if (fart === 0){
    $("#comet-container").
      delay(3000).
      animate({rotate:"+=140deg",top:'100px'}).
      animate({left:'-=250%',top:'500px'},5500,comet)    
  } else if (fart === 1) {
    $("#comet-container").
      delay(4000).
      animate({rotate:"-=140deg",top:'100px'}).
      animate({left:'+=250%',top:'800px'},5500,comet)    
  };
    
};

  function ufoReAppear3(){
    ufo_index += 1;
  //addClass('ufo_small').
    
    $("#ufo-container").
      animate({top:'2600px'},1000).
      animate({left:'-=160%',top:'+=600px'},5500);
};



// Move that MOON SON 
$(document).ready(function (){                
    mooningOn();  

}); 

function mooningOn(){
    $("#earth-moon-container").
      removeClass('earthy-index').
      animate({left:'70%', bottom: '-200'},5000),
      $("#earth-moon").
        animate({rotate:'-=175deg'},5000, mooningOff)
      // removeClass('earthy-index');
      // removeClass('earthy-index', mooning);      
  };

  function mooningOff(){
    $("#earth-moon-container").
      
      addClass('earthy-index').
      animate({left:'10%', bottom: '190'},5000),
      $("#earth-moon").
        animate({rotate:'-=175deg'},5000, mooningOn);
      // removeClass('earthy-index');
      // removeClass('earthy-index', mooning);      
  };

    // $("#ufo"),
    //   // addClass('ufo-small'),
    // $("#ufo-beam").
    //   addClass('beam-none'),
    // $("#ufo-container").
    //   animate({top:'1600px'},100).
    //   animate({opacity:1,left:'-=160%'},5200);


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









