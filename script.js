const messageCheckboxCircleEl = document.querySelector("#message-option"),
      messageCheckboxEl = document.querySelector("#message-radio"),
      quoteCheckboxCircleEl = document.querySelector("#quote-option"),
      quoteCheckboxEl = document.querySelector("#quote-radio"),
      workSelect = document.querySelector("#form-quote")

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