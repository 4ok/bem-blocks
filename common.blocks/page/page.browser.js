/**
 * @module page
 */
modules.define(
    'page',
    ['i-bem-dom'],
    (provide, bemDom) => {

        /**
         * @exports
         * @class page
         * @bem
         */
        provide(bemDom.declBlock(this.name));
    }
);
