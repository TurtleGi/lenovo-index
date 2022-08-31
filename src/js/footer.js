
    { //底部JavaScript
        var weibo = document.querySelector(".weibo")
        var wechat = document.querySelector('.wechat')
        var follow = document.querySelector('.follow')
        weibo.addEventListener("mouseenter", function () {
            this.style.transform = "rotate(360deg)"

        })
        weibo.addEventListener("mouseleave", function () {
            this.style.transform = "rotate(-360deg)"
        })
        wechat.addEventListener("mouseenter", function () {
            this.style.transform = "rotate(360deg)"
            follow.style.height = "160px"

        })
        wechat.addEventListener("mouseleave", function () {
            this.style.transform = "rotate(-360deg)"
            follow.style.height = "0"
        })
        
        var flag = 0;
        var country = document.querySelector('.bottom__right__country')
        var countryList = document.querySelector('.bottom__right__list')
        country.addEventListener("click", function () {
            if (flag == 0) {
                countryList.style.display = "block"
                flag = 1
            }
            else {
                countryList.style.display = "none"
                flag = 0
            }
            countryList.addEventListener("mouseleave", function () {
                countryList.style.display = "none"
                flag = 0
            })
        })
    } 