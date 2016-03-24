block('dropdown-menu')(

    replace()(function () {
        const ctx = this.ctx;

        const popupsOptions = Object.assign({
            root : {
                directions : [
                    'bottom-left',
                    'top-left'
                ],
                mainOffset: -1
            },
            children : {
                directions : [
                    'right-top',
                    'left-top'
                ],
                mainOffset : 0
            }
        }, ctx.popupOptions || {});

        const type      = 'hover';
        const childProp = 'children';
        let getDropdown;
        let getPopup;

        getDropdown = function (item, level) {
            let dropdownSwitcher = {
                block   : 'link',
                content : item.name
            };
            let popupOptions;

            if (level == 1) {
                dropdownSwitcher.mix = [
                    {
                        block    : ctx.theme,
                        elem     : 'item',
                        elemMods : {
                            state : item.state
                        }
                    },
                    {
                        block    : ctx.block,
                        elem     : 'item',
                        elemMods : {
                            state : item.state
                        }
                    }
                ];
                popupOptions = popupsOptions.root;
            } else {
                dropdownSwitcher.mix = [
                    {
                        block    : ctx.theme,
                        elem     : 'popup-item',
                        elemMods : {
                            state : item.state
                        }
                    },
                    {
                        block    : ctx.block,
                        elem     : 'popup-item',
                        elemMods : {
                            state : item.state
                        }
                    }
                ];
                popupOptions = popupsOptions.children;
            }

            const popup = Object.assign(getPopup(item, level), popupOptions);

            if (item.state == 'active') {
                dropdownSwitcher.mods = {
                    pseudo : true
                };
            } else {
                dropdownSwitcher.url = item.url;
            }

            return {
                block : 'dropdown',
                mods  : {
                    switcher : 'link',
                    type     : type,
                    theme    : 'islands'
                },
                switcher : dropdownSwitcher,
                popup    : popup
            }
        };

        getPopup = function (item, level) {

            return {
                block : 'popup',
                mods  : {
                    type : type
                },
                mix : [
                    {
                        block : ctx.theme,
                        elem  : 'popup'
                    },
                    {
                        block : ctx.block,
                        elem  : 'popup'
                    }
                ],
                js: {
                    level : level
                },
                content: item[childProp].map(function (child) {
                    let result;

                    if (child[childProp]) {
                        result = getDropdown(child, level + 1);
                    } else {

                        if (child.state) {
                            result = {
                                block    : ctx.theme,
                                elem     : 'popup-item',
                                elemMods : {
                                    state : child.state
                                },
                                mix : {
                                    block    : ctx.block,
                                    elem     : 'popup-item',
                                    elemMods : {
                                        state : child.state
                                    }
                                },
                                content : child.name
                            }
                        } else {
                            result = {
                                block : 'link',
                                mix   : [
                                    {
                                        block    : ctx.theme,
                                        elem     : 'popup-item',
                                        elemMods : {
                                            state : child.state
                                        }
                                    },
                                    {
                                        block    : ctx.block,
                                        elem     : 'popup-item',
                                        elemMods : {
                                            state : child.state
                                        }
                                    }
                                ],
                                url     : child.url,
                                content : child.name
                            };
                        }
                    }

                    return result;
                })
            };
        };

        Object.assign(ctx, {
            block : ctx.theme,
            mix   : {
                block : ctx.block
            },
            content : ctx.menu.items.map(function (item) {

                return (item[childProp])
                    ? getDropdown(item, 1)
                    : {
                    block : 'link',
                    mix   : [
                        {
                            block    : ctx.theme,
                            elem     : 'item',
                            elemMods : {
                                state : item.state
                            }
                        },
                        {
                            block    : ctx.block,
                            elem     : 'item',
                            elemMods : {
                                state : item.state
                            }
                        }
                    ],
                    url     : item.url,
                    content : item.name
                }
            })
        });

        return ctx;
    })
);
