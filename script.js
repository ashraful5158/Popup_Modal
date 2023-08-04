const popupImgElm = Array.from(document.querySelectorAll(".popup_img"))
// console.log(popupImgElm.children[0].children[0])
const popupModalElm = document.querySelector(".popup_modal")
const popupModalImgElm = document.querySelector(".popup_modal_img")


const closeElm = document.querySelector(".close")
closeElm.addEventListener("click",()=>{
  popupModalElm.style.display = "none"
})

popupImgElm.map((item) => {
  item.addEventListener("click", () => {
    let imgsrc = item.children[0].children[0].getAttribute("src")
    popupModalImgElm.setAttribute("src",imgsrc);
    popupModalElm.style.display = "flex"
    popupModalImgElm.style.transform = "scale(1.8)"
  })

})
