block('logo').elem('link')(

    replace()((ctx, json) => {

        if (Array.isArray(json.content)) {

            Object.keys(json.content).forEach(key => {

                if (json.content[key].elem) {
                    json.content[key].block = 'logo';
                }
            });
        }

        return Object.assign(json, {
            block : 'link',
            elem : undefined,
            mix : {
                block : this.block,
                elem : 'link',
            },
        });
    })
);
