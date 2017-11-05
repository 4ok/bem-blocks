/**
 * @module modal
 */
modules.define(
    'modal',
    ['i-bem-dom', 'page'],
    function modal(provide, bemDom, Page) {

        /**
         * @exports
         * @class modal
         * @bem
         */
        provide(bemDom.declBlock(this.name, /** @lends modal.prototype */{

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
