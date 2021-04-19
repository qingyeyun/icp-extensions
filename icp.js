function importMyBlog(info, tab) {
	var url = tab.url;
	url = url.match(/^[\w-]+:\/{2,}\[?([\w\.:-]+)\]?(?::[0-9]*)?/)[1];
	if(url.indexOf(".") == -1 ){
		url = '';
	}
	chrome.tabs.create({url: 'https://www.icpapi.com/' + encodeURI(url)});
}
chrome.contextMenus.create({
	"title": "备案查询",
    "contexts":["page"],//page表示在整个页面右键都会有自定义的菜单
	"onclick":importMyBlog
});