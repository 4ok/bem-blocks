block('dropdown-menu')(

    def()((ctx, json) => { // TODO: replace
        const url  = ctx.helper('url');
        const menu = ctx.data['dropdown-menu'][json.name];

        json.menu = url.getMenu(menu);

        return json;
    })
);
