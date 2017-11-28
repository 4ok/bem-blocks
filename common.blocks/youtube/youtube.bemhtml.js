block('youtube')(

    tag()('iframe'),

    attrs()((ctx, json) => ({
        width: json.width || 560,
        height: json.height || 315,
        src: 'https://www.youtube.com/embed/' + json.url,
        frameborder: json.frameborder || 0,
        allowfullscreen: json.allowfullscreen || true,
    }))
);
