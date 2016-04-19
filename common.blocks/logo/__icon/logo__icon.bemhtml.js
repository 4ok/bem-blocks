block('logo').elem('icon')(

    replace()((ctx, json) =>

        Object.assign(json, {
            block : 'icon',
            elem : undefined,
            mix : {
                block : ctx.block,
                elem : 'icon',
            },
        })
    )
);
