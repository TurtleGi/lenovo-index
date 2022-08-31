        //console.log(window.devicePixelRatio)
        // 不需要重写轮播图移动方法，只需要在移动前将ul的位置放到上一张
        // 还有一个问题就是鼠标hover到某一张图片的时候，是直接划到下一张图片，而不是划多个距离
       
        var focus = document.querySelector('.carousel');
        var ol = document.querySelector('.circle');
        var ul = document.querySelector('.carousel__wrapper');

        for (var i = 0; i < ul.children.length; i++) {
            var li = document.createElement("li");
            ol.appendChild(li)
            // 记录小圆圈的索引号
            li.setAttribute('index', i);//设定一个索引数  
            ol.children[0].className = "circle-active"
            li.addEventListener('mouseenter', function () {

                // 排他思想
                for (var i = 0; i < ol.children.length; i++) {
                    ol.children[i].className = '';

                }
                this.className = 'circle-active';
                var index = this.getAttribute('index');
                // console.log(index);
                //获取此时点击小圆圈的索引数
                num = index;//轮播图位置
                circle = index;
                var focusWidth = focus.offsetWidth;//获取图片宽度
                console.log(typeof(index))
                // index是string类型
                if(index==='0'){
                   /* 解决跨多张滑动的bug */
                   console.log('i am 0')
                     ul.style.left=-focusWidth+'px'
                }else{
                    // console.log('xx')
                    ul.style.left=-(index-1)*focusWidth+'px'
                }
               
                animate(ul, -index * focusWidth);
               

            })
        }
        //克隆第一张图片
        var first = ul.children[0].cloneNode(true);
        ul.appendChild(first);
        var focusWidth = focus.offsetWidth;
        var num = 0;
        var circle = 0;
        // 左右按键
        var next = document.querySelector('.carousel__next');
        var prev = document.querySelector('.carousel__prev');
        focus.addEventListener('mouseenter', function () {
            prev.style.display = "block"
            next.style.display = "block"
        })
        focus.addEventListener('mouseleave', function () {
            prev.style.display = "none"
            next.style.display = "none"
        })
         next.addEventListener('click', function () {


            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * focusWidth);
            circle++;
            if (circle == ol.children.length) {
                circle = 0;
            }
            circleChange();
        }) 

        prev.addEventListener('click', function () {
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * focusWidth + 'px';
            }
            num--;
            animate(ul, -num * focusWidth);
            circle--;
            circle = circle < 0 ? ol.children.length - 1 : circle;
            circleChange();
        }); 
        //prev、next后圆圈改变
        function circleChange() {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';

            }
            ol.children[circle].className = 'circle-active';
        } 
        //自动轮播效果
       /*  =============swiper============ */
        var timer = setInterval(function () {
            var focusWidth = focus.offsetWidth;
            if (num == 8) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            circle++;
            if (circle == 8) {
                circle = 0;
                ol.children[0].className = '';

            }
            circleChange()
            animate(ul, -num * focusWidth);
        }, 3000)

