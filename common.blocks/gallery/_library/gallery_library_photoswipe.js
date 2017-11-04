/**
 * @module pswp
 */
modules.define(
    'gallery',
    ['i-bem__dom'],
    function gallery(provide, bemDom) {

        /**
         * @exports
         * @class pswp
         * @bem
         */
        provide(bemDom.declBlock({
            block: this.name,
            modName: 'library',
            modVal: 'photoswipe',
        }, /** @lends gallery.prototype */{

            onSetMod: {
                js: {
                    inited() {
                        this._pswp = this.findChildBlock('pswp');
                    },
                },
            },

            onItemClick(e) {
                const params = this.elemParams(e.currentTarget);

                this._pswp.show(params.items);
            },
        }, /** @lends gallery */{
            lazyInit: true,

            onInit() {
                this._domEvents('item').on('click', this.prototype.onItemClick);
            },
        }));
    }
);
