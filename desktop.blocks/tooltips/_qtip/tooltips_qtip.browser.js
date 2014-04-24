modules.define(
    'i-bem__dom',
    ['jquery'],
    function(provide, $, DOM)
{
    DOM.decl({ block : 'tooltips', modName: 'qtip', modVal: true },
    {
        defaultParams: {},

        onSetMod: {

            js: {

                inited: function()
                {
                    this._initImg();

                    $(".qtip__content-image-link").fancybox({
                        openEffect:  'elastic',
                        helpers:      {
                            title: {
                                type : 'inside'
                            }
                        }
                    });
                }
            }
        },

        _initImg: function()
        {
            var $img  = this.elem('img');
            var _this = this;

            if ($img.length) {

                $img.each(function() {
                    var $this      = $(this);
                    var elemParams = _this.elemParams($this);
                    var text       = '<img class="qtip__content-image" src="' + elemParams.url + '"/>';

                    if (elemParams.hasOwnProperty('link')) {
                        text = [
                            '<a class="qtip__content-image-link" href="' + elemParams.link.url + '" title="' + elemParams.link.title + '">',
                            text,
                            '</a>'
                        ].join("\n");
                    }
                    var qtipParams = {
                        content: {
                            text: text
                        }
                    };
                    qtipParams = $.extend(qtipParams, _this.defaultParams);

                    $this.qtip(qtipParams);
                });
            }
        }
    });

    provide(DOM);
});