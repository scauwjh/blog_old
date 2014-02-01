$(document).ready(function(){
	// var dsq = document.createElement('script'); 
	// dsq.type = 'text/javascript'; 
	// dsq.async = true;
	// dsq.src = 'http://scauwjh.disqus.com/embed.js';
	// (document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(dsq);

	var reqUrl = 'http://scauwjh.disqus.com/embed.js';
	$.post(reqUrl,{},function(data){
		comment = data;
	});
	
	//alert(123);
	
    //add back to top icon
    backToTopIcon(1000);
});