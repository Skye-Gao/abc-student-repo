let button=document.getElementByID("button");

button.addEventListener("click",()=>{
  console.log("pop up!")
})

chrome.tabs.query({active:true,currentWindow:true},function(tabs){
  chrome.tabs.sendMessage(tabs[0].id,{msg:"pop up window!"});
});
