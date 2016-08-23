"use strict";

//fastclick
FastClick.attach(document.body);

var Index = {
  playing: false,
  currentAudio: null,
  init: function () {
    this._bindEvent();
    this._showPage();
  },
  _bindEvent: function () {
    var _this = this;
    var ps = pageSwitch('wrapper', {
      duration: 800,
      direction: 1,
      start: 0,
      loop: false,
      ease: 'ease',
      transition: 'scroll',
      mouse: true,
      autoplay: false,
      interval: 3000
      
    });
    // 坦克介绍
    $('.tank-nav span').on('click', function() {
      var index = $(this).index();
      $('.tank-nav span').removeClass('current');
      $(this).addClass('current');
      $('.tank-img-box').hide().eq(index).show();
    });
    // 回首屏
    $('.page3-top-btn').on('click', function() {
      ps.slide(0);
    });
    // 
    var style1 = $('#introSwitch1').get(0).style
      , style2 = $('#introSwitch2').get(0).style
      , style3 = $('#introSwitch3').get(0).style
      , style4 = $('#introSwitch4').get(0).style
      , style5 = $('#introSwitch5').get(0).style
    ;
    $(".intro1").on("click",function(){style1.webkitTransitionDuration=style1.MozTransitionDuration=style1.msTransitionDuration=style1.OTransitionDuration=style1.transitionDuration="500ms";style1.transform=style1.webkitTransform=style1.MozTransform="translate(0%, 0px)translateZ(0)";style2.webkitTransitionDuration=style2.MozTransitionDuration=style2.msTransitionDuration=style2.OTransitionDuration=style2.transitionDuration="500ms";style2.transform=style2.webkitTransform=style2.MozTransform="translate(10%, 0px)translateZ(0)";style3.webkitTransitionDuration=style3.MozTransitionDuration=style3.msTransitionDuration=style3.OTransitionDuration=style3.transitionDuration="500ms";style3.transform=style3.webkitTransform=style3.MozTransform="translate(20%, 0px)translateZ(0)";style4.webkitTransitionDuration=style4.MozTransitionDuration=style4.msTransitionDuration=style4.OTransitionDuration=style4.transitionDuration="500ms";style4.transform=style4.webkitTransform=style4.MozTransform="translate(30%, 0px)translateZ(0)";style5.webkitTransitionDuration=style5.MozTransitionDuration=style5.msTransitionDuration=style5.OTransitionDuration=style5.transitionDuration="500ms";style5.transform=style5.webkitTransform=style5.MozTransform="translate(40%, 0px)translateZ(0)"});$(".intro2").on("click",function(){style1.webkitTransitionDuration=style1.MozTransitionDuration=style1.msTransitionDuration=style1.OTransitionDuration=style1.transitionDuration="500ms";style1.transform=style1.webkitTransform=style1.MozTransform="translate(-90%, 0px)translateZ(0)";style2.webkitTransitionDuration=style2.MozTransitionDuration=style2.msTransitionDuration=style2.OTransitionDuration=style2.transitionDuration="500ms";style2.transform=style2.webkitTransform=style2.MozTransform="translate(10%, 0px)translateZ(0)";style3.webkitTransitionDuration=style3.MozTransitionDuration=style3.msTransitionDuration=style3.OTransitionDuration=style3.transitionDuration="500ms";style3.transform=style3.webkitTransform=style3.MozTransform="translate(20%, 0px)translateZ(0)";style4.webkitTransitionDuration=style4.MozTransitionDuration=style4.msTransitionDuration=style4.OTransitionDuration=style4.transitionDuration="500ms";style4.transform=style4.webkitTransform=style4.MozTransform="translate(30%, 0px)translateZ(0)";style5.webkitTransitionDuration=style5.MozTransitionDuration=style5.msTransitionDuration=style5.OTransitionDuration=style5.transitionDuration="500ms";style5.transform=style5.webkitTransform=style5.MozTransform="translate(40%, 0px)translateZ(0)"});$(".intro3").on("click",function(){style1.webkitTransitionDuration=style1.MozTransitionDuration=style1.msTransitionDuration=style1.OTransitionDuration=style1.transitionDuration="500ms";style1.transform=style1.webkitTransform=style1.MozTransform="translate(-90%, 0px)translateZ(0)";style2.webkitTransitionDuration=style2.MozTransitionDuration=style2.msTransitionDuration=style2.OTransitionDuration=style2.transitionDuration="500ms";style2.transform=style2.webkitTransform=style2.MozTransform="translate(-80%, 0px)translateZ(0)";style3.webkitTransitionDuration=style3.MozTransitionDuration=style3.msTransitionDuration=style3.OTransitionDuration=style3.transitionDuration="500ms";style3.transform=style3.webkitTransform=style3.MozTransform="translate(20%, 0px)translateZ(0)";style4.webkitTransitionDuration=style4.MozTransitionDuration=style4.msTransitionDuration=style4.OTransitionDuration=style4.transitionDuration="500ms";style4.transform=style4.webkitTransform=style4.MozTransform="translate(30%, 0px)translateZ(0)";style5.webkitTransitionDuration=style5.MozTransitionDuration=style5.msTransitionDuration=style5.OTransitionDuration=style5.transitionDuration="500ms";style5.transform=style5.webkitTransform=style5.MozTransform="translate(40%, 0px)translateZ(0)"});$(".intro4").on("click",function(){style1.webkitTransitionDuration=style1.MozTransitionDuration=style1.msTransitionDuration=style1.OTransitionDuration=style1.transitionDuration="500ms";style1.transform=style1.webkitTransform=style1.MozTransform="translate(-90%, 0px)translateZ(0)";style2.webkitTransitionDuration=style2.MozTransitionDuration=style2.msTransitionDuration=style2.OTransitionDuration=style2.transitionDuration="500ms";style2.transform=style2.webkitTransform=style2.MozTransform="translate(-80%, 0px)translateZ(0)";style3.webkitTransitionDuration=style3.MozTransitionDuration=style3.msTransitionDuration=style3.OTransitionDuration=style3.transitionDuration="500ms";style3.transform=style3.webkitTransform=style3.MozTransform="translate(-70%, 0px)translateZ(0)";style4.webkitTransitionDuration=style4.MozTransitionDuration=style4.msTransitionDuration=style4.OTransitionDuration=style4.transitionDuration="500ms";style4.transform=style4.webkitTransform=style4.MozTransform="translate(30%, 0px)translateZ(0)";style5.webkitTransitionDuration=style5.MozTransitionDuration=style5.msTransitionDuration=style5.OTransitionDuration=style5.transitionDuration="500ms";style5.transform=style5.webkitTransform=style5.MozTransform="translate(40%, 0px)translateZ(0)"});$(".intro5").on("click",function(){style1.webkitTransitionDuration=style1.MozTransitionDuration=style1.msTransitionDuration=style1.OTransitionDuration=style1.transitionDuration="500ms";style1.transform=style1.webkitTransform=style1.MozTransform="translate(-90%, 0px)translateZ(0)";style2.webkitTransitionDuration=style2.MozTransitionDuration=style2.msTransitionDuration=style2.OTransitionDuration=style2.transitionDuration="500ms";style2.transform=style2.webkitTransform=style2.MozTransform="translate(-80%, 0px)translateZ(0)";style3.webkitTransitionDuration=style3.MozTransitionDuration=style3.msTransitionDuration=style3.OTransitionDuration=style3.transitionDuration="500ms";style3.transform=style3.webkitTransform=style3.MozTransform="translate(-70%, 0px)translateZ(0)";style4.webkitTransitionDuration=style4.MozTransitionDuration=style4.msTransitionDuration=style4.OTransitionDuration=style4.transitionDuration="500ms";style4.transform=style4.webkitTransform=style4.MozTransform="translate(-60%, 0px)translateZ(0)";style5.webkitTransitionDuration=style5.MozTransitionDuration=style5.msTransitionDuration=style5.OTransitionDuration=style5.transitionDuration="500ms";style5.transform=style5.webkitTransform=style5.MozTransform="translate(40%, 0px)translateZ(0)"});
    // 视频
    $('.page1-play-btn').on('click',function(){
      $('#popVedio1').show();
      document.getElementById('video1').play();
    });
    $('.pop-vedio').on('click',function(){
      $('.pop-bg').hide();
      document.getElementById('video1').pause();
    });
    // 背景音乐
    $(".page1-voice").on("click", function() {
      if ($(this).hasClass('close')) {
        $(this).removeClass('close');
      } else {
        $(this).addClass('close');
      }
      _this._playAudio();
    });
  },
  _showPage: function() {
    var _this = this;
    setTimeout(function() {
      $('#wrapper').css('visibility', 'visible');
      _this._playAudio();
    }, 4000);
  },
  _playAudio: function() {
    var _this = this;
    var $audio = $(".page1-voice").find("audio");
    $audio.attr("src", $audio.data("src"));
    if (_this.playing) {
      _this.playing = false;
      _this.currentAudio.pause();
      _this.currentAudio.currentTime = 0;
      _this.currentAudio = null;
    } else {
      _this.playing = true;
      _this.currentAudio = $audio.get(0);
      _this.currentAudio.play();
    }
  }
}

$(function() {
  Index.init();
});