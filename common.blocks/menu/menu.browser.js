modules.define('i-bem__dom', ['jquery'], function(provide, $, DOM) {

    DOM.decl('menu', {}, {

        live: function() {

            this.liveBindTo('item', 'mouseover mouseout', function(e) {
                var $elem = $(e.currentTarget);

                switch (e.type) {
                    case 'mouseover': {
                        this.setMod($elem, 'hover', true);
                        break;
                    }
                    case 'mouseout': {
                        this.delMod($elem, 'hover');
                        break;
                    }
                }
            });
        }
    });

    provide(DOM);
});