/**
 * @module dropdown-menu
 */
modules.define(
    'dropdown-menu',
    ['i-bem-dom', 'i-bem-dom__collection', 'dropdown'],
    function dropdownMenu(provide, bemDom, BemDomCollection, Dropdown) {
        const MOD_NAME_HOVERED = 'hovered';
        const MOD_NAME_OPENED = 'opened';

        const SET_MOD_HOVERED = { modName: MOD_NAME_HOVERED, modVal: true };
        const DEL_MOD_HOVERED = { modName: MOD_NAME_HOVERED, modVal: '' };

        const POPUP_BEFORE_CLOSE_TIMEOUT_MS = 100;

        /**
         * @exports
         * @class dropdown-menu
         * @bem
         */
        provide(bemDom.declBlock(this.name, /** @lends dropdown-menu.prototype */{

            onDropdownSetModHoveredLive(e) {

                if (this._dropdowns) {
                    return;
                }

                const dropdownsArr = this
                    .findChildBlocks(Dropdown)
                    .toArray()
                    .reverse();

                this._dropdowns = new BemDomCollection(dropdownsArr);

                this._events(this._dropdowns)
                    .on(DEL_MOD_HOVERED, this._onDropdownDelModHovered)
                    .on(SET_MOD_HOVERED, this._onDropdownSetModHovered);

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
                                .findChildBlocks(Dropdown)
                                .someHasMod(MOD_NAME_OPENED);

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
            lazyInit: true,

            onInit() {
                this._events(Dropdown).on(
                    SET_MOD_HOVERED,
                    this.prototype.onDropdownSetModHoveredLive
                );
            },
        }));
    }
);
