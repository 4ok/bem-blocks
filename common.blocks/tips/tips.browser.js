modules.define(
    'i-bem__dom',
    ['jquery'],
    function(provide, $, DOM)
{
    DOM.decl('tips',
    {
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
            var $img        = this.elem('img');
            var _this       = this;
            var blockParams = this.params;

            if ($img.length) {

                $img.each(function() {
                    var $this      = $(this);
                    var elemParams = _this.elemParams($this);
                    var tipParams  = {
                        content: {
                            text: '<img src="' + elemParams.url + '"/>'
                        }
                    };

                    if (!$.isEmptyObject(blockParams)) {
                        tipParams = $.extend(tipParams, blockParams);
                    }
                    $this.qtip(tipParams);
                });
            }
        }
    });

    provide(DOM);
});