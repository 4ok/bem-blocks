/**
 * @module gallery
 */
modules.define(
    'gallery',
    ['i-bem-dom'],
    (provide, bemDom) => {

        /**
         * @exports
         * @class gallery
         * @bem
         */
        provide(bemDom.declBlock(this.name));
    }
);
