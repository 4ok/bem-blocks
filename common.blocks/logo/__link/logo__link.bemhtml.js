block('logo').elem('link')
(
    replace()(function() {
        let ctx = this.ctx;

        if (Array.isArray(ctx.content)) {

            for (var item in ctx.content) {

                if (ctx.content[item].elem) {
                    ctx.content[item].block = 'logo';
                }
            }
        }

        return Object.assign(ctx, {
            block : 'link',
            elem  : undefined,
            mix   : {
                block: this.block,
                elem: 'link'
            }
        });
    })
);
