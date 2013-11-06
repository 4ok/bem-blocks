modules.define('i-bem__dom', function(provide, DOM) {

    DOM.decl('tabs-slides', {

        onSetMod: {

            js: {

                inited: function()
                {
                    var $tabsBlock   = this.findBlockInside('tabs');
                    var $slidesBlock = this.findBlockInside('slides');

                    $tabsBlock.on('current', function(e, params)
                    {
                        $slidesBlock.showSlide(params.slideMod[0], params.slideMod[1]);
                    });

                }
            }
        }
    });

    provide(DOM);
});