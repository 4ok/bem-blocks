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
        provide(bemDom.decl({
            block : this.name,
            modName : 'library',
            modVal : 'photoswipe',
        }, /** @lends pswp.prototype */{

            onSetMod : {
                js : {
                    inited() {
                        this._pswp = this.findBlockInside('pswp');
                    },
                },
            },

            _onItemClick(e) {
                const params = this.elemParams(e.currentTarget);

                this._pswp.show(params.items);
            },
        }, {
            live() {
                /* eslint-disable no-underscore-dangle */
                this.liveBindTo('item', 'pointerclick', this.prototype._onItemClick);
                /* eslint-enable no-underscore-dangle */
            },
        }));
    }
);
