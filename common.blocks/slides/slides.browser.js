modules.define('i-bem__dom', function(provide, DOM) {

    DOM.decl('slides', {

        onElemSetMod: {

            item: {

                current: {

                    true: function()
                    {
                        var $prevElem = this.elem('item', 'current', true);

                        this.delMod($prevElem, 'current');
                    }
                }
            }
        }
    });

    provide(DOM);
});