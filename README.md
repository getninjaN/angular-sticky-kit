angular-sticky-kit
================

AngularJS directive for [Sticky-Kit](http://leafo.net/sticky-kit/) - A jQuery plugin for making smart sticky elements.


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

Available options can be found over at the [Sticky-Kit reference](http://leafo.net/sticky-kit/#reference).
