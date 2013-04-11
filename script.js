var req=null;
window.onload = function() {
    req = new XMLHttpRequest();
    req.open("GET", "http://search.twitter.com/search.atom?q=20SongsThatILike", true);
    req.onload = showTweets;
    req.send(null);	
}


function showTweets()
{
    var title=req.responseXML.getElementsByTagName('title')[1].childNodes[0];
    var author=req.responseXML.getElementsByTagName('author')[1].childNodes[0].childNodes[0];	
    document.body.appendChild(title);
}