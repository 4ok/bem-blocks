modules.define(
    'dropdown-menu',
    ['i-bem__dom', 'next-tick'],
    function dropdownMenu(provide, bemDom, nextTick) {
        const MOD_NAME_HOVERED = 'hovered';
        const MOD_NAME_OPENED = 'opened';

        const SET_MOD_HOVERED = { modName : MOD_NAME_HOVERED, modVal : true };
        const DEL_MOD_HOVERED = { modName : MOD_NAME_HOVERED, modVal : false };

        const SMALL_DEVICE_WIDTH = 768; // TODO

        const POPUP_BEFORE_CLOSE_TIMEOUT_MS = 100;

        provide(bemDom.decl(this.name, {

            _onDropdownSetModHoveredLive(e) {

                if (this._dropdowns) {
                    return;
                }

                this._dropdowns = this
                    .findBlocksInside('dropdown')
                    .reverse();

                this._dropdowns.forEach(dropdown => {
                    dropdown
                        .on(SET_MOD_HOVERED, this._onDropdownSetModHovered, this)
                        .on(DEL_MOD_HOVERED, this._onDropdownDelModHovered, this);
                });

                this._onDropdownSetModHovered(e);
            },

            _onDropdownSetModHovered(e) {

                if (bemDom.doc.width() < SMALL_DEVICE_WIDTH) {
                    return;
                }

                e.target.setMod(MOD_NAME_OPENED);
            },

            _onDropdownDelModHovered(e) {

                setTimeout(() => {

                    this._dropdowns.forEach(dropdown => {

                        if (dropdown.hasMod(MOD_NAME_OPENED)) {
                            const popup = dropdown.getPopup();
                            const isPopupDropdownOpen = popup
                                .findBlocksInside('dropdown')
                                // Exclude current popup
                                .slice(1)
                                .some(popupDropdown => popupDropdown.hasMod(MOD_NAME_OPENED));

                            if (!(dropdown.hasMod(MOD_NAME_HOVERED)
                                || popup.hasMod(MOD_NAME_HOVERED)
                                || isPopupDropdownOpen
                            )) {
                                dropdown.delMod(MOD_NAME_OPENED);
                            }
                        }
                    })
                }, POPUP_BEFORE_CLOSE_TIMEOUT_MS);
            }
        }, {
            live() {
                this.liveInitOnBlockInsideEvent(
                    SET_MOD_HOVERED, 'dropdown',
                    // eslint-disable-next-line no-underscore-dangle
                    this.prototype._onDropdownSetModHoveredLive
                );
            },
        }));
    }
);
