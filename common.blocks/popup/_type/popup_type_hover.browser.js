modules.define(
    'popup',
    (provide, Popup) => {

        /**
         * @exports
         * @class popup_type_hover
         * @bem
         */
        provide(Popup.declMod({
            modName: 'type',
            modVal: 'hover',
        }, /** @lends popup.prototype */{

            onPointerOver() {
                this.setMod('hovered');
                this.bindTo('pointerleave', this._onPointerLeave);
            },

            _onPointerLeave() {
                this.delMod('hovered');
                this.unbindFrom('pointerleave', this._onPointerLeave);
            },
        }, /** @lends popup */{
            lazyInit: true,

            onInit() {
                this._domEvents().on('pointerover', this.prototype.onPointerOver);
            },
        }));
    }
);
