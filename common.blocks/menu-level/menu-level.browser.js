modules.define('i-bem__dom', ['jquery'], function(provide, $, DOM) {

    DOM.decl({ block : 'menu-level', baseBlock : 'menu'},
    {
        onElemSetMod: {
            item: {
                hover: {
                    'true': function()
                    {
                        console.log('bbb');
                    }
                }
            }
        }
    });

    provide(DOM);
});