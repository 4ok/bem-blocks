block('yandex-metrica')
(
    def()(function () {
        const ctx = this.ctx;

        const defaultParams = {
            webvisor            : true,
            clickmap            : true,
            trackLinks          : true,
            accurateTrackBounce : true
        };

        ctx.params = Object.assign({
                id : ctx.id
            },
            defaultParams,
            ctx.params || {}
        );

        delete ctx.id;

        return applyCtx(ctx);
    })
);
