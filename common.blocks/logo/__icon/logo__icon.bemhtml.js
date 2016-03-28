block('logo').elem('icon')(

    def()((ctx, json) => { // TODO: replace

        return Object.assign(json, {
            block : 'icon',
            elem  : undefined,
            mix   : {
                block: ctx.block,
                elem: 'icon'
            }
        });
    })
);
