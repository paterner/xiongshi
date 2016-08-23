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
    $('.intro1').on('click', function() {
      $('#introSwitch1').animate({left: '0px'});
      $('#introSwitch2').animate({left: '60px'});
      $('#introSwitch3').animate({left: '120px'});
      $('#introSwitch4').animate({left: '180px'});
      $('#introSwitch5').animate({left: '240px'});
    });
    $('.intro2').on('click', function() {
      $('#introSwitch1').animate({left: '-536px'});
      $('#introSwitch2').animate({left: '60px'});
      $('#introSwitch3').animate({left: '120px'});
      $('#introSwitch4').animate({left: '180px'});
      $('#introSwitch5').animate({left: '240px'});
    });
    $('.intro3').on('click', function() {
      $('#introSwitch1').animate({left: '-536px'});
      $('#introSwitch2').animate({left: '-477px'});
      $('#introSwitch3').animate({left: '120px'});
      $('#introSwitch4').animate({left: '180px'});
      $('#introSwitch5').animate({left: '240px'});
    });
    $('.intro4').on('click', function() {
      $('#introSwitch1').animate({left: '-536px'});
      $('#introSwitch2').animate({left: '-477px'});
      $('#introSwitch3').animate({left: '-417px'});
      $('#introSwitch4').animate({left: '180px'});
      $('#introSwitch5').animate({left: '240px'});
    });
    $('.intro5').on('click', function() {
      $('#introSwitch1').animate({left: '-536px'});
      $('#introSwitch2').animate({left: '-477px'});
      $('#introSwitch3').animate({left: '-417px'});
      $('#introSwitch4').animate({left: '-357px'});
      $('#introSwitch5').animate({left: '240px'});
    });
  }
}

$(function() {
  Index.init();
});