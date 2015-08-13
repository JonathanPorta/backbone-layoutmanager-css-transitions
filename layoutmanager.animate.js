$(function(){
  var AnimationView = Backbone.View.extend({
    animation:{
      enabled: false
    },
    afterRender: function(){
      if(this.animation.enabled && this.animation.show){
        $(this.el).hide().show(this.animation.show);
      }
    },
    cleanup: function(){
      if(this.animation.enabled && this.animation.hide){
        $(this.el).hide(this.animation.hide);
      }
    }
  });

  Backbone.View = AnimationView;
});
