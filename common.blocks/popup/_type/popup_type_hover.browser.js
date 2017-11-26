/**
 * @module popup
 */
modules.define(
    'popup',
    (provide, Popup) => {

        /**
         * @exports
         * @class popup
         * @bem
         */
        provide(Popup.declMod({
            modName: 'type',
            modVal: 'hover',
        }, /** @lends popup.prototype */{

            onPointerOver() {
                this.setMod('hovered');
                this._domEvents().on('pointerleave', this._onPointerLeave);
            },

            _onPointerLeave() {
                this.delMod('hovered');
                this._domEvents().un('pointerleave', this._onPointerLeave);
            },
        }, /** @lends popup */{
            lazyInit: true,

            onInit() {
                this._domEvents().on('pointerover', this.prototype.onPointerOver);
            },
        }));
    }
);
