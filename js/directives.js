
angular.module("app")
    .directive("specContent", [ function() {
        return {
            scope          : {},
            transclude     : true,
            templateUrl    : "./templates/specContent.html",
            link            : function( scope, elem, attrs, ctrl, transcludeFunc ) {
                transcludeFunc( function( clone ) {
                    angular.forEach( clone, function ( cloneElem ) {
                        var cloneElemAttrs,targetId, target;

                        cloneElemAttrs = cloneElem.attributes;

                        if( !cloneElemAttrs ) return;

                        targetId = cloneElem.attributes["transclude-to"].value;
                        // maybe throw an exception here

                        target = $(elem).find('[transclude-id = ' + targetId +']');

                        target.append(cloneElem);
                    });
                });
            }
        }
    }]);
