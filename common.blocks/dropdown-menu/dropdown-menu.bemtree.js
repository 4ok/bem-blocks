block('dropdown-menu')
(
    def()(function () {
        const url  = this.helper('url');
        const ctx  = this.ctx;
        const menu = this.data['dropdown-menu'][ctx.name];

        ctx.menu = url.getMenu(menu);

        return ctx;
    })
);
