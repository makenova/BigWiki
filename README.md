BigWiki
=======

Description
-----------

BigWiki displays just the meat of wikipedia articles.
It gets rid of the noise that surrounds them and allows for distraction free reading. You'll be lost in the wiki black hole, reading article after article faster than you can say, "BigWiki".  

Installation Instructions
-------------------------
This is a chrome extension, the easiest way to install it is to Download **[BigWiki](https://chrome.google.com/webstore/detail/bigwiki/iahnpklhmoljgkkaocdjlgcpckkmcfkm)** from the chrome web store.  
If you wish to make edits to the source,  

1. Download this repo and make your changes in the [`src`](https://github.com/makenova/BigWiki/tree/master/src) folder
2. Run [`gulp dist`](https://github.com/gulpjs/gulp)( [`node`](http://nodejs.org/) required)
3. Load the newly created [`dist`](https://github.com/makenova/BigWiki/tree/master/dist) folder into chrome as and unpacked extension([instructions](http://developer.chrome.com/extensions/getstarted.html#unpacked)).  
4. Open a [wikipedia](https://www.wikipedia.org/) article to test.

Directions
----------
BigWiki is a chrome extension page action and will take effect whenever you are on a wikipedia page. You'll know that BigWiki is active by the icon in the address bar. If you need to access some of the elements that BigWiki hides, simply click on the icon in the address bar and select the off option.  

![BigWiki GIF](http://i.imgur.com/1X7wuOl.gif "BigWiki Directions")
