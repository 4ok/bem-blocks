modules.define(
    'popup',
    (provide, Popup) => {
        provide(Popup.decl({ modName : 'type', modVal : 'hover' }, {

            onSetMod : {
                js : {
                    inited() {
                        this.__base.apply(this, arguments);
                        this.bindTo('pointerleave', this._onPointerLeave);
                    },
                },
            },

            _onPointerOver() {
                this.setMod('hovered');
            },

            _onPointerLeave() {
                this.delMod('hovered');
            },
        }, {
            live() {
                this.liveBindTo('pointerover', this.prototype._onPointerOver);
            },
        }));
    }
);
