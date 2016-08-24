"use strict";

//fastclick
FastClick.attach(document.body);

var News = {
  init: function () {
    this._bindEvent();
    this._showPage();
  },
  _bindEvent: function () {
    var _this = this;
    if ($('#newsList').length > 0) {
      var ps = pageSwitch('newsList', {
        duration: 800,
        direction: 0,
        start: 0,
        loop: false,
        ease: 'ease',
        transition: 'scroll',
        mouse: true,
        autoplay: false,
        interval: 3000,
        slideCallback: function (index) {
          var l = $('.news-switch-num').find('li').length;
          if (index == l) {
            index = 0;
          }
          $('.news-switch-num li').removeClass('current');
          $('.news-switch-num li').eq(index).addClass('current');
        }
      });
    }
    // tab按钮
    $('.news-tab').on('click', function() {
      var index = $(this).index();
      $('.news-tab').removeClass('current');
      $('.news-tab').eq(index).addClass('current');
      ps.slide(index);
    });
  },
  _showPage: function() {
    var _this = this;
    setTimeout(function() {
      $('#wrapper').css('visibility', 'visible');
    }, 1000);
  }
}

$(function() {
  News.init();
});