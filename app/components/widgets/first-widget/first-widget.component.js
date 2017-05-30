(function () {
  'use strict';

  // Register `firstWidget` component, along with its associated controller and template
  angular.
  module('firstWidget').
  component('firstWidget', {
    templateUrl: 'components/widgets/first-widget/first-widget.template.html',
    controller: [
      function FirstWidgetController() {

      }
    ]
  });
})();