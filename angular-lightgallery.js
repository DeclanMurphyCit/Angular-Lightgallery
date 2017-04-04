(function () {
  angular
    .module('shared.widgets')
    .directive('photoGallery', photoGallery);

  function photoGallery() {
    var directive = {
      restrict: 'E',
      templateUrl: '/photo-gallery-template.html',
      link: link,
      scope: {
        images: '='
      }
    };
    return directive;

    function link(scope, element) {
      scope.openGallery = openGallery;
      function openGallery() {
        element.parent().lightGallery({
          thumbnail: true,
          toogleThumb: false,
          thumbWidth: 120,
          thumbContHeight: 100,
          dynamic: true,
          dynamicEl: scope.images
        });
      }
    }
  }
})();