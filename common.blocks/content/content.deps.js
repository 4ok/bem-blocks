({
    shouldDeps : [
        {
            elems : [
                'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
                'p', 'strong', 'link', 'image', 'address'
            ]
        },
        {
            elem : 'image',
            mods : {
                align : ['float-left', 'center', 'right', 'float-right']
            }
        },
        {
            elem : 'wrapper',
            mods : {
                'text-align' : ['right']
            }
        },
        { block: 'link' },
        { block: 'image' }
    ]
});