$(function(){
  // Setting this option augments `Backbone.View` to work like `Layout`.
  Backbone.Layout.configure({ manage: true });

  // This will be inserted into both Layouts.
  var ListView = Backbone.View.extend({
    template: "#list",

    initialize: function(){
      var self = this;
      // Initial view setup
      self.collection.each(function(model){
        console.log(model);
        self.insertView('.list-group', new ItemView({model: model}));
      });

      // Ensure that we update views when things get added
      self.listenTo(self.collection, 'add', function(model){
        var newItemView = new ItemView({model: model});
        newItemView.animation.enabled = true;
        self.insertView('.list-group', newItemView).render();
      });
    }
  });

  var ItemView = Backbone.View.extend({
    template: "#item",
    animation: {
      enabled: false,
      show: {
        effect: 'fold',
        duration: 200
      },
      hide: {
        effect: 'fold'
      }
    },
    events: {
      'click button': 'remove'
    },
    remove: function(){ //Remove is also a layoutmanager function that removes the view
      console.log("Remove clicked");
    }
  });

  // Create a new Layout with a sub view for content.
  var Layout = Backbone.Layout.extend({
    template: "#layout",
    events: {
      'click button': 'add'
    },

    initialize: function(){
      var self = this;
      self.insertView('.container-fluid', new ListView({collection: self.collection}));
    },
    add: function(){
      this.collection.add([{value: "New List Item"}]);
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
