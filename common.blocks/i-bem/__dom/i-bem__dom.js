modules.define(
    'i-bem__dom',
    ['jquery'],
    function(provide, $, DOM)
{
    DOM.decl('i-bem__dom',
    {
        getElemByEvent: function(e)
        {
            return $(e.currentTarget);
        }
    });

    provide(DOM);
});