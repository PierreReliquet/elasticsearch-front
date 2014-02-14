'use strict';

elasticFront.controller('SearchCtrl', ['$scope', 'ElasticSvc', function(scope, es) {
    scope.search = "";
    var successfulSearch = function(data) {
        scope.results = data.hits.hits;
    }

    scope.$watch('search', function(value) {
        es.simpleSearch(value, successfulSearch);
    });

    es.simpleSearch(null, successfulSearch);

}]);