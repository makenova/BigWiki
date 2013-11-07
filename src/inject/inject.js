chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// This part of the script triggers when page is done loading

		// var search = document.getElementById("searchInput");
		// var body = document.getElementsByTagName("body")[0];
		// body.insertBefore(search, body.firstChild);
		var search = document.getElementById("searchform");
		var body = document.getElementsByTagName("body")[0];
		body.insertBefore(search, body.firstChild);

	}
	}, 10);
});