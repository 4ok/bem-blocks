modules.define(
    'dropdown-menu',
    ['i-bem-dom', 'dropdown'],
    function dropdownMenu(provide, bemDom, Dropdown) {
        const MOD_NAME_HOVERED = 'hovered';
        const MOD_NAME_OPENED = 'opened';

        const SET_MOD_HOVERED = { modName: MOD_NAME_HOVERED, modVal: true };
        const DEL_MOD_HOVERED = { modName: MOD_NAME_HOVERED, modVal: false };

        const POPUP_BEFORE_CLOSE_TIMEOUT_MS = 100;

        provide(bemDom.declBlock(this.name, /** @lends dropdown-menu.prototype */{

            onDropdownSetModHoveredLive(e) {

                if (this._dropdowns) {
                    return;
                }

                this._dropdowns = this
                    .findChildBlock(Dropdown)
                    .reverse();

                this._dropdowns.forEach((dropdown) => {
                    dropdown
                        .on(SET_MOD_HOVERED, this._onDropdownSetModHovered, this)
                        .on(DEL_MOD_HOVERED, this._onDropdownDelModHovered, this);
                });

                this._onDropdownSetModHovered(e);
            },

            _onDropdownSetModHovered(e) {
                e.target.setMod(MOD_NAME_OPENED);
            },

            _onDropdownDelModHovered() {

                setTimeout(() => {

                    this._dropdowns.forEach((dropdown) => {

                        if (dropdown.hasMod(MOD_NAME_OPENED)) {
                            const popup = dropdown.getPopup();
                            const isPopupDropdownOpen = popup
                                .findChildBlock(Dropdown)
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
                    });
                }, POPUP_BEFORE_CLOSE_TIMEOUT_MS);
            },
        }, /** @lends dropdown-menu */{
            onInit() {

                this._events(Dropdown).on(
                    SET_MOD_HOVERED,
                    this.prototype.onDropdownSetModHoveredLive
                );
            },
        }));
    }
);
