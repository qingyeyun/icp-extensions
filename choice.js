chrome.contextMenus.create({
    id: 'icp-search',
    title: '实时备案查询：%s',
    contexts: ['selection']
});
chrome.contextMenus.onClicked.addListener(function(info, tab) {
    switch(info.menuItemId){
        case 'icp-search': 
			chrome.tabs.create({url: 'https://www.icpapi.com/' + encodeURI(info.selectionText)});
            break;
    }
});

