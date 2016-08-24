"use strict";

var News = {
  init: function () {
    this._bindEvent();
  },
  _bindEvent: function () {
    //回到顶部
    $('.return-top').on('click', function () {
      scrollTo(0, 0)
    });
    //公告
    $('.news-tab').on('click', function() {
      var type = $(this).attr('id').split('_')[1];
      $('.news-tab').removeClass('current');
      $(this).addClass('current');
      $('.news-content-body').hide();
      $('#content_' + type).show();
    });
    //坦克轮播
    if ($('#newsSwitch').length > 0) {
      var tankSwitch = pageSwitch('newsSwitch', {
        duration: 600,
        direction: 0,
        start: 0,
        loop: true,
        ease: 'ease',
        transition: 'scroll',
        mouse: true,
        autoplay: true,
        interval: 3000,
        slideCallback: function (index) {
          var l = $('#newsSwitchNum').find('li').length;
          if (index == l) {
            index = 0;
          }
          $('#newsSwitchNum li').removeClass('current');
          $('#newsSwitchNum li').eq(index).addClass('current');
        }
      });
      //
      $('#newsSwitchNum li').on('click', function() {
        var index = $(this).index();
        tankSwitch.slide(index);
      });
    }
  }
}

$(function() {
  News.init();
});