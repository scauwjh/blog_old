/**
 * 添加轮播的item
 * @param path 路径，不含序号和图片后缀
 * @param id container id
 * @param itemNum item的个数，也就是轮播的图片的数量
 * @param imgClass 图片的class名
 * @param indicator 是否添加indicator，true or false
 * @param control 是否添加control，true or false
 * ps:container need to like this:
 * <div id="idName" class="carousel slide" data-ride="carousel"></div>
 * and need jquery
 */
function appendItem(path, id, itemNum, imgClass, indicator, control){
	var items = '<div class="carousel-inner">';
	var indictors = '<ol class="carousel-indicators">';
	var controls = '';
	var head = '';
	var child = '';
    for (var i = 0; i < itemNum; i++) {
        //add item
        head = '<div class="item active">';
        child = '<div class="item">';
        items += (i == 0) ? head : child;
        items += '<img src="' + path + i + '.jpg" class="' + imgClass + '">';
        items += '</div>';
        //add indicator
        if(indicator){
            head = '<li data-target="#' + id + '" data-slide-to="0" class="active"></li>';
            child = '<li data-target="#' + id + '" data-slide-to="' + i + '"></li>';
            indictors += (i == 0) ? head : child;
        }
    }
    //是否添加indicator
    if(indicator){
    	indictors += '</ol>';
    	$("#" + id).append(indictors);
    }
    //添加
    items += '</div>';
    $("#" + id).append(items);
    //是否添加control
    if(control){
    	controls += '<a class="left carousel-control" href="#' + id + '" data-slide="prev">';
    	//if want to select other icon change this line
		controls += '<span class="glyphicon glyphicon-chevron-left"></span>';
		controls += '</a>';
        controls += '<a class="right carousel-control" href="#' + id + '" data-slide="next">';
        //if want to select other icon change this line
        controls += '<span class="glyphicon glyphicon-chevron-right"></span>';
        controls += '</a>';
        $("#" + id).append(controls);
    }
}