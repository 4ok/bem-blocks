modules.define(
    'i-bem__dom',
    ['jquery', 'BEMHTML'],
    function(provide, $, BEMHTML, DOM)
{
    DOM.decl('menu', {},
    {
        live: function() {

            this.liveBindTo('item', 'mouseover mouseout', function(e)
            {
                var $elem = $(e.target);console.log('aaa');

                switch (e.type) {
                    case 'mouseover': {

                        console.log($(e.currentTarget).html());
                        console.log($(e.target).html());

                        this.setMod($elem, 'hover', true);
//                        console.log('aaa');
//                        $elem.next().show();
                        break;
                    }
                    case 'mouseout': {
                        this.delMod($elem, 'hover');
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