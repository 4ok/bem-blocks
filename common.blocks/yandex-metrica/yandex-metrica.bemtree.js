block('yandex-metrica')(

    def()((ctx, json) => {
        const defaultParams = {
            webvisor            : true,
            clickmap            : true,
            trackLinks          : true,
            accurateTrackBounce : true
        };

        json.params = Object.assign({
                id : json.id
            },
            defaultParams,
            json.params || {}
        );

        delete json.id;

        return json;
    })
);
