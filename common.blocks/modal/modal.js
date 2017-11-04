/**
 * @module address-map
 */
modules.define(
    'modal',
    ['i-bem-dom', 'page'],
    function modal(provide, bemDom, Page) {

        /**
         * @exports
         * @class address-map
         * @bem
         */
        provide(bemDom.declBlock(this.name, /** @lends address-map.prototype */{

            onSetMod: {
                js: {
                    inited() {
                        this.__base.apply(this);
                        this._page = this.findParentBlock(Page);
                    },
                },
                visible: {
                    '*': function visibleToggle(modName, modVal) {
                        this._page.setMod('freezed', modVal);
                    },
                },
            },
        }));
    }
);
