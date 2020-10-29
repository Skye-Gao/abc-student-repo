let maximumTab = 30;
let remainTab = 20;


function gotMessage(message, sender, sendResponse) {
    console.log(message);
    console.log(message.tabIcons.length)
    for (let i = remainTab - 1; i < message.tabIcons.length; i++) {
        console.log('append div')
        let newDiv = document.createElement('div');
        newDiv.className = "iconDivs";
        newDiv.style.width = "30px";
        newDiv.style.height = "30px";
        newDiv.style.position = "absolute";
        newDiv.style.top = "20px";
        newDiv.style.zIndex = "100";
        // let leftDistance = mapRange(i - remainTab + 1, 0, message.tabIcons.length, 0, window.innerWidth)
        let leftDistance = Math.random() * window.innerWidth
        console.log(message.tabIcons[i])
        newDiv.style.left = `${leftDistance}px`
        if (message.tabIcons[i] != null) {
            newDiv.style.backgroundImage = `url(${message.tabIcons[i]})`
        } else {
            newDiv.style.backgroundColor = "black"
        }
        newDiv.style.backgroundSize = 'contain'
        document.body.appendChild(newDiv);

        let fallspd = Math.random() * 8 + 2;
        let rotatespd = Math.random() * 8 + 2;

        let keyframesFall = `@keyframes fall{
            from {
                top: 20px
            }
            to {
                top: ${document.body.scrollHeight}px
            }
        }`
        let s = document.createElement('style');
        s.innerHTML = keyframesFall;
        document.head.appendChild(s)

        let keyframesRotate = `@keyframes rotate{
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }`
        let s1 = document.createElement('style');
        s1.innerHTML = keyframesRotate;
        document.head.appendChild(s1)
            // newDiv.style.animationName = "fall";
            // newDiv.style.animationDuration = "5s"
            // newDiv.style.animationIterationCount = '1'
            // newDiv.style.animationTimingFunction = 'linear'
            // newDiv.style.animationFillMode = "forwards";

        // newDiv.style.animationName = "rotate";
        // newDiv.style.animationDuration = "3s"
        // newDiv.style.animationIterationCount = 'infinite'
        // newDiv.style.animationTimingFunction = 'linear'

        newDiv.style.animation = `fall ${fallspd}s 1 linear forwards, rotate ${rotatespd}s infinite linear`

    }
}



function mapRange(value, a, b, c, d) { //Simulating the map function in p5.js
    value = (value - a) / (b - a);
    return c + value * (d - c);
}


chrome.runtime.onMessage.addListener(gotMessage);