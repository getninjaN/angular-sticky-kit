angular.module("angular-sticky-kit", [])

.directive("stickyKit", function() {
  return {
    restrict: "A",
    link: function(scope, element, attributes) {
      var customOptions, options, stickyElement, stickyKitAttribute;
      stickyKitAttribute = scope.$eval(attributes.stickyKit);
      customOptions = typeof stickyKitAttribute == 'object' ? stickyKitAttribute : {};
      options = {
        sticky_class: "is_stuck",
        inner_scrolling: true,
        recalc_every: null,
        parent: null,
        offset_top: 0,
        spacer: null,
        bottoming: true,
        stick: null,
        unstick: null,
        bottom: null,
        unbottom: null,
        recalc: null,
        detach: null
      };
      for (var attrname in customOptions) {
        options[attrname] = customOptions[attrname];
      }
      stickyElement = element.stick_in_parent(options);
      if (typeof options.stick !== "undefined" && options.stick !== null) {
        element.on("sticky_kit:stick", function(event) {
          var localScope = $(event.target).scope()
          localScope.$apply(options.stick)
        });
      }
      if (typeof options.unstick !== "undefined" && options.unstick !== null) {
        element.on("sticky_kit:unstick", function(event) {
          var localScope = $(event.target).scope()
          localScope.$apply(options.unstick)
        });
      }
      if (typeof options.bottom !== "undefined" && options.bottom !== null) {
        element.on("sticky_kit:bottom", function(event) {
          var localScope = $(event.target).scope()
          localScope.$apply(options.bottom)
        });
      }
      if (typeof options.unbottom !== "undefined" && options.unbottom !== null) {
        element.on("sticky_kit:unbottom", function(event) {
          var localScope = $(event.target).scope()
          localScope.$apply(options.unbottom)
        });
      }
      if (typeof options.recalc !== "undefined" && options.recalc !== null) {
        element.on("sticky_kit:recalc", function(event) {
          var localScope = $(event.target).scope()
          localScope.$apply(options.recalc)
        });
      }
      if (typeof options.detach !== "undefined" && options.detach !== null) {
        element.on("sticky_kit:detach", function(event) {
          var localScope = $(event.target).scope()
          localScope.$apply(options.detach)
        });
      }
    }
  };
});
