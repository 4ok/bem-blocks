modules.define(
    'i-bem__dom',
    ['jquery'],
    function(provide, $, DOM)
{
    DOM.decl('tips',
    {
        defaultParams: {},

        onSetMod: {

            js: {

                inited: function()
                {
                    this._initImg();
                }
            }
        },

        _initImg: function()
        {
            var $img = this.elem('img');
            var _this = this;

            if ($img.length) {

                $img.each(function() {
                    var $this      = $(this);
                    var elemParams = _this.elemParams($this);
                    var tipParams  = {
                        content: {
                            text: '<img class="tips__content-image" src="' + elemParams.url + '"/>'
                        }
                    };
                    tipParams = $.extend(tipParams, _this.defaultParams);

                    $this.qtip(tipParams);
                });
            }
        }
    });

    provide(DOM);
});