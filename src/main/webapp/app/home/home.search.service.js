(function () {
    'use strict';

    angular
        .module('researchApp')
        .factory('FileSearch', FileSearch);

    FileSearch.$inject = ['$resource'];

    function FileSearch($resource) {
        var resourceUrl = 'api/_search/files/:id';

        return $resource(resourceUrl, {}, {
            'query': {method: 'GET', isArray: true}
        });
    }
})();

(function () {
    'use strict';

    angular
        .module('researchApp')
        .factory('VersionSearch', VersionSearch);

    VersionSearch.$inject = ['$resource'];

    function VersionSearch($resource) {
        var resourceUrl = 'api/versions/:id';

        return $resource(resourceUrl, {}, {
            'query': {method: 'GET', isArray: true},
            'get': {method: 'GET', isArray: true}
        });
    }
})();

(function () {
    'use strict';

    angular
        .module('researchApp')
        .factory('ProjectSearch', ProjectSearch);

    ProjectSearch.$inject = ['$resource'];

    function ProjectSearch($resource) {
        var resourceUrl = 'api/projects/:id';

        return $resource(resourceUrl, {}, {
            'query': {method: 'GET', isArray: true},
            'get': {method: 'GET', isArray: true}
        });
    }
})();