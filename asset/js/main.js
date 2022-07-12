$(function () {
    /**
     * 메인탑배너
     * @version 1.0.0
     * @since 2022-05-23
     * @memo 
     * issue 1: fade 효과적용 시, 슬라이드 이미지가 쌓임
     * > 슬라이드 흐르는 효과 제거 (그 자리에서 이미지만 변화:
     * isste 2: swiper가 display:none 상태, display:none 요소에서 block이 될 때 슬라이드 작동하지 않음     
     * > 아래 옵션 값으로 초기화 시킴(스타일을 변경하거나(예: 숨기기/표시) 하위 요소를 수정(슬라이드 추가/제거)할 때마다 swiper가 업데이트(초기화)된다)
     */


    var adSwiper = new Swiper(".ad-main-banner .swiper", {
        loop:true,
        slidesPerView: 1,
        autoplay:{
            delay: 3000,
            disableOninteraction : false,
        },

        effect : 'fade', //issue 1)
        fadeEffect: { 
        crossFade: true 
        },

        observer: true,  //isste 2)
        observeParents: true,
    });




    /**
     * 메인비주얼 슬라이드
     * @version 1.0.0
     * @since 2022-05-19
     * @memo 
     * issue 1: 이미지 높이가 달라서 자동높이 autoHeight : true 설정해놓음
     * > css로 해결 가능
     * issue 2: 슬라이드가 흐르는 동작 효과를 제거해야함
     * > effect:"fade"로 동작효과 숨기기 가능
     */
    
    // @@ 오답 : 스와이퍼에 container 쓰는건 옛날 소스 사용xxxx
    var swiper = new Swiper(".sc-visual .swiper", {
        loop: true,
        slidesPerview: 1,
        effect:"fade",//issue 2

        autoplay: {
            delay: 800,
            disableOnInteraction: false,
        },

        pagination: {
            el: ".swiper-pagination",
        },

    })




    /**
     * 제품 슬라이드
     * @version 1.0.0
     * @since 2022-05-20
     * @memo 
     * ISSUE : 2개 이미지 보이고, 한개를 조금 더 볼 수 있는 구조
     * >> slidesPerView를 2.2와 같은 소수점으로 설정
     */

    var mySwiper = new Swiper('.swiper.product01', {
        slidesPerView: 2.2,
        slidesPerGroup: 3, //슬라이드 넘길 때 이동 갯수
        spaceBetween: 10,

    });
    var mySwiper = new Swiper('.swiper.product02', {
        slidesPerView: 2.2,
        slidesPerGroup: 3,
        spaceBetween: 10,

    });
    var mySwiper = new Swiper('.swiper.product03', {
        slidesPerView: 2.2,
        slidesPerGroup: 3,
        spaceBetween: 10,

    });


});













