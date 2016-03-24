block('logo').elem('icon')(

    replace()(function() {

        return Object.assign(this.ctx, {
            block : 'icon',
            elem  : undefined,
            mix   : {
                block: ctx.block,
                elem: 'icon'
            }
        });
    })
);
