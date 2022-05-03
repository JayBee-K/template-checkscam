;(function ($) {
    'use strict';
    let windowWidth = $(window).width();
    const handleTouchMove = function (ev) {
        ev.preventDefault();
    }

    const handleEffectButton = function () {
        $('.btn-theme').on('mouseenter', function (e) {
            let parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span').css({top: relY, left: relX})
        }).on('mouseout', function (e) {
            let parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span').css({top: relY, left: relX})
        });
    }

    const handleToggleSearch = function () {
        let btnElm = $('#btn-collapse_search'),
            wrapperBtnElm = btnElm.parent();
        btnElm.click(function () {
            if (wrapperBtnElm.hasClass('is-show')) {
                btnElm.html('<i class="far fa-search"></i>');
                wrapperBtnElm.removeClass('is-show');
            } else {
                btnElm.html('<i class="far fa-times"></i>');
                wrapperBtnElm.addClass('is-show');
            }
        });

        $(document).mouseup(function (e) {
            let elm = wrapperBtnElm;
            elm.is(e.target) || 0 !== elm.has(e.target).length || (
                btnElm.trigger('click')
            )
        })
    }

    $(function () {
        handleEffectButton();
        handleToggleSearch();
    });
})(jQuery);