block('logo').elem('icon')
(
    replace()(function() {
        let ctx = this.ctx;

        return Object.assign(ctx, {
            block : 'icon',
            elem  : undefined,
            mix   : {
                block: ctx.block,
                elem: 'icon'
            }
        });
    })
);
