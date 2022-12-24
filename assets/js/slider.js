document.addEventListener("DOMContentLoaded", function(){
const swiper = new Swiper('.slider-main', {
    // Optional parameters
    loop: false,
  
    // If we need pagination
    pagination: {
        el: ".slider-num",
        currentClass: "slider-num__current",
        totalClass: "slider-num__all",
        type: 'custom',
        formatFractionCurrent: function (number) {
                return '0' + number;
        },
        formatFractionTotal: function (number) {
                return '0' + number;
        },
        renderCustom: function (swiper, current, total) {
            return `
                    <div class="slider-num__current">0${current}</div>
                        <div class="slider-num__progress mx-2">
                            <span class="slider-num__line"></span>
                            <span class="slider-num__line-current" style="width:${100/((total + 1) - current)}%"></span>
                        </div>
                        <div class="slider-num__all">
                            0${total}
                    </div>
            `
        },
      },
  
    // Navigation arrows
    navigation: {
      nextEl: '.arrow-slider__right',
      prevEl: '.arrow-slider__left',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

});