block('dropdown-menu')(

    js()(true),

    mix()((ctx, json) => ([].concat(json.mix || []), {
        block : json.theme,
    })),

    content()((ctx, json) => {
        const popupsOptions = Object.assign({
            root : {
                directions : [
                    'bottom-left',
                    'top-left',
                ],
                mainOffset : 0,
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

        return getItems(json.menu.items);

        function getItemName(item) {
            return item.short_name || item.name;
        }

        function getDropdown(item, level) {
            const dropdownSwitcher = {
                block : 'link',
                content : getItemName(item),
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
        }

        function getPopup(item, level) {
            return {
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

                    if (typeof child === 'string') {
                        return {
                            block : json.theme,
                            elem : 'popup-title',
                            content : child
                        };
                    }

                    if (child[childProp]) {
                        return getDropdown(child, level + 1);
                    }

                    const name = getItemName(child);

                    if (child.state) {
                        return {
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
                            content : name,
                        };
                    }

                    return {
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
                        content : name,
                    };
                }),
            };
        }

        function getItems(items) {
            return items.map(item => {

                if (item[childProp]) {
                    return getDropdown(item, 1);
                }

                const name = getItemName(item);

                if (item.state === 'active') {
                    return {
                        block: json.theme,
                        elem: 'item',
                        elemMods: {
                            state: item.state,
                        },
                        mix: {
                            block: ctx.block,
                            elem: 'item',
                            elemMods: {
                                state: item.state,
                            },
                        },
                        content: name,
                    };
                }

                return {
                    block: 'link',
                    mix: [
                        {
                            block: json.theme,
                            elem: 'item',
                            elemMods: {
                                state: item.state,
                            },
                        },
                        {
                            block: ctx.block,
                            elem: 'item',
                            elemMods: {
                                state: item.state,
                            },
                        },
                    ],
                    url: item.url,
                    content: name,
                };
            })
        }
    })
);
