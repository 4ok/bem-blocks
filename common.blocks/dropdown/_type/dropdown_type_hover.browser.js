modules.define(
    'dropdown',
    ['i-bem__dom', 'next-tick'],
    (provide, bemDom, nextTick, Dropdown) => {
        const MOD_NAME_HOVERED = 'hovered';
        const MOD_NAME_OPENED = 'opened';

        const SET_MOD_HOVERED = { modName : MOD_NAME_HOVERED, modVal : true };
        const DEL_MOD_HOVERED = { modName : MOD_NAME_HOVERED, modVal : false };

        const SMALL_DEVICE_WIDTH = 768;

        let hoveredPopupLevel = null;
        let prevHoveredPopupLevel = null;

        provide(Dropdown.decl({ modName : 'type', modVal : 'hover' }, {

            _onSetModHovered(e) {
                this._initListeners(e.target);
            },

            _initListeners(link) {
                const popup = this.getPopup();
                const popupParams = popup.params;
                const onDelModHovered = this._onDelModHovered.bind(this, link, popup);

                link.on(DEL_MOD_HOVERED, onDelModHovered);

                popup
                    .on(SET_MOD_HOVERED, () => {
                        hoveredPopupLevel = popupParams.level;
                    })
                    .on(DEL_MOD_HOVERED, () => {
                        hoveredPopupLevel = null;
                        prevHoveredPopupLevel = popupParams.level;

                        onDelModHovered();
                    });

                if (bemDom.doc.width() >= SMALL_DEVICE_WIDTH) {
                    this.setMod(MOD_NAME_OPENED);
                }
            },

            _onDelModHovered(dropdown, popup) {

                nextTick(() => {

                    if (!dropdown.hasMod(MOD_NAME_HOVERED)
                        && !popup.hasMod(MOD_NAME_HOVERED)
                    ) {

                        if (hoveredPopupLevel) {

                            if (hoveredPopupLevel <= prevHoveredPopupLevel) {
                                this.delMod(MOD_NAME_OPENED);
                            }
                        } else {
                            bemDom.doc.trigger('pointerclick');
                        }
                    }
                });
            },
        }, {
            live : () => {
                this.liveInitOnBlockInsideEvent(SET_MOD_HOVERED, 'link', this.prototype._onSetModHovered);
            },
        }));
    }
);
