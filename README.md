# Backbone AnimationView for LayoutManager
A simple view that abstracts animation/transition when hiding or showing views. Uses jQuery UI and Backbone LayoutManager under the hood.

# Install
To add this module to your project, use npm:
`npm install --save backbone.animationview`

If using Node.js you can require the module as you would normally:

`require('backbone.animationview');`

The module will automatically load itelf onto the global `Backbone` object and be available at `Backbone.AnimationView`. Please remember to include Backbone and LayoutManager prior to including this module.

# Usage
Once installed you can require the module and extend from it in the same way that you would normally extend from `Backbone.View`:
```
  var ItemView = Backbone.AnimationView.extend({
    ...

```

Then you can specify the show and hide actions for the view. The show options will control what happens when the view first appears, and the hide options will control what happens when the view is destroyed.

```
  var ItemView = Backbone.AnimationView.extend({
    animation: {
      enabled: false,
      show: {
        effect: 'fold',
        duration: 100
      },
      hide: {
        effect: 'fold'
      }
    },
  });
```

These options are based on the jQuery UI animation options. The hide and show objects are directly passed to jQuery to handle the animation. For a detailed list of the options available for jQuery UI animations please see [hide](http://api.jqueryui.com/hide/) and [show](http://api.jqueryui.com/show/) docs.
