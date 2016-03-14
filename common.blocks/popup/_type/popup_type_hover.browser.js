modules.define(
    'popup',
    function(provide, popup)
    {
        provide(popup.decl({ modName : 'type', modVal : 'hover' },
        {
            onSetMod : {
                js : {
                    inited : function() {
                        this.__base.apply(this, arguments);
                        this.bindTo('pointerleave', this._onPointerLeave);
                    }
                }
            },

            _onPointerOver : function() {
                this.setMod('hovered');
            },

            _onPointerLeave : function() {
                this.delMod('hovered');
            }
        },
        {
            live : function() {
                this.liveBindTo('pointerover', this.prototype._onPointerOver)
            }
        }));
    }
);
