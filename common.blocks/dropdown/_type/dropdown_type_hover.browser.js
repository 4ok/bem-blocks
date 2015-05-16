var MOD_NAME_HOVERED = 'hovered';
var MOD_NAME_OPENED  = 'opened';

var SMALL_DEVICE_WIDTH = 768;

var hoveredPopupLevel     = null;
var prevHoveredPopupLevel = null;

modules.define(
    'dropdown',
    ['i-bem__dom', 'next-tick'],
    function(provide, bemDom, nextTick, dropdown)
    {
        provide(dropdown.decl({ modName : 'type', modVal : 'hover' },
        {
            onSetMod : {
                js : {
                    inited : function()
                    {
                        this.__base.apply(this, arguments);
                        this._initListeners();
                    }
                }
            },

            _initListeners : function ()
            {
                var dropdown        = this.findBlockInside('link');
                var popup           = this.getPopup();
                var popupParams     = popup.params;
                var onDelModHovered = this._onDelModHovered.bind(this, dropdown, popup);
                var setModHovered   = { modName : MOD_NAME_HOVERED, modVal : true };
                var delModHovered   = { modName : MOD_NAME_HOVERED, modVal : false };
                var self            = this;

                dropdown
                    .on(setModHovered, function () {
                        //prevHoveredPopupLevel = popupParams.level - 1; // @todo
                        self._onSetModHovered();
                    })
                    .on(delModHovered, onDelModHovered);

                popup
                    .on(setModHovered, function () {
                        hoveredPopupLevel = popupParams.level;
                    })
                    .on(delModHovered, function () {
                        hoveredPopupLevel     = null;
                        prevHoveredPopupLevel = popupParams.level;

                        onDelModHovered();
                    });
            },

            _onDelModHovered : function (dropdown, popup)
            {
                var self = this;

                nextTick(function() {

                    if (!dropdown.hasMod(MOD_NAME_HOVERED)
                        && !popup.hasMod(MOD_NAME_HOVERED)
                    ) {

                        if (hoveredPopupLevel) {

                            if (hoveredPopupLevel <= prevHoveredPopupLevel) {
                                self.delMod(MOD_NAME_OPENED);
                            }
                        } else {
                            bemDom.doc.trigger('pointerclick');
                        }
                    }
                });
            },

            _onSetModHovered : function ()
            {
                if ($(document).width() >= SMALL_DEVICE_WIDTH) {
                    this.setMod(MOD_NAME_OPENED);
                }
            }
        },
        {
            live : false
        }));
    }
);