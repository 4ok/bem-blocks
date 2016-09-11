block('gallery')/* .mod('library', 'photoswipe') */( // TODO: not work

    elem('item')(

        // TODO: predicate js not work
        def()((ctx, json) => {
            /* eslint-disable global-require */
            const fs = require('fs');
            const config = require('config');
            /* eslint-enable global-require */

            // TODO
            const imagesDir = '/' + json.imagesDir + '/';
            const imagesPath = config.rootPath + '/public' + imagesDir;
            const images = fs.readdirSync(imagesPath);

            images.sort((a, b) => parseInt(a, 10) - parseInt(b, 10));

            json.js = {
                items : images.map(image => ({
                    src : imagesDir + image,
                    w : 1024,
                    h : 768,
                })),
            };

            return json;
        })
    )
);
