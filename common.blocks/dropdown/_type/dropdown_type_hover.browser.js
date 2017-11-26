/**
 * @module dropdown
 */
modules.define(
    'dropdown',
    (provide, Dropdown) => {

        /**
         * @exports
         * @class dropdown
         * @bem
         */
        provide(Dropdown.declMod({
            modName: 'type',
            modVal: 'hover',
        }, /** @lends dropdown.prototype */{

            onPointerOver() {
                this.setMod('hovered');
                this._domEvents().on('pointerleave', this._onPointerLeave);
            },

            _onPointerLeave() {
                this.delMod('hovered');
                this._domEvents().un('pointerleave', this._onPointerLeave)
            },
        }, /** @lends dropdown */{
            lazyInit: true,

            onInit() {
                this._domEvents().on('pointerover', this.prototype.onPointerOver);
            },
        }));
    }
);
