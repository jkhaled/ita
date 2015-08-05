/**
 * Created by khaled on 7/28/15.
 */


angular.module('app.services',[])
    .constant('END_POINT', 'http://map-edini.rhcloud.com/api')
    .factory('endPointService', ['END_POINT', function (END_POINT) {
        return {
            listPosition:END_POINT+'/position',
            newPosiotn: END_POINT+'/new-position'
        };
    }])
;