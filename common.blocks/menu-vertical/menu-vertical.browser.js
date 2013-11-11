modules.define(
    'i-bem__dom',
    ['jquery'],
    function(provide, $, DOM)
{
    DOM.decl({ block : 'menu-vertical', baseBlock : 'menu' },
    {
        getSubMenuOptions: function($elem)
        {
            var elemPos = $elem.offset();

            return {
                block:    'menu-vertical',
                position: {
                    top:  elemPos.top,
                    left: elemPos.left + $elem.outerWidth()
                }
            }
        }
    });

    provide(DOM);
});