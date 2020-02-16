// $('document').ready(function() {
//    $(window).scrollTop(0);
//    if ('scrollRestoration' in history) {
//        history.scrollRestoration = 'manual';
//    }
//    window.scrollTo(0,0);
// });
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  console.log(prevScrollpos);
    if (currentScrollPos > prevScrollpos) {
      document.getElementById("navbar").style.top = "-50px";
    }else if(currentScrollPos > 2000){
        document.getElementById("landingBGID").style.backgroundImage = "url('./images/landingGif.gif')";
        var deleteText = document.getElementById("welcomeText");
        deleteText.remove()
    }else {
      document.getElementById("navbar").style.top = "0px";
    }
    prevScrollpos = currentScrollPos;
}

function afterReveal( el ) {
   el.addEventListener('animationend', function( event ) {
      $('.wow').each(function(){
         $(this).css('opacity',1);
       });
     });
   }
   new WOW({ callback: afterReveal }).init();

// function goBlack(color){
//   document.getElementById('landingBGOverlay').style.backgroundColor = color;
// }
function showEverything(){
  var body = document.querySelector('body');
  var textWelcome = document.getElementById("welcomeText");
  var navigation = document.getElementById("navbar");

  navbar.style.top="0px"
  body.style.overflowY = "scroll";
  textWelcome.innerHTML = "Welcome";
};
