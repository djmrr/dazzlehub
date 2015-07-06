'use strict';

/**
 * @ngdoc function
 * @name dazzlehubApp.controller:DatePickerCtrl
 * @description
 * # DatePickerCtrl
 * Controller of the dazzlehubApp
 */
angular.module('dazzlehubApp')
  .controller('DatePickerCtrl', ['$scope', function ($scope) {

    $scope.dayChoices = [
    	{name: "14 Days (intro pricing period)", value: 14},
    	{name: "60 Days", value: 60}
    ];
    $scope.days = $scope.dayChoices[0].value;

    // /regex/
    // ^ = start of line
    // $ = end of line
    // \d = digit
    // \/ = /
    // .test(str) = see if str matches the regex

    $scope.convert = function () {
    	var fromDate = new moment($scope.fromDate, "MM/DD/YY");
    	if (fromDate.isValid() && /^\d\d\/\d\d\/\d\d$/.test($scope.fromDate)) {
			$scope.toDate = fromDate.add($scope.days, "days").format("MM/DD/YY");
    	} else {
    		$scope.toDate = "invalid input";
    	}
    }

  }]);
