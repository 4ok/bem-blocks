block('dropdown-menu')(

    replace()((ctx, json) => {
        const popupsOptions = Object.assign({
            root : {
                directions : [
                    'bottom-left',
                    'top-left',
                ],
                mainOffset : -1,
            },
            children : {
                directions : [
                    'right-top',
                    'left-top',
                ],
                mainOffset : 0,
            },
        }, json.popupOptions || {});

        const type = 'hover';
        const childProp = 'children';

        const getDropdown = (item, level) => {
            const dropdownSwitcher = {
                block : 'link',
                content : item.name,
            };
            let popupOptions;

            if (level === 1) {
                dropdownSwitcher.mix = [
                    {
                        block : json.theme,
                        elem : 'item',
                        elemMods : {
                            state : item.state,
                        },
                    },
                    {
                        block : ctx.block,
                        elem : 'item',
                        elemMods : {
                            state : item.state,
                        },
                    },
                ];
                popupOptions = popupsOptions.root;
            } else {
                dropdownSwitcher.mix = [
                    {
                        block : json.theme,
                        elem : 'popup-item',
                        elemMods : {
                            state : item.state,
                        },
                    },
                    {
                        block : ctx.block,
                        elem : 'popup-item',
                        elemMods : {
                            state : item.state,
                        },
                    },
                ];
                popupOptions = popupsOptions.children;
            }

            // eslint-disable-next-line no-use-before-define
            const popup = Object.assign(getPopup(item, level), popupOptions);

            if (item.state === 'active') {
                dropdownSwitcher.mods = {
                    pseudo : true,
                };
            } else {
                dropdownSwitcher.url = item.url;
            }

            return {
                block : 'dropdown',
                mods : {
                    switcher : 'link',
                    theme : 'islands',
                    type,
                },
                switcher : dropdownSwitcher,
                popup,
            };
        };

        const getPopup = (item, level) => ({
            block : 'popup',
            mods : {
                type,
            },
            mix : [
                {
                    block : json.theme,
                    elem : 'popup',
                },
                {
                    block : ctx.block,
                    elem : 'popup',
                },
            ],
            js : {
                level,
            },
            content : item[childProp].map(child => {
                let result;

                if (child[childProp]) {
                    result = getDropdown(child, level + 1);
                } else {

                    if (child.state) {
                        result = {
                            block : json.theme,
                            elem : 'popup-item',
                            elemMods : {
                                state : child.state,
                            },
                            mix : {
                                block : ctx.block,
                                elem : 'popup-item',
                                elemMods : {
                                    state : child.state,
                                },
                            },
                            content : child.name,
                        };
                    } else {
                        result = {
                            block : 'link',
                            mix : [
                                {
                                    block : json.theme,
                                    elem : 'popup-item',
                                    elemMods : {
                                        state : child.state,
                                    },
                                },
                                {
                                    block : ctx.block,
                                    elem : 'popup-item',
                                    elemMods : {
                                        state : child.state,
                                    },
                                },
                            ],
                            url : child.url,
                            content : child.name,
                        };
                    }
                }

                return result;
            }),
        });

        Object.assign(json, {
            block : json.theme,
            mix : {
                block : ctx.block,
                js: true,
            },
            content : json.menu.items.map(item => {
                let result;

                if (item[childProp]) {
                    result = getDropdown(item, 1);
                } else {
                    result = {
                        block : 'link',
                        mix : [
                            {
                                block : json.theme,
                                elem : 'item',
                                elemMods : {
                                    state : item.state,
                                },
                            },
                            {
                                block : ctx.block,
                                elem : 'item',
                                elemMods : {
                                    state : item.state,
                                },
                            },
                        ],
                        url : item.url,
                        content : item.name,
                    };
                }

                return result;
            }),
        });

        return json;
    })
);
