$(document).ready(function(){
	var idStr = window.location.search;
	var page = 0;
	var allPage = 0;
	var picNum = 0;
	var albumId = 0;
	if (idStr != null) {
		// id is the index of album and id >= 0
		//alert(idStr)
		albumId = idStr.substring(idStr.indexOf("=") + 1, idStr.indexOf("&"));
		idStr = idStr.substring(idStr.indexOf("&") + 1);
		picNum = idStr.substring(idStr.indexOf("=") + 1, idStr.indexOf("&"));
		idStr = idStr.substring(idStr.indexOf("&") + 1);
		page = idStr.substring(idStr.indexOf("=") + 1, idStr.length);
		allPage = parseInt((picNum - 1) / 12) + 1;
		// alert(albumId+','+picNum+','+page+','+allPage);
		var str = '';
		var path = null;
		var start = (page - 1) * 12 + 1;
		var end = start + 12;
		var tmpNum = parseInt(picNum);
		if (end > tmpNum + 1)
			end = tmpNum + 1;
		// alert(start+','+end);
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
	var ctrl = '<div class="clear"></div>'
	ctrl += '<div id="display_control">';
	ctrl += '<a href="javascript:;" id="photo_prev_page">上一页</a>&nbsp;&nbsp;&nbsp;&nbsp;';
	ctrl += '<a href="javascript:;" id="photo_next_page">下一页</a>';
	ctrl += '</div>';
	$("#display_photo").after(ctrl);
	$("#photo_prev_page").click(function(){
		if (page > 1)
			page--;
		top.location.href = 'displayPhoto.html?id=' + albumId + '&picNum=' + picNum + '&page=' + page;
	});
	$("#photo_next_page").click(function(){
		if(page < allPage)
			page++;
		top.location.href = 'displayPhoto.html?id=' + albumId + '&picNum=' + picNum + '&page=' + page;
	});
	fullScreenShade();
	var divId = 0;
	var flag = false;
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
	$(document).on("keydown", function(){
		if (event.keyCode == 27 && flag == true)
			hide();
	});
	$(document).on("click", ".display-remove", function(){
		hide();
	})
	function hide(){
		flag = false;
		$(".full-screen-display").remove();
		$(".full-screen-shade").fadeOut();
	}
});