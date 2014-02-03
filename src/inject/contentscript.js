chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			// This part of the script triggers when page is done loading

			bigWikify(true);
		}
	}, 10);
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.bigWikiON === true){
    	console.log('ON');
    	bigWikify(true);
    	sendResponse({message: "bigWikiON"});
    } else {
    	console.log('OFF');
    	bigWikify(false);
    	sendResponse({message: "bigWikiOFF"});
    }
  });

function bigWikify(toggle){
	if (toggle){
		document.getElementById('mw-head-base').classList.add('bigWiki');
		document.getElementById('mw-navigation').classList.add('bigWiki');
		document.getElementById('content').classList.add('bigWiki');
		document.getElementById('searchform').classList.add('bigWiki');
		document.getElementById('searchInput').classList.add('bigWiki');
		document.getElementsByClassName('suggestions')[0].classList.add('bigWiki');
		document.querySelector('body').classList.add('bigWiki');
	}else {
		document.getElementById('mw-head-base').classList.remove('bigWiki');
		document.getElementById('mw-navigation').classList.remove('bigWiki');
		document.getElementById('content').classList.remove('bigWiki');
		document.getElementById('searchform').classList.remove('bigWiki');
		document.getElementById('searchInput').classList.remove('bigWiki');
		document.getElementsByClassName('suggestions')[0].classList.remove('bigWiki');
		document.querySelector('body').classList.remove('bigWiki');
	}
}