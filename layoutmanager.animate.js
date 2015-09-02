(function(window, factory) {
  "use strict";

  // AMD. Register as an anonymous module.  Wrap in function so we have access
  // to root via `this`.
  if (typeof define === "function" && define.amd) {
    define(["backbone", "underscore", "jquery"], function() {
      return factory.apply(window, arguments);
    });
  }

  // Node. Does not work with strict CommonJS, but only CommonJS-like
  // environments that support module.exports, like Node.
  else if (typeof exports === "object") {
    var Backbone = require("backbone");
    var _ = require("underscore");
    // In a browserify build, since this is the entry point, Backbone.$
    // is not bound. Ensure that it is.
    Backbone.$ = Backbone.$ || require("jquery");

    module.exports = factory.call(window, Backbone, _, Backbone.$);
  }

  // Browser globals.
  else {
    factory.call(window, window.Backbone, window._, window.Backbone.$);
  }
}(typeof global === "object" ? global : this, function(Backbone, _, $) {
"use strict";
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
  Backbone.AnimationView = AnimationView;
  return AnimationView;
}));
