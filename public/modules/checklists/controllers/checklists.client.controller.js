'use strict';

// Checklists controller
angular.module('checklists').controller('ChecklistsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Checklists', '$http', '$rootScope',
  function($scope, $stateParams, $location, Authentication, Checklists, $http, $rootScope) {
    $scope.authentication = Authentication;

    // Create new Checklist
    $scope.create = function() {
      // Create new Checklist object
      var checklistArray = $scope.checklistitems;
      var size = checklistArray.length;
      if (checklistArray.length === 1 && checklistArray[0].value === '') {
        return;
      } else {
        if (checklistArray.length > 1 && $scope.checklistitems[size - 1].value === '') {
          checklistArray.pop();
        }
        var checklist = new Checklists({
          checklist: checklistArray,
          category: this.category
        });

        // Redirect after save
        checklist.$save(function(response) {
          $location.path('checklists/' + response._id);
        }, function(errorResponse) {
          $scope.error = errorResponse.data.message;
        });

        // Clear form fields
        this.checklist = '';
        this.category = '';
      }
    };

    // Remove existing Checklist
    $scope.remove = function(checklist) {
      if (checklist) {
        checklist.$remove();

        for (var i in $scope.checklists) {
          if ($scope.checklists[i] === checklist) {
            $scope.checklists.splice(i, 1);
          }
        }
      } else {
        $scope.checklist.$remove(function() {
          $location.path('checklists');
        });
      }
    };

    // Update existing Checklist
    $scope.update = function() {
      var checklist = $scope.checklist;

      checklist.$update(function() {
        $location.path('checklists/' + checklist._id);
      }, function(errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

    // Find a list of Checklists
    $scope.find = function() {
      $scope.checklists = Checklists.query();
    };

    // Find existing Checklist
    $scope.findOne = function() {
      $scope.checklist = Checklists.get({
        checklistId: $stateParams.checklistId
      });
    };

    $scope.addRow = function() {
      console.log($scope.checklistitems);
      var size = $scope.checklistitems.length;
      if ($scope.checklistitems[size - 1].value === '') {
        return;
      } else {
        $scope.checklistitems.push({
          'value': ''
        });
      }
    };

    $scope.addRowForEdit = function(){
      console.log($scope.checklist);
      $scope.checklist.checklist.push({
          'value': ''
      });

    };

    $scope.checklistitems = [{
      'value': ''
    }];

    $scope.$watch('chosenCategory', function(newValue) {
      sessionStorage.setItem('categoryType', newValue.category);
        $http.get('/checklistByCategory',{params: {category : sessionStorage.getItem('categoryType')}}).success(function(data, status, headers, config) {
        $rootScope.checklistsByCategory = data;
      });
    });
  }
]);