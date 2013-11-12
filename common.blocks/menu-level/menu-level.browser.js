modules.define(
    'i-bem__dom',
    ['jquery'],
    function(provide, $, DOM)
{
    DOM.decl({ block : 'menu-level', baseBlock : 'menu'});

    provide(DOM);
});