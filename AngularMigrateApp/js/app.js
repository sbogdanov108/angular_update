angular.module( 'myApp', [] )

  .constant( 'employees', [ {
    firstName: 'Rima',
    lastName : 'George',
    location : 'San Francisco'
  }, {
    firstName: 'Shaun',
    lastName : 'John',
    location : 'Germany'
  }, {
    firstName: 'Rahul',
    lastName : 'Kurup',
    location : 'Bangalore'
  }, {
    firstName: 'Samson',
    lastName : 'Davis',
    location : 'Canada'
  }, {
    firstName: 'Shilpa',
    lastName : 'Agarwal',
    location : 'Noida'
  } ] )

  .controller( 'HomeCtrl', [ '$scope', 'employees', function( $scope, employees )
  {
    $scope.employees = employees;
  } ] )

  .directive( 'myGrid', function()
  {
    return {
      restrict   : 'E',
      scope      : {
        info: '=info'
      },
      templateUrl: 'tmpl/directiveGrid.html'
    }
  })

  .component( 'myComp', {
    bindings   : {
      info: '=info'
    },
    templateUrl: 'tmpl/componentGrid.html'
  } );