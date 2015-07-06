'use strict';

/**
 * @ngdoc service
 * @name dazzlehubApp.csvParser
 * @description
 * # csvParser
 * Service in the dazzlehubApp.
 */
angular.module('dazzlehubApp')
  .service('csvParser', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

    function eliminateEmptyValues (elements) {
    	return elements.reduce(function (arr, el) {
			if (!!el) {
				arr.push(el);
			}
			return arr;
		}, []);
    }

    function parser(splitOn) {
    	return function (text) {
    		if (!!text) {
    			return eliminateEmptyValues(text.split(splitOn));
    		} else {
    			return [];
    		}
    	}
    }

    function builder(joinOn) {
    	return function (elements) {
    		if (!!elements && !!elements.length) {
    			return eliminateEmptyValues(elements).join(joinOn);
    		} else {
    			return "";
    		}
    	}
    }

    return {
    	parseCsvNewline: parser("\n"),
    	parseCsvWithSpace: parser(", "),
    	parseCsvWithoutSpace: parser(","),
    	buildCsvNewline: builder("\n"),
    	buildCsvWithSpace: builder(", "),
    	buildCsvWithoutSpace: builder(","),
    };

  });
