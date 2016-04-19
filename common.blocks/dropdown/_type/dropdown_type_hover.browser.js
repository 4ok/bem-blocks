const MOD_NAME_HOVERED = 'hovered';
const MOD_NAME_OPENED = 'opened';

const SMALL_DEVICE_WIDTH = 768;

modules.define(
    'dropdown',
    ['i-bem__dom', 'next-tick'],
    (provide, bemDom, nextTick, Dropdown) => {
        provide(Dropdown.decl({ modName : 'type', modVal : 'hover' }, {

            onSetMod : {
                js : {
                    inited() {
                        this.__base.apply(this, arguments);
                        this._initListeners();
                    },
                },
            },

            _initListeners() {
                const link = this.findBlockInside('link');
                const popup = this.getPopup();
                const popupParams = popup.params;
                const onDelModHovered = this._onDelModHovered.bind(this, link, popup);
                const setModHovered = { modName : MOD_NAME_HOVERED, modVal : true };
                const delModHovered = { modName : MOD_NAME_HOVERED, modVal : false };

                link
                    .on(setModHovered, this._onSetModHovered, this)
                    .on(delModHovered, onDelModHovered);

                popup
                    .on(setModHovered, () => {
                        this.hoveredPopupLevel = popupParams.level;
                    })
                    .on(delModHovered, () => {
                        this.hoveredPopupLevel = null;
                        this.prevHoveredPopupLevel = popupParams.level;

                        onDelModHovered();
                    });
            },

            _onDelModHovered(dropdown, popup) {

                nextTick(() => {

                    if (!dropdown.hasMod(MOD_NAME_HOVERED)
                        && !popup.hasMod(MOD_NAME_HOVERED)
                    ) {

                        if (this.hoveredPopupLevel) {

                            if (this.hoveredPopupLevel <= this.prevHoveredPopupLevel) {
                                this.delMod(MOD_NAME_OPENED);
                            }
                        } else {
                            bemDom.doc.trigger('pointerclick');
                        }
                    }
                });
            },

            _onSetModHovered() {

                if (bemDom.doc.width() >= SMALL_DEVICE_WIDTH) {
                    this.setMod(MOD_NAME_OPENED);
                }
            },
        }, {
            live : false,
        }));
    }
);
