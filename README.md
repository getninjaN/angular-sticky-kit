angular-sticky-kit
================

AngularJS directive for [Sticky-Kit](http://leafo.net/sticky-kit/) - A jQuery plugin for making smart sticky elements.

Demo:
-------------------------
It's ugly, but hopefully works :)

https://plnkr.co/edit/lgZTzcveDYkf5jCqOgC5

Installation (via Bower):
-------------------------
```shell
$ bower install angular-sticky-kit
```

Usage:
------
Download and include `angular-sticky-kit.js` together with `jquery.js` and `jquery.sticky-kit.js`.

```html
<script type="text/javascript" src="path/to/jquery.js"></script>
<script type="text/javascript" src="path/to/jquery.sticky-kit.js"></script>
<script type="text/javascript" src="path/to/angular-sticky-kit.js"></script>
```

Add "angular-sticky-kit" to your app's dependencies
```javascript
angular.module("myApp", ["angular-sticky-kit"]);
```

Use the directive as an attribute with optional settings as value.

```html
<div sticky-kit="options"></div>
```

Options:
------
These are the default options, based on Sticky-Kit:
```javascript
{
  sticky_class: "is_stuck",
  inner_scrolling: true,
  recalc_every: null,
  parent: null,
  offset_top: 0,
  spacer: null,
  bottoming: true,
  stick: null, /* sticky_kit:stick event */
  unstick: null, /* sticky_kit:unstick event */
  bottom: null, /* sticky_kit:bottom event */
  unbottom: null, /* sticky_kit:unbottom event */
  recalc: null, /* sticky_kit:recalc event */
  detach: null /* sticky_kit:detach event */
}
```

Events:
------
Just use the events as you please. :)
```javascript
stick: function() {
  $scope.message = "Oh no! I'm stuck!";
}
```

More information about events and options can be found over at the [Sticky-Kit reference](http://leafo.net/sticky-kit/#reference).
