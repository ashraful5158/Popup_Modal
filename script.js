const popupImgElm = document.querySelector(".popup_img")
// console.log(popupImgElm.children[0].children[0])
const popupModalElm = document.querySelector(".popup_modal")
const popupModalImgElm = document.querySelector(".popup_modal_img")

popupImgElm.addEventListener("click", () => {
  popupModalElm.style.display = "flex"
  popupModalImgElm.style.transform = "scale(1.8)"
})
const closeElm = document.querySelector(".close")
closeElm.addEventListener("click",()=>{
  popupModalElm.style.display = "none"
})
