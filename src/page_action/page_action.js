console.log('Hello Chrome');

document.getElementById('big-switch').addEventListener('click', function(){
	sendMessage();
});

function sendMessage(){
	if(document.getElementById('wiki-on').checked){
		console.log('on');
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {bigWikiON: true}, function(response) {
				console.log(response.message);
			});
		});
	} else if(document.getElementById('wiki-off').checked){
		console.log('off');
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {bigWikiON: false}, function(response) {
				if(response)
					console.log(response.message);
			});
		});
	}
}