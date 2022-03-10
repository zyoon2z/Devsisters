// main_slide.js

(function($){

  /**
   * 1.  `.area_indicator` 내부 li > a 를 클릭시 `.slide_wide`를 -100 * n 만큼 이동
   * 2. `.slide_wide`가 수행시 해당하는 순번을 파악해서 `.area_indicator` 내부 li에 `.action`을 붙이기
   */


  // ===============================
  // 변수 ---------------------------
  const areaIndicator = $('.area_indicator');
  const indicatorLi = areaIndicator.find('li');
  const indicatorLink = indicatorLi.children('a');
  const slideWide = $('.slide_wide');

  let INDEX = 0; 
  const ACT = 'action';

  // 함수 ---------------------------
  const fnSlideMove = function(n){
    // slideWide.css({marginLeft: `${n * -100}%`})
    slideWide.animate({marginLeft: n * -100 +'%'});
  }
  const fnAct = function(n){
    indicatorLi.eq(n).siblings().removeClass(ACT);
    indicatorLi.eq(n).addClass(ACT);
  }

  // 함수기본 ---------------------------
  fnAct(0);

  // 이벤트 ---------------------------
  indicatorLink.on('focus', function(e){
    e.preventDefault();
    INDEX = $(this).parent().index();
    // console.log( INDEX );
    fnSlideMove(INDEX);
    fnAct(INDEX);
  });

})(jQuery);