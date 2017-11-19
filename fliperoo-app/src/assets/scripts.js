  console.log("IT LOADED");
  /*
      $.fn.extend({
          animateCss: function (animationName, callback) {
              var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
              this.addClass('animated ' + animationName).one(animationEnd, function() {
                  $(this).removeClass('animated ' + animationName);
                  if (callback) {
                    callback();
                  }
              });
              return this;
          }
      });
    function animationHover(element, animation){
        element = $(element);
        element.hover(
            function() {
                element.addClass('animated ' + animation);        
            },
            function(){
                //wait for animation to finish before removing classes
                window.setTimeout( function(){
                    element.removeClass('animated ' + animation);
                }, 0);         
            });
    }
    $( document ).ready(function() {
        $('#upload_btn').each(function() {
            animationHover(this, 'pulse');
        });
        $('#search_btn').each(function() {
            animationHover(this, 'pulse');
        });
    });
    */