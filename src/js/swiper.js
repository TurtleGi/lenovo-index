var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "2",
  coverflowEffect: {
    rotate: 0,
    modifier: 2,
    slideShadows: true,
  },
      on: {
        slideChange: function () {
          let currentIndex =0
          let hotList = document.querySelector('.hot__list')
          let hotListItem = hotList.querySelectorAll('li')
          hotListItem.forEach((value)=>{
            value.classList.remove("hot__list__item-active")
          })
          /* swiper最先执行，无法复用下面的函数代码 */
          currentIndex = this.activeIndex
          if(currentIndex==1) {currentIndex==10
            hotListItem[8].classList.add("hot__list__item-active")
          }else if(currentIndex==11){
            hotListItem[0].classList.add("hot__list__item-active")
          }else{
            hotListItem[currentIndex-2].classList.add("hot__list__item-active")
          }
        },
      },
});


let hotPrev = document.querySelector('.hot__prev')
hotPrev.addEventListener('click', function () {
  swiper.slidePrev();
})

let hotNext = document.querySelector('.hot__next')
hotNext.addEventListener('click', function () {
  swiper.slideNext();
})

let hotList = document.querySelector('.hot__list')
let hotListItem = hotList.querySelectorAll('li')
hotListItem.forEach((value, index) => {
  value.addEventListener('mouseenter', () => {
    /* console.log(this)//此时this指向window */
    clearHotListStyle()
    value.classList.add("hot__list__item-active")
    swiper.slideTo(index + 2, 1000, false)
  })
})

function clearHotListStyle(){
  hotListItem.forEach((value)=>{
    value.classList.remove("hot__list__item-active")
  })
}