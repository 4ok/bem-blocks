/**
 * @module address-map
 */
modules.define(
    'modal',
    ['i-bem__dom'],
    function modal(provide, bemDom) {

        /**
         * @exports
         * @class address-map
         * @bem
         */
        provide(bemDom.decl(this.name, /** @lends address-map.prototype */{

            onSetMod : {
                js : {
                    inited() {
                        this.__base.apply(this);
                        this._page = this.findBlockOutside('page');
                    },
                },
                visible : {
                    '*' : function visibleToggle(modName, modVal) {
                        this._page.setMod('freezed', modVal);
                    },
                },
            },
        }));
    }
);
