modules.define(
    'i-bem__dom',
    ['jquery'],
    function(provide, $, DOM)
{
    DOM.decl({ block : 'submenu', baseBlock : 'menu' });

    provide(DOM);
});