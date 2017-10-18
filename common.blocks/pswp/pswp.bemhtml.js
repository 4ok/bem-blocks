block('pswp')(
    js()(true),

    content()([
        { elem: 'bg' },
        {
            elem: 'scroll-wrap',
            content: [
                {
                    elem: 'container',
                    content: [
                        { elem: 'item' },
                        { elem: 'item' },
                        { elem: 'item' },
                    ],
                },
                {
                    elem: 'ui',
                    mix: {
                        block: 'pswp',
                        elem: 'ui--hidden',
                    },
                    content: [
                        {
                            elem: 'top-bar',
                            content: [
                                { elem: 'counter' },
                                {
                                    elem: 'button',
                                    mix: {
                                        block: 'pswp',
                                        elem: 'button--close',
                                    },
                                    attrs: {
                                        title: 'Закрыть (Esc)',
                                    },
                                },
                                {
                                    elem: 'button',
                                    mix: {
                                        block: 'pswp',
                                        elem: 'button--share',
                                    },
                                    attrs: {
                                        title: 'Поделиться',
                                    },
                                },
                                {
                                    elem: 'button',
                                    mix: {
                                        block: 'pswp',
                                        elem: 'button--fs',
                                    },
                                    attrs: {
                                        title: 'Переключить полноэкранный режим',
                                    },
                                },
                                {
                                    elem: 'button',
                                    mix: {
                                        block: 'pswp',
                                        elem: 'button--zoom',
                                    },
                                    attrs: {
                                        title: 'Увеличение/Уменьшение',
                                    },
                                },
                                {
                                    elem: 'preloader',
                                    content: {
                                        elem: 'preloader__icn',
                                        content: {
                                            elem: 'preloader__cut',
                                            content: {
                                                elem: 'preloader__donut',
                                            },
                                        },
                                    },
                                },
                            ],
                        },
                        {
                            elem: 'share-modal',
                            mix: [
                                {
                                    block: 'pswp',
                                    elem: 'share-modal--hidden',
                                },
                                {
                                    block: 'pswp',
                                    elem: 'single-tap',
                                },
                            ],
                            content: {
                                elem: 'share-tooltip',
                            },
                        },
                        {
                            elem: 'button',
                            mix: {

                                block: 'pswp',
                                elem: 'button--arrow--left',
                                attrs: {
                                    title: 'Предыдущая',
                                },
                            },
                        },
                        {
                            elem: 'button',
                            mix: {

                                block: 'pswp',
                                elem: 'button--arrow--right',
                                attrs: {
                                    title: 'Следущая',
                                },
                            },
                        },
                        {
                            elem: 'caption',
                            content: {
                                elem: 'caption__center',
                            },
                        },
                    ],
                },
            ],
        },
    ])
);
