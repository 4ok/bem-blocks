modules.define(
    'i-bem__dom',
    ['jquery', 'BEMHTML'],
    function(provide, $, BEMHTML, DOM)
{
    DOM.decl('menu', {},
    {
        live: function() {

            this.liveBindTo('item-link', 'mouseover mouseout', function(e)
            {
                var $elem = $(e.currentTarget);//console.log('aaa');

                switch (e.type) {
                    case 'mouseover': {

//                        console.log($(e.currentTarget).html());
//                        console.log($(e.target).html());

                        if (!this.hasMod($elem, 'hover', true)) {
                            this.setMod($elem, 'hover', true);
    //                        console.log('aaa');
//                            var $nextLevel = $elem.next();console.log($nextLevel.html());
//
//                            if ($nextLevel.length) {
//                                $nextLevel.css('margin-left', '130px');
//                                $nextLevel.show();
//                            }
                        }
                        break;
                    }
                    case 'mouseout': {

                        if (this.hasMod($elem, 'hover', true)) {
//                            var $nextLevel = $elem.next();
//
//                            if ($nextLevel.length) {
////                                $nextLevel.hide();
//                            }

                            this.delMod($elem, 'hover');
                        }
                        break;
                    }
                }
            });

//            this.liveBindTo('item-level', 'mouseover mouseout', function(e)
//            {
//                var $elem = $(e.target);console.log($elem.html());
//
//                switch (e.type) {
//                    case 'mouseover': {
//                        this.setMod($elem, 'hover', true);
//
//                        $elem.find('.menu-level:first').show();
//
//
//
//                        break;
//                    }
//                    case 'mouseout': {
//                        this.delMod($elem, 'hover');
//                        break;
//                    }
//                }
//            });
        }
    });

    provide(DOM);
});