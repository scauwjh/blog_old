$(document).ready(function(){
	var idStr = window.location.search;
	var page = 0;
	var allPage = 0;
	var picNum = 0;
	var albumId = 0;
	var albumName = null;
	var params = null;
	if (idStr != null) {
		var map = new Map();
		params = new Array();
		idStr = decodeURI(idStr);
		params = idStr.split("=");
		/* substring the param then put the key and value into a map */
		var name = null;
		var key = null;
		for (var i = 0; i < params.length; i++){
			if (i == 0) {
				name = params[i].substring(1, params[i].length);
				continue;
			}
			var end = params[i].indexOf("&");
			if(end == -1) {
				end = params[i].length;
			}
			key = params[i].substring(0, end);
			map.put(name, key);
			name = params[i].substring(end + 1, params[i].length);
		}

		albumName = map.get("albumName");
		albumId = map.get("albumId");
		picNum = map.get("picNum")
		page = map.get("page");
		allPage = parseInt((picNum - 1) / 12) + 1;
		// alert(albumName+","+albumId+','+picNum+','+page+','+allPage);
		
		/* add the title of album */
		var jumpUrl = 'displayPhoto.html?albumName=' + encodeURI(albumName) + '&albumId=' + albumId + '&picNum=' + picNum + '&page=1';
		var str = '<a href="'+ jumpUrl +'">'+ albumName +'</a>';
		
		$(".photo-top-bar span").append(str);
		
		/* add pictures */
		str = '';
		path = '';
		var start = (page - 1) * 12 + 1;
		var end = start + 12;
		var tmpNum = parseInt(picNum);
		if (end > tmpNum + 1)
			end = tmpNum + 1;
		for (var i = start; i < end; i++) {
			path = 'img/photo/album' + albumId + '/' + i + '.jpg';
			str += '<div class="display-img float-left">';
			str += '<a href="javascript:;" class="thumbnail">';
			str += '<img src="' + path + '" onerror="javascript:this..parentNode.parentNode.style.display=\'none\'">';
			str += '</a>';
			str += '</div>';
		}
		$("#display_photo").append(str);
	}
	/* add the page control */
	var ctrl = '<div class="clear"></div>'
	ctrl += '<div id="display_control">';
	ctrl += '<a href="javascript:;" id="photo_prev_page">上一页</a>&nbsp;&nbsp;&nbsp;&nbsp;';
	ctrl += '<a href="javascript:;" id="photo_next_page">下一页</a>';
	ctrl += '</div>';
	$("#display_photo").after(ctrl);
	/* page control */
	$("#photo_prev_page").click(function(){
		if (page > 1)
			page--;
		top.location.href = 'displayPhoto.html?albumName=' + albumName + '&albumId=' + albumId + '&picNum=' + picNum + '&page=' + page;
	});
	$("#photo_next_page").click(function(){
		if(page < allPage)
			page++;
		top.location.href = 'displayPhoto.html?albumName=' + albumName + '&albumId=' + albumId + '&picNum=' + picNum + '&page=' + page;
	});
	/* add the full screen shade for displaying picture */
	fullScreenShade();
	var divId = 0;
	var flag = false;
	/* click the picture */
	$(".thumbnail").click(function(){
		flag = true;
		divId = $(this).parent().index();
		//alert(picId);
		var imgSrc = $(this).children("img").attr("src");
		//alert(imgSrc);
		var html = '<div class="full-screen-display">';
		html += '<a href="javascript:;" class="display-prev-pic glyphicon glyphicon-chevron-left"></a>';
		html += '<img src="' + imgSrc + '">';
		html += '<a href="javascript:;" class="display-remove glyphicon glyphicon-remove-circle"></a>';
		html += '<a href="javascript:;" class="display-next-pic glyphicon glyphicon-chevron-right"></a>';
		html += '</div>'
		$("body").append(html);
		$(".full-screen-shade").fadeIn();
		$(".full-screen-display").fadeIn();
	});
	/* full screen display control */
	$(document).on("click", ".display-prev-pic", function(){
		$(".full-screen-display img").css("display","none");
		if (divId > 0)
			divId--;
		picId = (page - 1) * 12 + divId + 1;
		var src = "img/photo/album" + albumId + '/' + picId + '.jpg';
		$(".full-screen-display img").attr("src",src);
		$(".full-screen-display img").fadeIn();
	});
	$(document).on("click", ".display-next-pic", function(){
		$(".full-screen-display img").css("display","none");
		if (divId < 11)
			divId++;
		picId = (page - 1) * 12 + divId + 1;
		if (picId > picNum){
			divId--;
			picId--;
		}
		var src = "img/photo/album" + albumId + '/' + picId + '.jpg';
		$(".full-screen-display img").attr("src",src);
		$(".full-screen-display img").fadeIn();
	});
	/* press the esc */
	$(document).on("keydown", function(){
		if (event.keyCode == 27 && flag == true)
			hide();
	});
	/* click the × icon */
	$(document).on("click", ".display-remove", function(){
		hide();
	})
	/* to hide the full screen */
	function hide(){
		flag = false;
		$(".full-screen-display").remove();
		$(".full-screen-shade").fadeOut();
	}
});