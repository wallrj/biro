var utils = require('./utils')

function Field($compile){

  function controller($scope){
    if(!$scope.field) $scope.field = {}
    $scope.type = $scope.field.type || 'text'
    $scope.val = utils.getValue($scope.field, $scope.model)

    // the template runs this to indicate the value has been
    // messed with - normally a blur or click
    $scope.flagDirty = function(){
      $scope.$emit('flagdirty', $scope.field.name)
    }
    $scope.$watch('val', function(newval){
      var processed = processor($scope.field, newval)
      utils.setValue($scope.field, $scope.model, processed)
    })
  }

  function linker($scope, $elem, $attr) {
    var templateHTML = utils.fieldTemplate($scope.field)
    var templateElem = $compile(templateHTML)($scope)
    $elem.replaceWith(templateElem)
  }

  return {
    restrict:'EA',
    scope:{
      field:'=',
      model:'=',
      readonly:'=',
      static:'='
    },
    replace:true,
    controller:controller,
    link:linker
  }
}

module.exports = Field