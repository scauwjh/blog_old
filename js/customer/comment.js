$(document).ready(function(){
	var dsq = document.createElement('script'); 
	dsq.type = 'text/javascript'; 
	dsq.async = true;
	dsq.src = 'http://scauwjh.disqus.com/embed.js';
	//alert(123);
	(document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(dsq);
    //add back to top icon
    backToTopIcon(1000);
});