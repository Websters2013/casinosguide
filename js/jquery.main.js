(function(){
    'use strict';

    $(function(){

        $.each( $('.text-label'), function(){
            new InputVal ( $(this) );
        } );

        new Menu();

    });

    var InputVal = function (obj) {

        var _obj = obj,
            _input = _obj.find('input');

        var _addEvents = function () {

                _input.on({
                    keyup: function(){

                        var curInput = $(this),
                            curLabel = curInput.next('label');

                        if (!curInput.val()==0) {
                            curLabel.css({
                                'opacity': 0
                            })
                        }else{
                            curLabel.css({
                                'opacity': 1
                            })
                        }
                    }
                });

                _input.on({
                    focusout: function(){

                        var curInput = $(this),
                            curLabel = curInput.next('label');

                        if (!curInput.val()==0) {
                            curLabel.css({
                                'opacity': 0
                            })
                        }else{
                            curLabel.css({
                                'opacity': 1
                            })
                        }
                    }
                });
            },

            _init = function () {
                _addEvents();
            };

        _init();
    };

    var Menu = function () {

        var _btn = $('.site__header-menu'),
            _btnOffsetLeft = _btn.offset().left,
            _menu = $('.site__aside'),
            _scroll = null,
            _window = $(window);

        var _addEvents = function () {

                _window.on({
                    'resize': function(){
                        _btnOffsetLeft = _btn.offset().left;
                        _menu.removeClass('opened');
                        _menu.attr('style','');
                        _menu.getNiceScroll().remove();
                    },
                    'load': function(){
                        if(_window.width()>768){
                            _menu.getNiceScroll().remove();
                        }

                    }
                });

                _btn.on({
                    click: function(){
                        if(!_menu.hasClass('opened')){
                            _menu.addClass('opened');
                            _setLeftPosMenu();
                            setTimeout(function(){
                                _addScroll();
                                _menu.getNiceScroll().resize();
                            },500)
                        }else{
                            _menu.removeClass('opened');
                            _menu.attr('style','');
                            _menu.getNiceScroll().remove();
                            _menu.css({
                                left: '-'+ _menu.outerWidth(true)+'px'
                            });
                        }
                    }
                });

            },
            _setLeftPosMenu = function(){
                _menu.offset({
                    left: _btnOffsetLeft+_btn.outerWidth(true)
                });
            },
            _addScroll = function(){
                _scroll = _menu.niceScroll({
                    cursorcolor:"#dc462d",
                    cursoropacitymin: "0",
                    cursorborderradius: "5px",
                    cursorborder: false,
                    cursorwidth: "5px",
                    railpadding: {
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0
                    }
                });
            },
            _init = function () {
                _addEvents();
            };

        _init();
    };

})();

$(window).on({
    load: function () {

    }
});