modules.define(
    'dropdown-menu',
    ['i-bem__dom', 'next-tick'],
    function dropdownMenu(provide, bemDom, nextTick) {
        const MOD_NAME_HOVERED = 'hovered';
        const MOD_NAME_OPENED = 'opened';

        const SET_MOD_HOVERED = { modName : MOD_NAME_HOVERED, modVal : true };
        const DEL_MOD_HOVERED = { modName : MOD_NAME_HOVERED, modVal : false };
        const DEL_MOD_OPENED = { modName : MOD_NAME_OPENED, modVal : false };

        const SMALL_DEVICE_WIDTH = 768; // TODO

        let hoveredPopupLevel = null;
        let prevHoveredPopupLevel = null;

        provide(bemDom.decl(this.name, {

            onSetMod: {
                js: {
                    inited: function () {
                        this
                            .findBlocksInside('dropdown')
                            .forEach(childDropdown => {
                                childDropdown.on(
                                    SET_MOD_HOVERED,
                                    this._onDropdownSetModHovered, this
                                );
                            });
                    }
                }
            },

            _onDropdownSetModHovered(e) {
                const dropdown = e.target;

                dropdown
                    .on(DEL_MOD_HOVERED, this._onDelModHovered)
                    .getPopup()
                    .on(SET_MOD_HOVERED, this._onPopupSetModHovered)
                    .on(DEL_MOD_HOVERED, this._onPopupDelModHovered.bind(this, dropdown));

                if (bemDom.doc.width() >= SMALL_DEVICE_WIDTH) {
                    dropdown.setMod(MOD_NAME_OPENED);
                }
            },

            _onDelModHovered(e) {
                const dropdown = e.target;

                nextTick(() => {

                    if (!dropdown.hasMod(MOD_NAME_HOVERED)
                        && !dropdown.getPopup().hasMod(MOD_NAME_HOVERED)
                    ) {

                        if (hoveredPopupLevel) {

                            if (hoveredPopupLevel <= prevHoveredPopupLevel) {
                                dropdown.delMod(MOD_NAME_OPENED);
                            }
                        } else {
                            bemDom.doc.trigger('pointerclick');
                        }
                    }
                });
            },

            _onPopupSetModHovered(e) {
                hoveredPopupLevel = e.target.params.level;
            },

            _onPopupDelModHovered(dropdown, e) {
                hoveredPopupLevel = null;
                prevHoveredPopupLevel = e.target.params.level;

                this._onDelModHovered({
                    target : dropdown
                });
            },

        }, {
            live() {
                this.liveInitOnBlockInsideEvent(
                    SET_MOD_HOVERED, 'dropdown',
                    // eslint-disable-next-line no-underscore-dangle
                    this.prototype._onDropdownSetModHovered
                );
            },
        }));
    }
);
