chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message,sender,sendresponse)
{
	console.log(message.txt);
  document.body.style.backgroundColor = "#f7ede2";

  let divs = document.getElementsByTagName("div");
  for(div of divs)
  {
    div.style['background-color'] = '#f7ede2';
  }
}
