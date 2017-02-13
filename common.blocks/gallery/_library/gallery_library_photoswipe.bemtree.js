block('gallery').mod('library', 'photoswipe')(

    elem('item')(

        // TODO: predicate js not work
        def()((ctx, json) => {
            // todo
            /* eslint-disable global-require */
            const fs = require('fs');
            const config = require('config');
            var imageSize = require('image-size');
            /* eslint-enable global-require */

            // TODO
            const imagesDir = '/' + json.imagesDir + '/';
            const imagesPath = config.rootPath + '/public' + imagesDir;
            const images = fs.readdirSync(imagesPath);

            images.sort((a, b) => parseInt(a, 10) - parseInt(b, 10));

            json.js = {
                items : images.map(image => {
                    const size = imageSize(imagesPath + image);

                    return {
                        src: imagesDir + image,
                        w: size.width,
                        h: size.height,
                    };
                }),
            };

            return json;
        })
    )
);
