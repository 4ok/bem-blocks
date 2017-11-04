/**
 * @module pswp
 */
modules.define(
    'gallery',
    ['i-bem-dom'],
    function gallery(provide, Gallery) {

        /**
         * @exports
         * @class pswp
         * @bem
         */
        provide(Gallery.declMod({
            modName: 'library',
            modVal: 'photoswipe',
        }, /** @lends pswp.prototype */{

            onSetMod: {
                js: {
                    inited() {
                        this._pswp = this.findBlockInside('pswp');
                    },
                },
            },

            onItemClick(e) {
                const params = this.elemParams(e.currentTarget);

                this._pswp.show(params.items);
            },
        }, {
            live() {
                this.liveBindTo('item', 'pointerclick', this.prototype.onItemClick);
            },
        }));
    }
);
