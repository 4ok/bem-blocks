modules.define(
    'i-bem__dom',
    ['jquery', 'BEMHTML'],
    function(provide, $, BEMHTML, DOM)
{
    DOM.decl('menu', {

        _subMenuBlocks: [],

        onSetMod: {

            js: {

                inited: function()
                {
                    this.bindTo('mouseenter', function() {console.log('mouseenter');
                        this.setMod('hover', true);
                    });

                    this.bindTo('mouseleave', function() {console.log('mouseleave');
                        this.delMod('hover');
                        var subMenuBlocks = this._subMenuBlocks;

                        if (subMenuBlocks.length) {

                            setTimeout(function() {
                                for (var i = 0, l = subMenuBlocks.length - 1; i <= l; i++) {
                                    var block = subMenuBlocks[i];
                                    if (block.hasMod('hover', true)) {
                                    console.log(i, l);
//                                    if (i < l) {console.log(i, l);
////                                        block.remove();
//                                    }
                                    }
                                }
                            }, 100)
                        }
                    });
                }
            }
        },

        /**
         * Show menu
         * @param items
         * @param $elem
         * @private
         */
        _showSubMenu: function(items, $elem)
        {
            var menuItems = [];

            for (var i in items) {
                var item   = items[i];
                var params = {
                    elem:    'item',
                    content: item.text,
                    url:     item.url
                };

                if (item.hasOwnProperty('js') && item.js.hasOwnProperty('menu')) {
                    params.js = item.js;
                }

                menuItems.push(params);
            }
            var subMenuOptions = this.getSubMenuOptions($elem);

            var $menu = $(BEMHTML.apply({
                block:   subMenuOptions.block,
                mods:    { 'sub-menu': true },
                content: [
                    menuItems
                ]
            }));

            $menu.css(subMenuOptions.position);

            var $page = this.findBlockOutside('page');

            DOM.append($page.domElem, $menu);

            return $menu.bem(subMenuOptions.block);
        }

    },
    {
        live: function() {

            this.liveBindTo('item', 'mouseover mouseout', function(e)
            {
                var $elem = $(e.currentTarget);

                switch (e.type) {
                    case 'mouseover': {

                        if (!this.hasMod($elem, 'hover', true)) {
                            var params = this.elemParams($elem);

                            this.setMod($elem, 'hover', true);

                            if (params.hasOwnProperty('menu')) {
                                this._subMenuBlocks.push(this._showSubMenu(params.menu, $elem));
                            }
                        }
                        break;
                    }
                    case 'mouseout': {

                        if (this.hasMod($elem, 'hover', true)) {
                            this.delMod($elem, 'hover');
//                            var subMenuBlocks = this._subMenuBlocks;
//
//                            if (subMenuBlocks.length) {
//
//                                for (var i = 0, l = subMenuBlocks.length; i < l; i++) {
//                                    var block = subMenuBlocks[i];
//
//                                    if (block.hasMod('hover', true)) {
//                                        console.log(i);
//                                    }
////                                    console.log('q');
//                                }
//                            }
                        }
                        break;
                    }
                }
            });
        }
    });

    provide(DOM);
});