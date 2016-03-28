block('logo').elem('link')(

    def()((ctx, json) => { // TODO: replace

        if (Array.isArray(json.content)) {

            for (var item in json.content) { // TODO

                if (json.content[item].elem) {
                    json.content[item].block = 'logo';
                }
            }
        }

        return Object.assign(json, {
            block : 'link',
            elem  : undefined,
            mix   : {
                block: this.block,
                elem: 'link'
            }
        });
    })
);
