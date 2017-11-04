modules.define(
    'popup',
    (provide, Popup) => {
        provide(Popup.decl({ modName: 'type', modVal: 'hover' }, {

            onPointerOver() {
                this.setMod('hovered');
                this.bindTo('pointerleave', this._onPointerLeave);
            },

            _onPointerLeave() {
                this.delMod('hovered');
                this.unbindFrom('pointerleave', this._onPointerLeave);
            },
        }, {
            onInit() {
                this._domEvents().on('pointerover', this.prototype.onPointerOver);
            },
        }));
    }
);
