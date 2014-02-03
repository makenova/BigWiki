BigWiki
=======

Description
-----------

BigWiki displays just the meat of wikipedia articles.
It gets rid of the noise that surrounds them and allows for distraction free reading. You'll be lost in the wiki black hole, reading article after article faster than you can say, "BigWiki".  

Installation Instructions
-------------------------
This is a chrome extension, the easiest way to install it is to Download [BigWiki](https://chrome.google.com/webstore/detail/bigwiki/iahnpklhmoljgkkaocdjlgcpckkmcfkm) from the chrome web store.  
If you wish to make edits to the source,  

1. Download this repo and make your changes in the [`src`](https://github.com/makenova/BigWiki/tree/master/src) folder
2. Run [gulp](https://github.com/gulpjs/gulp)([node](http://nodejs.org/) required)
3. Execute the `build.sh` script (tested on *inx only)
4. Load the [`dist`](https://github.com/makenova/BigWiki/tree/master/dist) folder into chrome as and unpacked extension([instructions](http://developer.chrome.com/extensions/getstarted.html#unpacked)).  
5. Open a [wikipedia](https://www.wikipedia.org/) article.

Directions
----------
BigWiki is a chrome extension page action and will take effect whenever you are on a wikipedia page. You will know that BigWiki is active by the icon in the address bar. If you need to access some of the elements that BigWiki hides, simply click on the icon in the address bar and select the off option.
