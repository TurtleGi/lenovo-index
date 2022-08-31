let bannerTitle = document.querySelectorAll('.banner__title')
let productContainer = document.querySelectorAll('.product__container')
bannerTitle.forEach((value, index) => {

    console.log(value, index)
    value.addEventListener('click', function () {
        clearItemStyle()
        this.children[0].style.display = 'block'
        productContainer[index].style.display = 'block'
        /*   children[0]为红色的底部边框
          productContainer为该title下所属产品 */
    })
})

let productLogo = document.querySelector(".product__item__logo")
let productLogoList = productLogo.querySelectorAll("li")
let productGoodList = document.querySelectorAll(".product__item__goods")
productLogoList.forEach((value,index)=>{
value.addEventListener('mouseenter',()=>{
    clearLogoStyle()
    clearGoodStyle()
    value.children[0].src='../assets/img/computer_active.png'
    productGoodList[index].classList.add("product__item__goods-active")
})

})


function clearItemStyle() {
    bannerTitle.forEach((value) => {
        value.children[0].style.display = 'none'
    })
    productContainer.forEach((value) => {
        value.style.display = 'none'
    })
}

function clearLogoStyle(){
    productLogoList.forEach((value)=>{
        value.children[0].src='../assets/img/computer.png'
    })
}

function clearGoodStyle(){
    productGoodList.forEach((value)=>{
        value.classList.remove("product__item__goods-active")
    })
}