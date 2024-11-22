const messageCheckboxCircleEl = document.querySelector("#message-option"),
      messageCheckboxEl = document.querySelector("#message-radio"),
      quoteCheckboxCircleEl = document.querySelector("#quote-option"),
      quoteCheckboxEl = document.querySelector("#quote-radio"),
      workSelect = document.querySelector("#form-quote"),
      navIcon = document.querySelector("#mobile-nav-icon"),
      mobileMenu = document.querySelector(".nav-links-wrapper"),
      closeIcon = document.querySelector("#mobile-close-nav-icon")

let messageForm  = true


function formType(){
if(messageForm === true){
  messageCheckboxCircleEl.style.display = "block"
  workSelect.style.display = "none"
  quoteCheckboxCircleEl.style.display = "none"
}else{
  messageCheckboxCircleEl.style.display= "none"
  workSelect.style.display = "flex"
  quoteCheckboxCircleEl.style.display = "block"
}
}
formType()



messageCheckboxEl.addEventListener("click", function(){
 if(messageForm === true){
  messageCheckboxCircleEl.style.display = "none"
  messageForm = false
  formType()
 }else{
messageCheckboxCircleEl.style.display = "block"
messageForm = true
formType()
}
console.log("message:" + messageForm)
})

quoteCheckboxEl.addEventListener("click", function(){
  if(messageForm === true){
      messageForm = false
    formType()
  
   }else{
      messageForm = true
  formType()
  }
  console.log("message:" + messageForm)
  })


  navIcon.addEventListener("click", function(){
     mobileMenu.style.transform = "translateX(0%)"

  })

  closeIcon.addEventListener("click",function(){
    mobileMenu.style.transform = "translateX(100%)"
  })

  document.body.addEventListener("click", function (event) {
    // Check if the click is outside the mobile menu
    if (
        mobileMenu.style.transform === "translateX(0%)" && 
        !mobileMenu.contains(event.target) && // Ensure the click is not inside the menu
        event.target !== navIcon // Ensure the click is not on the navIcon
    ) {
        mobileMenu.style.transform = "translateX(100%)"; // Close menu
    }
});