   chrome.tabs.getSelected(null, function (tab) { // 先获取当前页面的tabID
       var url = tab.url;
       url = url.match(/^[\w-]+:\/{2,}\[?([\w\.:-]+)\]?(?::[0-9]*)?/)[1];
	   if(url.indexOf(".") == -1 ){
		   url = '';
	   }
       chrome.tabs.create({
           url: 'https://www.icpapi.com/' + encodeURI(url)
       });
   });