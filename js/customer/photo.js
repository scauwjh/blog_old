$(document).ready(function(){
	var picNum = 5;
	var albumNum = 1;
	var fileNum = new Array();
	fileNum[0] = 5;
	fileNum[1] = 1;
	fileNum[2] = 1;
	fileNum[3] = 1;
	fileNum[4] = 1;
	fileNum[5] = 1;
	var str = "";
	var path = "";
	for(var i = 0; i < picNum; i++){
		var folder = Math.floor(Math.random() * albumNum) + 1;
		var file = Math.floor(Math.random() * fileNum[folder-1]) + 1;
		path = 'img/photo/album' + folder + '/' + file + '.jpg';
		if (i == 0) {
			str = '<div class="item active">';
		} else{
			str += '<div class="item">';
		}
		// str += '<div style="background-image:url(' + path + ');background-repeat:no-repeat;';
		// str += 'background-size:auto 368px;margin-top:15px;width:auto;height:368px;"></div>';
		str += '<img src="' + path + '"';
		str += 'onerror="javascript:this.src=\'img/photo/nopic.jpg\'" class="photo-carousel-img">';
		str += '</div>';
	}
	$("#photo_carousel .carousel-inner").append(str);
	$("#photo_carousel").click(function(){
		$("#photo_carousel").carousel('next');
	});
});