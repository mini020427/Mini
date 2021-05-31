$(function(){
    var slides=$('.slide').find('img');
    var now=0,tot=3;
    sliding();
    function sliding(){
      slides.eq(1).fadeOut('slow');
      slides.eq(2).fadeOut('slow');  
      slides.eq(3).fadeOut('slow');  
      setInterval(function(){
        if(now==tot)now=0;else now++;
        slides.eq(now-1).fadeOut(2000);
        slides.eq(now).fadeIn(2000);
      },3000);
    }
});
