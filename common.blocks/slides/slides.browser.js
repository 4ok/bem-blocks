modules.define('i-bem__dom', function(provide, DOM) {

    DOM.decl('slides', {

        showSlide: function(mod, val)
        {
            var $elem     = this.elem('item', mod, val);
            var $prevElem = this.elem('item', 'current', true);

            if ($prevElem.length) {
                this.delMod($prevElem, 'current');
            }
            this.setMod($elem, 'current', true);
        }
    });

    provide(DOM);
});