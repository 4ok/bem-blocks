/**
 * @module gallery
 */
modules.define(
    'gallery',
    ['i-bem-dom'],
    function gallery(provide, bemDom) {

        /**
         * @exports
         * @class gallery
         * @bem
         */
        provide(bemDom.declBlock(this.name));
    }
);
