$(function(){
    $(window).scroll(function(){
        /**
        * 아래로 스크롤 시, 
        * 고정메뉴 보이기 & 상담톡 + 탑버튼 고정 & 광고탑배너 사라짐
        * @version 1.0.0
        * @since 2022-05-24
        * @memo 
        */
        var curr = $(this).scrollTop();
    
        if (curr > 0) {
            $('.header-area').addClass('fixed');
            $('.nav-wrap').addClass('show')
            $('.counsel-box').addClass('show')
            $('.ad-main-banner').addClass('remove')

        } else {
            $('.header-area').removeClass('fixed');
            $('.nav-wrap').removeClass('show')
            $('.counsel-box').removeClass('show')
            $('.ad-main-banner').removeClass('remove')

        }
        
        // 오답삭제 
        // if ($('.gnb-area').css("display") == "none") {

        //     $(this).show();
        // } else {

        //     $('.gnb-area.fixed').hide();

        // }
       
       
        
    })
    
    $('.btn.top').click(function(e){
        /**
        * 탑버튼 클릭시 상단으로 이동
        * @version 1.0.0
        * @since 2022-05-21
        * @memo 
        */
        e.preventDefault();
        $('body,html').animate({scrollTop:0})
    
    })

    
    /**
    * 메뉴영역 + 아코디언
    * @version 1.0.0
    * @since 2022-05-21
    * @memo 
    * ISSUE : 스크롤 제거메뉴 바깥영역 & 클릭시 닫기 실행가능
    */

    $('.btn.menu').click(function(e){
        e.preventDefault();
        $('.aside-area').addClass('active');
        $('body').addClass('scroll-hidden');//메뉴바깥 영역 스크롤제거 

    })
    $('.btn-close,.dimmed').click(function(e){
        e.preventDefault();
        $('.aside-area').removeClass('active');
        $('body').removeClass('scroll-hidden');

    })

// @@ 오답 모두 실행되지않음
// $(function(){
//     $('.menu-item').click(function(e){
//         e.preventDefault();
        
//         var siblings = $(this).siblings('.sub-list')
//         var siblingsAll = $('.sub-list')
//         var child = $(this).child('.btn-open')
//         var children = $('.btn-open')

    
//         if (siblings.css('display') == 'none') {
//             // 삭제 : siblings.stop().slideDown();
//             siblingsAll.stop().slideUp();
//             siblings().stop().slideDown();
            
//             children().removeClass('on');
//             child().addClass('on');

            
//         } else {
//             siblings.stop().slideUp();
//             child().removeClass('on')
//         }
        
//     })
// })


// @@오류사항 : 다른 sub-list들도 다 열려버림
//   on이 실행되지 않음 > html 수정필요
// @@@@ a영역한테만 이벤트 걸어야함 
    
    $('.menu-item > a').click(function(e){
        e.preventDefault();
        
        var siblings = $(this).siblings('.sub-list')

        siblings.slideToggle();//눌렀다가 닫히는 기능
        $(this).toggleClass('on');
        
    })

    /**
    * 검색창 
    * @version 1.0.0
    * @since 2022-05-24
    * @memo 
    * ISSUE : 검색창 열고 닫기
    */

        $('.btn.search').click(function(e){
            e.preventDefault();
            $('.search-view').addClass('view');
            $('body').addClass('scroll-hidden');

        })
        $('.search-view .btn-close').click(function(e){
            e.preventDefault();
            $('.search-view').removeClass('view');
            $('body').removeClass('scroll-hidden');
        })



    $('.btn-open').click(function(e){
        /**
        * 고정 메뉴 아코디언 클릭 시, 오픈동작 
        * @version 1.0.0
        * @since 2022-05-24
        * @memo 
        * ISSUE : 고정 전체메뉴는 아코디언 클릭 시, 존재했다가 사라짐
        * > all-menu는 toggle로 해결이 되기 때문에 nav-area으로 스크립트 작성
        * ISSUE : 세부 메뉴 & 전체메뉴 글씨가 본래는 없었다가 나타나야함
        * ISSUE : 첫 화면에서 block성질의 nav-area이 계속 보임
        * >
        */
        e.preventDefault();
        $('.all-menu').slideToggle();
        $(this).toggleClass('open');

       //open 클릭 시, nav-area 메뉴 숨기기
        if ($('.nav-area').css('display') == 'block') {
            $('.nav-area').css('display', 'none');
        } else{
            $('.nav-area').css('display', 'block');
        }

        //open 클릭 시, text(전체메뉴) 보이게하기
        if ($('.nav-wrap .text').css('display') == 'none') {
            $('.nav-wrap .text').css('display', 'flex');
        } else {
            $('.nav-wrap .text').css('display', 'none');
        }

        // @@ 오답 : all-menu는 toggle로 해결이 되기 때문에
        // nav-area으로 스크립트 작성할 것
        // if ($('.all-menu').css('display') == 'none') {
        //     $('.all-menu').show();
        // } else {
        //     $('.all-menu').hide();
        // }

        // nav-area이 보이면 숨기고 아니면 보여라
        // if ($('.all-menu').css('display') == 'none') {
        //     $('.nav-area').hide();
        //     $('.all-menu').show();
        // } else {
        //     $('.all-menu').hide();
        //     $('.nav-area').show();

            
        // }
    
    })

    

})













