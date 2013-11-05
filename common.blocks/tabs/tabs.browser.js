modules.define('i-bem__dom', ['jquery'], function(provide, $, DOM) {

    DOM.decl('tabs', {}, {

        live: function() {

            this.liveBindTo('item', 'click', function(e) {
                var $elem     = $(e.currentTarget);
                var params    = this.elemParams($elem);
                var $prevElem = this.elem('item', 'current', true);

                if ($prevElem.length) {
                    this.delMod($prevElem, 'current');
                }
                this.setMod($elem, 'current', true);
                this.emit('current', params);
            });
        }
    });

    provide(DOM);
});