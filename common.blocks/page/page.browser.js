/**
 * @module page
 */
modules.define(
    'page',
    ['i-bem-dom'],
    function page(provide, bemDom) {

        /**
         * @exports
         * @class page
         * @bem
         */
        provide(bemDom.declBlock(this.name));
    }
);
