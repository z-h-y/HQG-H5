

var sUserAgent = navigator.userAgent.toLowerCase();
var bIsAndroid = sUserAgent.match(/android/i) == "android";


if($('body').height()/$('body').width()<(950/640)){
    $('.view').css('-webkit-transform','scale(' + $('body').height()/950 + ')');  
}

// 微信分享设置
var lct = document.location;
var path = lct.pathname;
var pathName = path.substring(0, path.lastIndexOf("/"));
var basePath = lct.protocol + "//" + lct.host + pathName + "/";
var iconUrl = basePath + "images/shareIcon.jpg";
var questionInde=0;
var questionRight=0;
var score=0;
var $role=$('.role>div');
var gameTime=20;
var volume=1;
var kill=0;
var killC=0;
var wkill=0;

h5WxData = h5WxData || {};
h5WxData.imgUrl = iconUrl; //待分享icon图片链接
h5WxData.link = basePath; //待分享链接
h5WxData.desc = "这是一次007终极特工的考验，你将要面对的是有关于007的知识智力测试，以及精准的射击训练，只要你顺利通过，就能成为一名出色的职业特工。你敢来挑战这个007特工大考验么？"; //待分享文字描述
h5WxData.title = "007要来中国招助手了，快来看看你够不够资格吧！";  //待分享标题

var prmanifest = [{
    src: 'images/preload-bg.jpg',
    src: 'images/logo.png',
    src: 'images/YUN.png',
    src: 'images/preload-progress-bg.png'
  },

]

prloader = new createjs.LoadQueue(false);
prloader.installPlugin(createjs.Sound);
prloader.on('complete', prloaderComplete);
prloader.loadManifest(prmanifest);

function prloaderComplete(event) {
  $('.view').show();
 
  loader.loadManifest(manifest);

}

var manifest = [
      
        {src: 'images/home-bg.jpg'},
        {src: 'images/lb-bg.jpg'},
        {src: 'images/ms-bg.jpg'},
        {src: 'images/pd-bg.jpg'},
        {src: 'images/qw-bg.jpg'},
        {src: 'images/xw-bg.jpg'},
        {src: 'images/xz-jg-bg.jpg'},
        {src: 'images/xz1-bg.jpg'},
        {src: 'images/xz2-bg.jpg'},
        {src: 'images/bzh.png'},
        {src: 'images/hqg.png'},
        {src: 'images/home-bzh.png'},
        {src: 'images/home-hqg.png'},
        {src: 'images/xw-per.png'},
        {src: 'images/qw-per-1.png'},
        {src: 'images/pd-per.png'},
        {src: 'images/ms-per.png'},
        {src: 'images/xz2-per.png'},
        {src: 'images/xz-jg-bzh-1.png'},
        {src: 'images/xz-jg-bzh-2.png'},
        {src: 'images/xz-jg-bzh-3.png'},
        {src: 'images/xz-jg-bzh-4.png'},
        {src: 'images/xz-jg-hqg-1.png'},
        {src: 'images/xz-jg-hqg-2.png'},
        {src: 'images/xz-jg-hqg-4.png'}
]



loader = new createjs.LoadQueue(false);
loader.on('complete', loaderComplete);
loader.on('progress', loaderProgress);





function loaderProgress(event) {
  $('#preload-progress').text(Math.floor(event.progress * 100) + '%');
  $('#preload-bar>div').css('width',Math.floor(event.progress * 100) + '%');
}




function loaderComplete(event) {
// loaderafter = new createjs.LoadQueue(false);
// loaderafter.installPlugin(createjs.Sound);
//  loaderafter.loadManifest(aftermanifest);

  $('#preload-progress').text('100%'); 
  $('#preload-bar>div').css('width','100%');
  $('#startAnimation').addClass('show');
  start();
  
  
}



var bgm = new Bgmusic({
    musicSrc:'music/bgm.mp3',
    musicBtnId:'musicPlayer'
});

function start(){
    $('#home').removeClass('unLoad').addClass('show');
     $('#preload').removeClass('show');
     //playBgm('bgm');
}

//重设alert
function alert(str) {
  $("body").append('<div id="alert"></div>');
  alert = function(str) {
    $('#alert').text(str).addClass('show')
    setTimeout(function() {
      $('#alert').removeClass('show');
    }, 2500)
  }
  alert(str);
}

$(document).ready(function() {



  //阻止页面冒泡

  document.addEventListener('touchmove', function(e) {e.preventDefault();}, false);
  $('#html-content').bind('touchstart',function(e){
      e.preventDefault();
  })
  // document.addEventListener('touchstart', function(e) {}, false);
  $('.view>.page').bind('webkitTransitionEnd', function(e) {
    if ($(e.target).hasClass('page') && !$(this).hasClass('show')) {
      $(this).addClass('unLoad');
      if ($(this).hasClass('out')) $(this).removeClass('out');
    };
  });

  //播放按钮 
  $('.xz2-ms .per, .ms-play').on('touchstart',function() {
    bgm.pause();
    $('#music2').get(0).play();
  });


  //startBtn点击
  $('.home-btn').tap(function(){
    setTimeout(function(){

        $('#xz').removeClass('unLoad').addClass('show');
    },500);    
    $('#home').removeClass('show');
  })




  $('#xz li').tap(function(){
      $('#xz').removeClass('show');
      var index = $(this).index();
      var xz_jg = $('#xz-jg .xz-jg');
      xz_jg.eq(index).css("display","block");
      xz_jg.eq(index).css("display");
      xz_jg.eq(index).siblings('.xz-jg').hide();
      setTimeout(function(){
          $('#xz-jg').removeClass('unLoad').addClass('show');
      },500);
      setTimeout(function(){
          $('#xz-jg .xz-jg').eq(index).addClass('show-ready');
      },1000)
  })
  $('#xz-jg .xz-jg').tap(function(){
    if($(this).hasClass('show-ready')) {
      $('#xz-jg').removeClass('show');
      setTimeout(function(){
          $('#xz2').removeClass('unLoad').addClass('show');
      },500);
    }     
  })
  $('#xz2 li').tap(function(){
      var index = $(this).index();
      var xz_jg = $('#xz2-jg .xz-jg');
      xz_jg.eq(index).css("display","block");
      xz_jg.eq(index).css("display");
      xz_jg.eq(index).siblings('.xz-jg').hide();
      $('#xz2').removeClass('show');
      setTimeout(function(){
          $('#xz2-jg').removeClass('unLoad').addClass('show');
      },500);
      if(index = 1) {
        setTimeout(function(){
            xz_jg.find('.per').removeClass('qw-per-1').addClass('qw-per-2');
        },1500);
        setTimeout(function(){
            xz_jg.find('.per').removeClass('qw-per-2').addClass('qw-per-3');
        },2500);
        setTimeout(function(){
            xz_jg.find('.per').removeClass('qw-per-3').addClass('qw-per-1');
        },3500);
      }
  })
  $('.xz2-btn-1').one('touchstart',function(){
      $('#xz2-jg').removeClass('show');
      setTimeout(function(){
          $('#lb').removeClass('unLoad').addClass('show');
      },500);
      $('#music2').get(0).pause();
      bgm.play();   
  })
  $('.xz2-btn-2').one('touchstart',function(){
      $('#xz2-jg').removeClass('show');
      setTimeout(function(){
          $('#xz2').removeClass('unLoad').addClass('show');
      },500);   
      $('#music2').get(0).pause();
      bgm.play();
  })

   $('.shareBtn').tap(function(){
       dialog('快分享到朋友圈告诉大家吧！'); 
   })

   $('.againBtn').tap(function(){
        history.go(0);
   });

})
