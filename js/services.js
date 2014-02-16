'use strict';

elasticFront.service('ElasticSvc', ['$http', function(http){
    this.simpleSearch = function(value, onSuccess, onError) {
        var url = 'http://localhost:9200/flickr/_search';
        if (!value) {
            value = "*";
        }

        var data = {
            "query": {
                "query_string": {
                    "query": value,
                    "default_field": "_all"
                }
            }
        }

        http.post(url, data).success(onSuccess).error(onError);
    }
}]);
