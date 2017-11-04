/**
 * @module pswp
 */
modules.define(
    'pswp',
    ['i-bem-dom'],
    function pswp(provide, bemDom) {

        /**
         * Дефолтные настройки галереи
         *
         * @const
         * @type {object}
         */
        const DEFAULT_PHOTO_SWIPE_OPTIONS = {
            shareEl: false,
            loop: true,
            history: false,
        };

        /**
         * @exports
         * @class pswp
         * @bem
         */
        provide(bemDom.declBlock(this.name, /** @lends pswp.prototype */{

            /**
             * Инициализирует и после показывает галерею.
             * Создавать объект приходится при каждом открытии, такой api у галереи
             *
             * @param {object[]} items
             */
            show(items) {
                this._photoSwipe = new window.PhotoSwipe(
                    this.domElem[0],
                    window.PhotoSwipeUI_Default,
                    items,
                    DEFAULT_PHOTO_SWIPE_OPTIONS
                );
                this._photoSwipe.init();
            },
        }));
    }
);
