// 成功案例
{        // 成功案例中的盒子  

    var exampleNum = 0
    var box = document.querySelector(".example__cube__box")
    var boxLists = document.querySelectorAll(".example__cube__item")
    var examplePrev = document.querySelector(".example__prev")
    var exampleNext = document.querySelector(".example__next")
    var exampleBgimg = document.querySelector(".example__swiper__bgimg")
    var examplePic = document.querySelector(".eLi")
    var exampleFirstPic = exampleBgimg.children[0].cloneNode(true)
    exampleBgimg.appendChild(exampleFirstPic)
    var examplePicWidth = examplePic.offsetWidth
    var square = 0

    for (i = 0; i < boxLists.length; i++) {
        boxLists[i].setAttribute("index", i)
        boxLists[i].addEventListener("mouseenter", function () {
            var boxNum = parseInt(this.getAttribute("index"))
            for (var j = 0; j < 4; j++) {
                boxLists[j].className = "box" + (j + 1)
            }
            boxLists[boxNum].classList.add("example__cube__item-active")
            exampleNum = boxNum
            animate(exampleBgimg, -boxNum * examplePicWidth)
        })
    }
    exampleNext.addEventListener('click', function () {
        exampleNextFunc()

    })
    examplePrev.addEventListener('click', function () {
        examplePrevFunc()
    });


    function exampleNextFunc() {
        if (exampleNum == exampleBgimg.children.length - 1) {
            exampleNum = 0;
            exampleBgimg.style.left = 0;
        }
        exampleNum++
        animate(exampleBgimg, -exampleNum * examplePicWidth);
        square = exampleNum
        if (square == 4) {
            square = 0
            clearBoxStyle()
            boxLists[square].classList.add("example__cube__item-active")
        }
        else {
            clearBoxStyle()
            boxLists[square].classList.add("example__cube__item-active")
        }
    }
    function examplePrevFunc() {
        if (exampleNum == 0) {
            exampleNum = exampleBgimg.children.length - 1;
            exampleBgimg.style.left = -exampleNum * examplePicWidth + 'px';
        }
        exampleNum--;
        animate(exampleBgimg, -exampleNum * examplePicWidth);
        square = exampleNum

        console.log(square);


        square = square < 0 ? exampleBgimg.children.length - 2 : square;

        if (square == exampleBgimg.children.length - 2) {
            boxLists[0].classList.remove("example__cube__item-active")
        }

        if (square < exampleBgimg.children.length - 2) {
            boxLists[square + 1].classList.remove("example__cube__item-active")
        }
        boxLists[square].classList.add("example__cube__item-active")

        animate(exampleBgimg, -exampleNum * examplePicWidth);

    }
    function clearBoxStyle() {
        boxLists.forEach((value) => {
            value.classList.remove("example__cube__item-active")

        })
    }




}