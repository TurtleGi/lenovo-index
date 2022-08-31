    // 新闻中心
    {
        var newsPic = document.querySelector(".news__pic")
        var newsPicWidth = newsPic.offsetWidth
        var newsSwiper = document.querySelector(".news__swiper__bgimg")
        // var newsLi=newsUl.querySelectorAll("li")
        var newsCircle = document.querySelector('.news__circle')
        var newsCircleItem = newsCircle.getElementsByTagName('li')
        let newsList = document.querySelectorAll(".news__list__item")
        newsList.forEach((value,index)=>{
        value.addEventListener("mouseenter",function(){
         animate(newsSwiper, -index* newsPicWidth)
         for (var i = 0; i < 3; i++) {
             newsCircleItem[i].classList.remove(".news__circle-active")
         }
         newsCircleItem[0].classList.add(".news__circle-active")
         clearNewsItemStyle()
         this.children[0].style.color = "#e12726"
         this.style.backgroundColor = "#fff"
})
        })
        
        function clearNewsItemStyle(){
            newsList.forEach((value,index)=>{
               value.children[0].style.color="#c9c9c9"
                })
        }

        //var newsSwiper = document.getElementById('drag');
        var newsSwiperPic = newsSwiper.getElementsByTagName('li');
        var disX = 0;
        var downX = 0;
        var iNow = 0;
        var timer = null;
        var iSpeed = 0;
        newsSwiper.onmousedown = function (ev) {
            var ev = ev || window.event;
            disX = ev.clientX - newsSwiper.offsetLeft;//记录鼠标按下的位置到ul左侧是位置
            downX = ev.clientX;//记录鼠标按下时的位置	
            clearInterval(timer);
            document.onmousemove = function (ev) {
                var ev = ev || window.event;
                newsSwiper.style.left = ev.clientX - disX + 'px';//鼠标移动时，ul随着鼠标的移动而偏移
            };
            document.onmouseup = function (ev) {
                document.onmousemove = null;
                document.onmouseup = null;//鼠标抬起时，取消鼠标移动和抬起时的事件
                var ev = ev || window.event;
                if (ev.clientX < downX) {
                    //alert('←');
                    if (iNow != newsSwiperPic.length - 1) {
                        iNow++;
                    }
                    animate(newsSwiper, - iNow * newsSwiperPic[0].offsetWidth);//鼠标抬起时，让ul进行移动
                    for (var i = 0; i < 3; i++) {
                        newsCircleItem[i].classList.remove("news__circle-active")
                    }
                    newsCircleItem[iNow].classList.add("news__circle-active")
                }
                else {
                    //alert('→');

                    if (iNow != 0) {
                        iNow--;
                    }
                    animate(newsSwiper, - iNow * newsSwiperPic[0].offsetWidth);
                    for (var i = 0; i < 3; i++) {
                        newsCircleItem[i].classList.remove("news__circle-active")
                    }
                    newsCircleItem[iNow].classList.add("news__circle-active")
                }

            };
            return false;//取消默认行为
        };
/* //下面为弹性运动的封装,在此处没有使用到
        function startMove(iTarget){
            clearInterval(timer);//清空定时器
            timer = setInterval(function(){	//开启定时器	
                iSpeed += (iTarget - oUl.offsetLeft)/6;
                iSpeed *= 0.75;		
                if( Math.abs(iSpeed)<=1 && Math.abs(iTarget - oUl.offsetLeft)<=1 ){
                    clearInterval(timer);
                    iSpeed = 0;
                    oUl.style.left = iTarget + 'px';
                }
                else{
                    oUl.style.left = oUl.offsetLeft + iSpeed + 'px';
                }

            },30);
        } */


    }