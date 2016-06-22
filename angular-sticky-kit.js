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
        unbuttom: null,
        recalc: null,
        detach: null
      };
      for (var attrname in customOptions) {
        options[attrname] = customOptions[attrname];
      }
      stickyElement = element.stick_in_parent(options);
      if (typeof stick !== "undefined" && stick !== null) {
        element.on("sticky_kit:stick", stick);
      }
      if (typeof unstick !== "undefined" && unstick !== null) {
        element.on("sticky_kit:unstick", unstick);
      }
      if (typeof bottom !== "undefined" && bottom !== null) {
        element.on("sticky_kit:bottom", bottom);
      }
      if (typeof unbottom !== "undefined" && unbottom !== null) {
        element.on("sticky_kit:unbottom", unbottom);
      }
      if (typeof recalc !== "undefined" && recalc !== null) {
        element.on("sticky_kit:recalc", recalc);
      }
      if (typeof detach !== "undefined" && detach !== null) {
        return element.on("sticky_kit:detach", detach);
      }
    }
  };
});
