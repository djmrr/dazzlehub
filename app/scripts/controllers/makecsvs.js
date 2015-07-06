'use strict';

/**
 * @ngdoc function
 * @name dazzlehubApp.controller:MakeCsvs
 * @description
 * # MakeCsvs
 * Controller of the dazzlehubApp
 */
angular.module('dazzlehubApp')
  .controller('MakeCsvsCtrl', ["$scope", "csvParser", function ($scope, csvParser) {
    
    $scope.fromType = "newline";
    $scope.toType = "csv";

    var parseMap = {
  		newline: csvParser.parseCsvNewline,
  		spaces: csvParser.parseCsvWithSpace,
  		csv: csvParser.parseCsvWithoutSpace,
  	};

  	var buildMap = {
  		newline: csvParser.buildCsvNewline,
  		spaces: csvParser.buildCsvWithSpace,
  		csv: csvParser.buildCsvWithoutSpace,
  	};

  	$scope.convert = function () {
  		var input = parseMap[$scope.fromType]($scope.fromText);
  		$scope.toText = buildMap[$scope.toType](input);
  	}
		
  }]);
