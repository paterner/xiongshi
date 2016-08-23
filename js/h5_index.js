"use strict";

var Index = {
  init: function () {
    this._bindEvent();
  },
  _bindEvent: function () {
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
    $('.tank-nav span').on('mouseover', function() {
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
    $(".intro1").on("click",function(){style1.webkitTransitionDuration=style1.MozTransitionDuration=style1.msTransitionDuration=style1.OTransitionDuration=style1.transitionDuration="500ms";style1.transform=style1.webkitTransform=style1.MozTransform="translate(0px, 0px)translateZ(0)";style2.webkitTransitionDuration=style2.MozTransitionDuration=style2.msTransitionDuration=style2.OTransitionDuration=style2.transitionDuration="500ms";style2.transform=style2.webkitTransform=style2.MozTransform="translate(20px, 0px)translateZ(0)";style3.webkitTransitionDuration=style3.MozTransitionDuration=style3.msTransitionDuration=style3.OTransitionDuration=style3.transitionDuration="500ms";style3.transform=style3.webkitTransform=style3.MozTransform="translate(40px, 0px)translateZ(0)";style4.webkitTransitionDuration=style4.MozTransitionDuration=style4.msTransitionDuration=style4.OTransitionDuration=style4.transitionDuration="500ms";style4.transform=style4.webkitTransform=style4.MozTransform="translate(60px, 0px)translateZ(0)";style5.webkitTransitionDuration=style5.MozTransitionDuration=style5.msTransitionDuration=style5.OTransitionDuration=style5.transitionDuration="500ms";style5.transform=style5.webkitTransform=style5.MozTransform="translate(80px, 0px)translateZ(0)"});$(".intro2").on("click",function(){style1.webkitTransitionDuration=style1.MozTransitionDuration=style1.msTransitionDuration=style1.OTransitionDuration=style1.transitionDuration="500ms";style1.transform=style1.webkitTransform=style1.MozTransform="translate(-185px, 0px)translateZ(0)";style2.webkitTransitionDuration=style2.MozTransitionDuration=style2.msTransitionDuration=style2.OTransitionDuration=style2.transitionDuration="500ms";style2.transform=style2.webkitTransform=style2.MozTransform="translate(20px, 0px)translateZ(0)";style3.webkitTransitionDuration=style3.MozTransitionDuration=style3.msTransitionDuration=style3.OTransitionDuration=style3.transitionDuration="500ms";style3.transform=style3.webkitTransform=style3.MozTransform="translate(40px, 0px)translateZ(0)";style4.webkitTransitionDuration=style4.MozTransitionDuration=style4.msTransitionDuration=style4.OTransitionDuration=style4.transitionDuration="500ms";style4.transform=style4.webkitTransform=style4.MozTransform="translate(60px, 0px)translateZ(0)";style5.webkitTransitionDuration=style5.MozTransitionDuration=style5.msTransitionDuration=style5.OTransitionDuration=style5.transitionDuration="500ms";style5.transform=style5.webkitTransform=style5.MozTransform="translate(80px, 0px)translateZ(0)"});$(".intro3").on("click",function(){style1.webkitTransitionDuration=style1.MozTransitionDuration=style1.msTransitionDuration=style1.OTransitionDuration=style1.transitionDuration="500ms";style1.transform=style1.webkitTransform=style1.MozTransform="translate(-185px, 0px)translateZ(0)";style2.webkitTransitionDuration=style2.MozTransitionDuration=style2.msTransitionDuration=style2.OTransitionDuration=style2.transitionDuration="500ms";style2.transform=style2.webkitTransform=style2.MozTransform="translate(-165px, 0px)translateZ(0)";style3.webkitTransitionDuration=style3.MozTransitionDuration=style3.msTransitionDuration=style3.OTransitionDuration=style3.transitionDuration="500ms";style3.transform=style3.webkitTransform=style3.MozTransform="translate(40px, 0px)translateZ(0)";style4.webkitTransitionDuration=style4.MozTransitionDuration=style4.msTransitionDuration=style4.OTransitionDuration=style4.transitionDuration="500ms";style4.transform=style4.webkitTransform=style4.MozTransform="translate(60px, 0px)translateZ(0)";style5.webkitTransitionDuration=style5.MozTransitionDuration=style5.msTransitionDuration=style5.OTransitionDuration=style5.transitionDuration="500ms";style5.transform=style5.webkitTransform=style5.MozTransform="translate(80px, 0px)translateZ(0)"});$(".intro4").on("click",function(){style1.webkitTransitionDuration=style1.MozTransitionDuration=style1.msTransitionDuration=style1.OTransitionDuration=style1.transitionDuration="500ms";style1.transform=style1.webkitTransform=style1.MozTransform="translate(-185px, 0px)translateZ(0)";style2.webkitTransitionDuration=style2.MozTransitionDuration=style2.msTransitionDuration=style2.OTransitionDuration=style2.transitionDuration="500ms";style2.transform=style2.webkitTransform=style2.MozTransform="translate(-165px, 0px)translateZ(0)";style3.webkitTransitionDuration=style3.MozTransitionDuration=style3.msTransitionDuration=style3.OTransitionDuration=style3.transitionDuration="500ms";style3.transform=style3.webkitTransform=style3.MozTransform="translate(-145px, 0px)translateZ(0)";style4.webkitTransitionDuration=style4.MozTransitionDuration=style4.msTransitionDuration=style4.OTransitionDuration=style4.transitionDuration="500ms";style4.transform=style4.webkitTransform=style4.MozTransform="translate(60px, 0px)translateZ(0)";style5.webkitTransitionDuration=style5.MozTransitionDuration=style5.msTransitionDuration=style5.OTransitionDuration=style5.transitionDuration="500ms";style5.transform=style5.webkitTransform=style5.MozTransform="translate(80px, 0px)translateZ(0)"});$(".intro5").on("click",function(){style1.webkitTransitionDuration=style1.MozTransitionDuration=style1.msTransitionDuration=style1.OTransitionDuration=style1.transitionDuration="500ms";style1.transform=style1.webkitTransform=style1.MozTransform="translate(-185px, 0px)translateZ(0)";style2.webkitTransitionDuration=style2.MozTransitionDuration=style2.msTransitionDuration=style2.OTransitionDuration=style2.transitionDuration="500ms";style2.transform=style2.webkitTransform=style2.MozTransform="translate(-165px, 0px)translateZ(0)";style3.webkitTransitionDuration=style3.MozTransitionDuration=style3.msTransitionDuration=style3.OTransitionDuration=style3.transitionDuration="500ms";style3.transform=style3.webkitTransform=style3.MozTransform="translate(-145px, 0px)translateZ(0)";style4.webkitTransitionDuration=style4.MozTransitionDuration=style4.msTransitionDuration=style4.OTransitionDuration=style4.transitionDuration="500ms";style4.transform=style4.webkitTransform=style4.MozTransform="translate(-125px, 0px)translateZ(0)";style5.webkitTransitionDuration=style5.MozTransitionDuration=style5.msTransitionDuration=style5.OTransitionDuration=style5.transitionDuration="500ms";style5.transform=style5.webkitTransform=style5.MozTransform="translate(80px, 0px)translateZ(0)"});
    // 视频
    $('.page1-play-btn').on('click',function(){
      $('#popVedio1').show();
      document.getElementById('video1').play();
    });
    $('.pop-vedio').on('click',function(){
      $('.pop-bg').hide();
      document.getElementById('video1').pause();
    });
  }
}

$(function() {
  Index.init();
});