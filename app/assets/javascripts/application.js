// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function(){

////

  var mainstreamGrids = [  "0px", "-960px", "-1920px" ]
  var mainstreamCurrent = 0;

function rightMainClick() {

  mainstreamCurrent += 1

  $("#items").animate({"left": mainstreamGrids[mainstreamCurrent]}, 1000)
  $("#buttons2 .leftbutton").fadeIn()

  if (mainstreamCurrent==(mainstreamGrids.length -1)) {

    $("#buttons2 .rightbutton").fadeOut()
  }
}

function leftMainClick() {


  mainstreamCurrent -= 1

  $("#items").animate({"left": mainstreamGrids[mainstreamCurrent]}, 1000)

  $("#buttons2 .rightbutton").fadeIn()

  if (mainstreamCurrent==(mainstreamGrids.length - 3)) {  //NB  "-5" needs to be whatever length of array is

    $("#buttons2 .leftbutton").fadeOut()
  }


}

  $("#buttons2 .rightbutton").click(function(event) {        

    event.preventDefault();

    rightMainClick()

  });


  $("#buttons2 .leftbutton").click(function(event) {        

    event.preventDefault();

    leftMainClick()

  });

///////




  $("#toggle").click(function(event) {

  
    $("#titleh2").fadeOut()
    $("#nytlogo img").css({display:  "inline"}).animate({top:  "-150px"}, 800)
    $('#masthead .alien').fadeOut(function(){ 
     $('#gaps').fadeOut(function(){$("#letteri").fadeIn(function(){
      $("#items").animate({left:  "0" }, 1000)

        $("#toggle2").fadeIn()
      

            });
          })
        });
    $("#top5news").css({top:  "-420px"});
    $("#buttons").css({display:  "none"})
    $("#buttons2").css({display:  "block"})
    $("#toggle").fadeOut()
    var mainstreamCurrent = 0
    $("#buttons .leftbutton").css({display:  "none"})
    $("#buttons .rightbutton").css({display:  "block"})



});

  $("#toggle2").click(function(event) {
    $("#wantmore").css({display:  "none"})
    $("#buttons").css({display:  "block"})
    $("#buttons2").css({display:  "none"})
  $("#toggle2").fadeOut()
    $("#letteri").fadeOut(function(){

      $("#gaps").fadeIn(function() {

        $('#masthead .alien').fadeIn(function(){

          $("#titleh2").fadeIn(function(){

            $("#toggle").fadeIn()
            var mainstreamCurrent = 0
            $("#buttons2 .leftbutton").css({display:  "none"})
             $("#buttons2 .rightbutton").css({display:  "block"})


          })
        })
      })
    })

 
    $("#nytlogo img").animate({top:"70px"}, 800, function(){
      $("#nytlogo img").css({display:  "none"}) 
      $("#items").animate({left:  "-2870px" }, 1000)
        });
     });

 	$('#buttons .rightbutton').click(function(event) {
 		event.preventDefault();

    $("#items").animate({left:  "-3840" }, 1000, function(){ 

      if (screen.width>1024) {

      $("#lightabout").fadeIn()

    }

    });
    $("#buttons .leftbutton").fadeIn();
    $("#buttons .rightbutton").fadeOut();
    $("#wantmore").fadeIn();
    $("#newarrow").fadeIn()
    
    
 });
 



 	$('#buttons .leftbutton').click(function(event) {
 		event.preventDefault();
    $("#items").animate({left:  "-2870px" }, 1000)
    $("#buttons .rightbutton").fadeIn();
    $("#buttons .leftbutton").fadeOut();
    $("#wantmore").fadeOut();
    $("#newarrow").fadeOut()
    $("#lightabout").fadeOut()



  });


  $("#wantmore").click(function(event) {

    $("#top5news").fadeIn();
    $("#newarrow").fadeOut();
    $("#genassembly").fadeOut();


    });

  $("#top5news img").click(function(event) {

    event.preventDefault();

    $("#top5news").fadeOut();
    $("#newarrow").fadeIn();
    $("#genassembly").fadeIn();

    });


  $(document).scroll(function(event) {

    $("#lightabout").fadeOut()


  });

$("#aboutlink").click(function(event){
  
    event.preventDefault();

    $("#aboutwrapper").fadeIn();
    $("#about").fadeIn();
    $("#aboutlink").fadeOut();

});


$("#about .close").click(function(event){

  event.preventDefault();

  $("#aboutwrapper").fadeOut();
  $("#about").fadeOut();
  $("#aboutlink").fadeIn();


});

$("#aboutwrapper").click(function(event){


  $("#about").fadeOut();
  $("#aboutwrapper").fadeOut();
  $("#aboutlink").fadeIn();

});

$("#about").click(function(event){


  event.stopPropagation();

});

$("#newscoverage img").click(function(event){


  event.stopPropagation();

});

///// LIGHTBOX



// $.getJSON("http://www.reddit.com/r/pics.json?jsonp=?,
//     function(data) {

