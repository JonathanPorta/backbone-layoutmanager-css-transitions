$(function(){
  // Setting this option augments `Backbone.View` to work like `Layout`.
  Backbone.Layout.configure({ manage: true });

  // This will be inserted into both Layouts.
  var ListView = Backbone.View.extend({
    template: "#list",

    initialize: function(){
      var self = this;
      self.collection.each(function(model){
        console.log(model);
        self.insertView('.list-group', new ItemView({model: model}));
      });
    },

    // Initialize your jQuery plugins here.
    afterRender: function() {
      console.log("Content width: " + $(this.el).width());
    }
  });

  var ItemView = Backbone.View.extend({
    template: "#item",

    afterRender: function() {
      console.log("Sub-content width: " + $(this.el).width());
    }
  });

  // Create a new Layout with a sub view for content.
  var Layout = Backbone.Layout.extend({
    template: "#layout",

    initialize: function(){
      var self = this;
      self.insertView('.container-fluid', new ListView({collection: self.collection}));
    }
  });

  var ItemModel = Backbone.Model.extend({});

  var ListCollection = Backbone.Collection.extend({
    model: ItemModel
  });

  // Instantiate some stuff
  var list = new ListCollection([{value: "New List Item"},{value: "New List Item"},{value: "New List Item"}]);

  layout = new Layout({collection: list});
  // Attach the Layout to the main container.
  layout.$el.appendTo("body");

  // Initially render the Layout.
  layout.render();
});
