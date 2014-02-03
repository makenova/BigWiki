document.getElementById('big-switch').addEventListener('click', function(){
	sendMessage();
});

function sendMessage(){
	if(document.getElementById('bigWiki-on').checked){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {bigWikiON: true}, function(response) {
				console.log(response.message);
			});
		});
	} else if(document.getElementById('bigWiki-off').checked){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {bigWikiON: false}, function(response) {
				if(response)
					console.log(response.message);
			});
		});
	}
}