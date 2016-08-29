"use strict";

var Zhuanti = {
  init: function () {
    this._bindEvent();
  },
  _bindEvent: function () {
    var pw = pageSwitch('zhuanti', {
      duration: 800,
      direction: 1,
      start: 0,
      loop: false,
      ease: 'ease',
      transition: 'scroll',
      mouse: true,
      mousewheel:true,
      autoplay: false,
      interval: 3000
    });
    //回到顶部
    $('.return-top').on('click', function () {
      pw.slide(0);
    });
    //切换
    $('.slide .slide_min a').hover(function(){
      $(this).addClass('on').siblings().removeClass('on')
      var index = $(this).index()
      $('.big').hide().eq(index).show();
    })
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
  Zhuanti.init();
});