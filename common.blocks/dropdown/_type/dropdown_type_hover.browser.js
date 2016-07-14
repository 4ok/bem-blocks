modules.define(
    'dropdown',
    (provide, Dropdown) => {
        provide(Dropdown.decl({ modName : 'type', modVal : 'hover' }, {

            _onPointerOver() {
                this.setMod('hovered');
                this.bindTo('pointerleave', this._onPointerLeave);
            },

            _onPointerLeave() {
                this.delMod('hovered');
                this.unbindFrom('pointerleave', this._onPointerLeave);
            },
        }, {
            live() {
                // eslint-disable-next-line no-underscore-dangle
                this.liveBindTo('pointerover', this.prototype._onPointerOver);
            },
        }));
    }
);
