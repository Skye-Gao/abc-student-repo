let maximumTab = 30;
let remainTab = 20;
let tabIcons = [];
let deleteTabs = [];

let currentValue = 0;

chrome.tabs.query({}, function(tabs) {
    var tabsCount = tabs.length;
    console.info("tabsCount = " + tabsCount);
    if (tabsCount > maximumTab) {
        console.log('warning!!')
    }
});

chrome.tabs.onActivated.addListener(function(tabId, changeInfo, tab) {
    chrome.tabs.query({}, function(tabs) {
        console.log(tabs)
        var tabsCount = tabs.length;
        console.info("tabsCount = " + tabsCount);
        if (tabsCount > maximumTab) {
            console.log('warning!!')
            for (let i = 0; i < tabs.length; i++) {
                tabIcons[i] = tabs[i].favIconUrl
            }
            console.log(tabIcons)
                // chrome.tabs.reload(tabs[remainTab - 1].id)
            setTimeout(() => {
                chrome.tabs.sendMessage(tabs[remainTab - 1].id, { tabIcons: tabIcons })
                console.log('message sent')
            }, 2000);
            // setInterval(() => {
            //     chrome.tabs.sendMessage(tabs[remainTab - 1].id, { tabIcons: tabIcons })
            //     console.log('message sent')

            // }, 2000);
            // chrome.tabs.sendMessage(tabs[remainTab - 1].id, { tabIcons: tabIcons })
            for (let j = remainTab; j < tabs.length; j++) {
                deleteTabs.push(tabs[j].id)
                chrome.tabs.remove([tabs[j].id])
            }
        }
    });
});

// chrome.tabs.onRemoved.addListener(function(tabid, removed) {
//     chrome.tabs.query({}, function(tabs) {
//         var tabsCount = tabs.length;
//         console.info("tabsCount = " + tabsCount);
//     });
// })