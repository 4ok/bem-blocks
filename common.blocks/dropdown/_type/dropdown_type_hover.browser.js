modules.define(
    'dropdown',
    (provide, Dropdown) => {
        provide(Dropdown.declMod({
            modName: 'type',
            modVal: 'hover',
        }, /** @lends dropdown.prototype */{

            onPointerOver() {
                this.setMod('hovered');
                this.bindTo('pointerleave', this._onPointerLeave);
            },

            _onPointerLeave() {
                this.delMod('hovered');
                this.unbindFrom('pointerleave', this._onPointerLeave);
            },
        }, /** @lends dropdown */{
            lazyInit: true,

            onInit() {
                this._domEvents().on('pointerover', this.prototype.onPointerOver);
            },
        }));
    }
);
