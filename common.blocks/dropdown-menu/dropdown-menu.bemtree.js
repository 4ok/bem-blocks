block('dropdown-menu')(

    def()((ctx, json) => {
        const url = ctx.helper('url');
        const menu = ctx.data['dropdown-menu'][json.name];

        json.menu = url.getMenu(menu);

        return json;
    })
);
