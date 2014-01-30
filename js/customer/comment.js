$(document).ready(function(){
	var disqus_shortname = 'scauwjh';
	var dsq = document.createElement('script'); 
	dsq.type = 'text/javascript'; 
	dsq.async = true;
	dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
	//alert(123);
	var obj = document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0];
    obj.appendChild(dsq);
    //add back to top icon
    backToTopIcon();
});