console.log('fff');
modules.define('i-bem__dom', ['jquery'], function(provide, $, DOM) {

    DOM.decl('tabs', {}, {

        live: function() {

            this.liveBindTo('item', 'click', function(e) {
                var $elem = $(e.currentTarget);

                this.setMod($elem, 'state', 'current');
            });
        }
    });

    provide(DOM);
});