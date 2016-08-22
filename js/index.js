"use strict";

var Index = {
  init: function () {
    this._bindEvent();
  },
  _bindEvent: function () {
    //回到顶部
    $('.return-top').on('click', function () {
      scrollTo(0, 0)
    });
    //视频
    $('.play-btn').on('click', function() {
      $('#popVedio').show();
      $('#vedio1').show();
    });
    $('#popVedio').find('i').on('click', function() {
      $('.pop-vedio').hide();
      $('#popVedio').hide();
    });
    //公告
    $('.content-news-tab span').on('click', function() {
      var type = $(this).attr('id').split('_')[1];
      $('.content-news-tab span').removeClass('current');
      $(this).addClass('current');
      $('.content-news-content').hide();
      $('#news_' + type).show();
    });
    //坦克介绍
    $('.tank-nav span').on('mouseover', function() {
      var index = $(this).index();
      $('.tank-nav span').removeClass('current');
      $(this).addClass('current');
      $('.tank-img-box').hide().eq(index).show();
    });
    //坦克轮播
    var tankSwitch = pageSwitch('tankSwitch', {
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
        var l = $('#tankSwitchNum').find('li').length;
        if (index == l) {
          index = 0;
        }
        $('#tankSwitchNum li').removeClass('current');
        $('#tankSwitchNum li').eq(index).addClass('current');
      }
    });
    //介绍轮播
    var introSwitch = pageSwitch('introSwitch', {
      duration: 600,
      direction: 0,
      start: 0,
      loop: true,
      ease: 'ease',
      transition: 'scroll',
      mouse: true,
      autoplay: true,
      interval: 3000
    });
  }
}

$(function() {
  Index.init();
});