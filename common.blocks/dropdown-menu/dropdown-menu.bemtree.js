block('dropdown-menu')
(
    def()(function () {
        const gate = this.helper('gate');
        const url  = this.helper('url');

        let ctx = this.ctx;

        gate.callMethod('base:menu/tree', { // TODO
            filter : {
                name : ctx.name
            },
            sort : ctx.sort || {
                sort : 1
            }
        }, function (menu) {
            ctx.menu = url.getMenu(menu);
        });

        return ctx;
    })
);
