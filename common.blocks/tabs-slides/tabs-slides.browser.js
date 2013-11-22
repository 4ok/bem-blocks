modules.define(
    'i-bem__dom',
    function(provide, DOM)
{
    DOM.decl('tabs-slides',
    {
        _hasCurrentSlide: true,

        onSetMod: {

            js: {

                inited: function()
                {
                    var $tabsBlock = this.findBlockInside('tabs');
                    var _this      = this;

                    $tabsBlock.on('current', function(e, params)
                    {
                        if (params.removeCurrentSlide) {
                            _this._removeCurrentSlide();
                        } else if (params.setCurrentSlide) {

                            for (var modName in params.setCurrentSlide) {
                                var modVal = params.setCurrentSlide[modName];

                                _this._setCurrentSlide(modName, modVal);
                                break;
                            }
                        }
                    });
                }
            }
        },

        _setCurrentSlide: function(modName, modVal)
        {
            if (!this._hasCurrentSlide) {
                this.emit('set_current_slide_after_remove');
            }
            var $slidesBlock = this._getSlidesBlock();

            var $elem        = $slidesBlock.elem('item', modName, modVal);
            var $currentElem = this._getSlidesBlockCurrentElem();

            if ($currentElem.length) {
                $slidesBlock.delMod($currentElem, 'current');
            }

            if ($elem.length) {
                $slidesBlock.setMod($elem, 'current', true);
            }
        },

        _removeCurrentSlide: function()
        {
            var $slidesBlock = this._getSlidesBlock();

            var $currentElem = this._getSlidesBlockCurrentElem();

            if ($currentElem.length) {
                $slidesBlock.delMod($currentElem, 'current');
                this.emit('remove_current_slide');
                this._hasCurrentSlide = false;
            }
        },

        _getSlidesBlockCurrentElem: function()
        {
            var $slidesBlock = this._getSlidesBlock();

            return $slidesBlock.elem('item', 'current', true);
        },

        _getSlidesBlock: function()
        {
            return this.findBlockInside('slides');
        }
    });

    provide(DOM);
});