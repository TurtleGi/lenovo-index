// 联想公益
{   /* 此处的轮播图也可以与热门推荐一样使用swiper.js中的coverflow样式，此处使用了另外一种方式做 */
    var charityDetail = document.querySelectorAll('.charity__describe')
    let imgArr = new Array()
    let charityBgimg = document.querySelector('.charity__swiper__bgimg')
    let charityItem = charityBgimg.querySelectorAll('li')
    for (let i = 0; i < charityItem.length; i++) {
        let ele = charityItem[i]
        imgArr.push(ele)
    }

    let len = imgArr.length - 1
    let charityNext = document.querySelector(".charity__next")
    charityNext.addEventListener("click", function () {
        charityNextFunc()
    })
    let charityPrev = document.querySelector(".charity__prev")
    charityPrev.addEventListener("click", function () {
        charityPrevFunc()
    })

    function charityPrevFunc() {
        let imgTurn = imgArr[0]
        imgArr.shift()
        imgArr.push(imgTurn)
        clearCharityStyle()
        let charityDetailActive = imgArr[len - 2].querySelector('.charity__describe')
        let charityDetail = imgArr[len - 1].querySelector('.charity__describe')
        charityDetail.style.display = "block"
        charityDetailActive.style.display = "none"
    }

    function charityNextFunc() {
        let imgTurn = imgArr[len]
        imgArr.pop()
        imgArr.unshift(imgTurn)
        clearCharityStyle()
        let charityDetailActive = imgArr[len].querySelector('.charity__describe')
        let charityDetail = imgArr[len - 1].querySelector('.charity__describe')
        charityDetail.style.display = "block"
        charityDetailActive.style.display = "none"
    }
    function clearCharityStyle() {
        for (let i = 0; i < imgArr.length; i++) {
            imgArr[i].style.zIndex = i;
            imgArr[i].style.transform = "scale(1)";
        }
        imgArr[len - 2].style.left = "0px"
        imgArr[len - 1].style.zIndex = 100
        imgArr[len - 1].style.left = "300px"
        imgArr[len - 1].style.transform = "scale(1.4)"
        imgArr[len - 1].style.opacity = 1
        imgArr[len].style.left = "600px"

    }
}