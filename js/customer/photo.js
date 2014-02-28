$(document).ready(function(){
	var showNum = 10;
	var albumNum = 4;
	var picNum = new Array();
	var group = new Array();
	var albumName = new Array();
	for (var i = 0; i < 8; i++)
		albumName[i] = $(".album-title:eq("+ i +")").html();
	picNum[0] = 5;// album1
	picNum[1] = 18;// album2
	picNum[2] = 65;// album3
	picNum[3] = 11;// album4
	picNum[4] = 0;// album5
	picNum[5] = 0;// album6
	picNum[6] = 0;// album7
	picNum[7] = 0;// album8
	var str = "";
	var path = "";
	var count = 0;
	for (var i = 0; i < albumNum; i++) {
		for (var j = 0; j < picNum[i]; j++){
			group[count++] = i*1000 + j;
		}
	}
	for(var i = 0; i < showNum; i++){
		var rand = Math.floor(Math.random() * count);
		// var file = Math.floor(Math.random() * picNum[folder-1]) + 1;
		var file = group[rand] % 1000 + 1;//每个文件夹里面的图片总量不超过1000
		var folder = (group[rand] - file + 1) / 1000 +1;
		for (var j = rand; j < count; j++) {
			group[j] = group[j+1];
		}
		count--;
		//alert(folder+ "," + file);
		path = '../img/photo/album' + folder + '/' + file + '.jpg';
		if (i == 0) {
			str = '<div class="item active">';
		} else{
			str += '<div class="item">';
		}
		// str += '<div style="background-image:url(' + path + ');background-repeat:no-repeat;';
		// str += 'background-size:auto 368px;margin-top:15px;width:368px;height:368px;"></div>';
		str += '<div style="width:380px;height:380px;text-align:center">';
		str += '<img src="' + path + '"';
		var errorPaht = 'javascript:this.src=\'../img/photo/nopic.jpg';
		str += 'onerror="'+ errorPaht + '?album=' + folder + '&file=' + file + '\'" class="photo-carousel-img">';
		str += '</div>';
		str += '</div>';
	}
	$("#photo_carousel .carousel-inner").append(str);
	$("#photo_carousel").click(function(){
		$("#photo_carousel").carousel('next');
	});
	$(".photo-cover").click(function(){
		var i = $(this).parents(".row").index();
		var j = $(this).parents(".photo-box").index();
		var n = i * 4 + j + 1;
		// alert(n);
		var jumpUrl = 'displayPhoto.html?albumName=' + encodeURI(albumName[n-1]) + '&albumId=' + n + '&picNum=' + picNum[n-1] + '&page=1';
		top.location.href = jumpUrl;
	});
	$(".album-title").click(function(){
		var i = $(this).parents(".row").index();
		var j = $(this).parents(".photo-box").index();
		var n = i * 4 + j + 1;
		// alert(n);
		var jumpUrl = 'displayPhoto.html?albumName=' + encodeURI(albumName[n-1]) + '&albumId=' + n + '&picNum=' + picNum[n-1] + '&page=1';
		top.location.href = jumpUrl;
	});
	addComment('scauwjh');
});