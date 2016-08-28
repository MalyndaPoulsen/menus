
;(function () {
    angular.module('menus')
        .component('menusComponent', {
            templateUrl: 'components/menus-component.html',
            controller: MenusController,
        })

    function MenusController() {
        var mc = this;

        $.fn.extend({
            animateCss: function (animationName) {
                var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                $(this).addClass('animated ' + animationName).one(animationEnd, function () {
                    $(this).removeClass('animated ' + animationName);
                });
            }
        });
    
    $('#scroller').animateCss('flash');








    }

} ())