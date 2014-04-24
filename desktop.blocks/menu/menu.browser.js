modules.define(
    'i-bem__dom',
    ['jquery'],
    function(provide, $, DOM)
{
    DOM.decl({ block: 'menu' }, {},
    {
        live: function()
        {
            this.liveBindTo('item item-link', 'mouseover', function(e)
            {
                this.setMod(
                    this.getElemByEvent(e),
                    'hover', true
                );
            });

            this.liveBindTo('item item-link', 'mouseout', function(e)
            {
                this.delMod(
                    this.getElemByEvent(e),
                    'hover'
                );
            });
        }
    });

    provide(DOM);
});