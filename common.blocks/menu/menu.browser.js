modules.define(
    'i-bem__dom',
    ['jquery'],
    function(provide, $, DOM)
{
    DOM.decl('menu',
    {
        _getElemByEvent: function(e)
        {
            return $(e.currentTarget);
        }
    },
    {
        live: function()
        {
            this.liveBindTo('item item-link', 'mouseover', function(e)
            {
                this.setMod(
                    this._getElemByEvent(e),
                    'hover', true
                );
            });

            this.liveBindTo('item item-link', 'mouseout', function(e)
            {
                this.delMod(
                    this._getElemByEvent(e),
                    'hover'
                );
            });
        }
    });

    provide(DOM);
});