'use strict';

elasticFront.service('ElasticSvc', ['$http', function(http){
    this.simpleSearch = function(value, onSuccess, onError) {
        var url = 'http://localhost:9200/flickr/_search?size=50';
        if (value){
            url += '&q=' + value;
        }

        http.get(url).success(onSuccess).error(onError);
    }
}]);
