'use strict';

/**
 * @ngdoc function
 * @name dazzlehubApp.controller:ProductOpener
 * @description
 * # ProductOpener
 * Controller of the dazzlehubApp
 */
angular.module('dazzlehubApp')
  .controller('ProductOpenerCtrl', ['$scope', '$window', 'csvParser', function ($scope, $window, csvParser) {
  	console.log(csvParser);
  	var parseMap = {
  		newline: csvParser.parseCsvNewline,
  		spaces: csvParser.parseCsvWithSpace,
  		csv: csvParser.parseCsvWithoutSpace,
  	};
  	$scope.splitType = "newline";
  	$scope.skuList = "";
    $scope.openSkus = function () {
    	var skusSnagged = parseMap[$scope.splitType]($scope.skuList);
		for (var i = 0; i < skusSnagged.length; i++) {
			var sku = skusSnagged[i];
			if (sku == ""){
				continue;
			}
			var url = "https://direct.daz3d.com/index_redir.php/D4Z_adm1n/catalog_product/edit/id/" + sku + "/";
			var win = $window.open(url, '_blank');
			if (win !== undefined) {
				win.focus();
			}
		};
	}
  }]);