//       if(!data.data.children[0].data.url.match(/\.jpg$/)){  //this is all for the first image
//       data.data.children[0].data.url += '.jpg';
//       }

  
//       $("#lightboxpic img").attr("src, data.data.children[0].data.url);
//       $("#lightboxpic a").attr("href, data.data.children[0].data.url);
//       $("#lightboxcaption h2").html(data.data.children[0].data.title + '<span id="redditcomments">&nbsp&nbsp[Reddit comments]</span>' );
//       $("#lightboxcaption a.imagelink").attr("href, ("http://www.reddit.com" + data.data.children[0].data.permalink))
//       $("img").error(function () {
//             $(this).unbind("error").attr("src, "images/error.png");
//             $("#lightboxpic a").attr("href, lightboximages[lightboxCurrent].comments)
//           });
        


// // });




// $("#slideshowlink img, #newarrow h2").click(function(event) {

//   $("#lightbox, #lightboxwrapper").fadeIn(function(){





 //this is all executing as a callback of the fadeIn function

  // $.getJSON("http://www.reddit.com/r/pics.json?jsonp=?,
  //   function(data) {
  //      var lightboximages = [];
  //      for (var i=0; i<data.data.children.slice(0, 10).length; i++) {
  //          var child = data.data.children[i];
          

  //           if(!child.data.url.match(/\.jpg$/)){  //this bit adds a .jpg to the src if there isn't one already
  //     child.data.url += '.jpg'}



  //          var lightboxObj = {src: child.data.url, caption: child.data.title, comments: "http://reddit.com" + child.data.permalink};
  //          lightboximages.push(lightboxObj);

  //           //this for if the imgur.url is a gallery
  //      }
       

       //now we call the rest of the functionality






//now the first first image and array is populated.. we can execute the rest as a callback
    
    

// var lightboxCurrent = 0;

// function lightboxRight() {
  
//   lightboxCurrent += 1

//   if (lightboxCurrent>=lightboximages.length)
//   { 
//     lightboxCurrent = 0
//   }

  
  
//     $("#lightboxpic img").attr("src, lightboximages[lightboxCurrent].src);
//     $("#lightboxpic a").attr("href, lightboximages[lightboxCurrent].src);
//     $("#lightboxp h2").html(lightboximages[lightboxCurrent].caption + '<span id="redditcomments">&nbsp&nbsp[Reddit comments]</span>') ;
//     $("#lightboxcaption a.imagelink").attr("href, lightboximages[lightboxCurrent].comments);
//     $("img").error(function () {
//             $(this).unbind("error").attr("src, "images/error.png");
//             $("#lightboxpic a").attr("href, lightboximages[lightboxCurrent].comments)
//           });

// }

// $("#lightboxcontrolRight").click(function(event){
//   event.preventDefault();
//   event.stopPropagation();


//   lightboxRight();
// });


// function lightboxLeft() {

//   if (lightboxCurrent==0) {

//     lightboxCurrent = lightboximages.length
//   }
  
//   lightboxCurrent -=1;

//     $("#lightboxpic img").attr("src, lightboximages[lightboxCurrent].src);
//     $("#lightboxpic a").attr("href, lightboximages[lightboxCurrent].src);
//     $("#lightboxp h2").html(lightboximages[lightboxCurrent].caption + '<span id="redditcomments">&nbsp&nbsp[Reddit comments]</span>') ;
//     $("#lightboxcaption a.imagelink").attr("href, lightboximages[lightboxCurrent].comments);
//     $("img").error(function () {
//             $(this).unbind("error").attr("src, "images/error.png");
//             $("#lightboxpic a").attr("href, lightboximages[lightboxCurrent].comments)
//           });

// }


// $("#lightboxcontrolLeft").click(function(event){
//   event.preventDefault();
//   event.stopPropagation();

  
//   lightboxLeft();
// });

// $("#lightbox").click(function(event){

// event.stopPropagation()

// });

// }); // this is the end of the Interior function




// }); /// this is the end of the LOOP function... NB all lightobx stuff is a callback

// }); //THIS IS THE END OF THE FADE IN


// //now some stuff that doesn't need to be in there

// $("#closebutton").click(function(event){

//   event.preventDefault();

//   $("#lightbox").fadeOut();
//   $("#lightboxwrapper").fadeOut();


// });

// $("#lightboxwrapper").click(function(event){


//   $("#lightbox").fadeOut();
//   $("#lightboxwrapper").fadeOut();

// });



//             _________     _______           _______ _________ _______ 
//    |\     /|\__   __/    (  ____ \|\     /|(  ____ )\__   __/(  ____ \
//    | )   ( |   ) (       | (    \/| )   ( || (    )|   ) (   | (    \/
//    | (___) |   | |       | |      | (___) || (____)|   | |   | (_____ 
//    |  ___  |   | |       | |      |  ___  ||     __)   | |   (_____  )
//    | (   ) |   | |       | |      | (   ) || (\ (      | |         ) |
//    | )   ( |___) (___    | (____/\| )   ( || ) \ \_____) (___/\____) |
//    |/     \|\_______/    (_______/|/     \||/   \__/\_______/\_______)
                                                                   


}); //ready