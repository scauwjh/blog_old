$(document).ready(function(){
	var picNum = 10;
	var albumNum = 4;
	var fileNum = new Array();
	var group = new Array();
	fileNum[0] = 5;
	fileNum[1] = 18;
	fileNum[2] = 67;
	fileNum[3] = 11;
	var str = "";
	var path = "";
	var count = 0;
	for (var i = 0; i < albumNum; i++) {
		for (var j = 0; j < fileNum[i]; j++){
			group[count++] = i*1000 + j;
		}
	}
	for(var i = 0; i < picNum; i++){
		var rand = Math.floor(Math.random() * count);
		// var file = Math.floor(Math.random() * fileNum[folder-1]) + 1;
		var file = group[rand] % 1000 + 1;//每个文件夹里面的图片总量不超过1000
		var folder = (group[rand] - file + 1) / 1000 +1;
		for (var j = rand; j < count; j++) {
			group[j] = group[j+1];
		}
		count--;
		//alert(folder+ "," + file);
		path = 'img/photo/album' + folder + '/' + file + '.jpg';
		if (i == 0) {
			str = '<div class="item active">';
		} else{
			str += '<div class="item">';
		}
		// str += '<div style="background-image:url(' + path + ');background-repeat:no-repeat;';
		// str += 'background-size:auto 368px;margin-top:15px;width:368px;height:368px;"></div>';
		str += '<div style="width:380px;height:380px;text-align:center">';
		str += '<img src="' + path + '"';
		str += 'onerror="javascript:this.src=\'img/photo/nopic.jpg\'" class="photo-carousel-img">';
		str += '</div>';
		str += '</div>';
	}
	$("#photo_carousel .carousel-inner").append(str);
	$("#photo_carousel").click(function(){
		$("#photo_carousel").carousel('next');
	});
});