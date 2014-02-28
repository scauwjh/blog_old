/**
 * 创建轮播
 * @param path 路径，不含序号和图片后缀
 * @param id container id
 * @param itemNum item的个数，也就是轮播的图片的数量
 * @param imgClass 图片的class名
 * @param indicator 是否添加indicator(图片轮播显示图标)，true or false
 * @param control 是否添加control，true or false
 * @param itemDesc item说明，array or null
 * @param itemDescClass item说明css
 * ps:container need to like this:
 * <div id="idName" class="carousel slide" data-ride="carousel"></div>
 * need jquery and bootstrap
 */
function createCarousel(path, id, itemNum, imgClass, indicator, control, itemDesc, itemDescClass){
    var items = '<div class="carousel-inner">';
    var indictors = '<ol class="carousel-indicators">';
    var controls = '';
    var head = '';
    var child = '';
    for (var i = 0; i < itemNum; i++) {
        //add item
        head = (itemDesc != null) ? '<div class="item active row">' : '<div class="item active">';
        child = (itemDesc != null) ? '<div class="item row">' : '<div class="item">';

        items += (i == 0) ? head : child;
        items += (itemDesc != null) ? '<div class="col-lg-9">' : '<div>';
        items += '<img src="' + path + i + '.jpg" class="' + imgClass + '">';
        items += '</div>';
        if (itemDesc != null) {
            items += '<div class="col-lg-3 ' + itemDescClass + '">';
            items += '<p>' + itemDesc[i] + '</p>';
            items += '</div>';
        }
        items += '</div>';//end head or child

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

/**
 * need to add the css with the name : 'back-to-top' and 'back-icon' to change the style
 * need jquery and bootstrap
 */
function backToTopIcon(height){
    var str = "";
    str += '<div class="back-to-top">';
    str += '<a href="javascript:;" class="glyphicon glyphicon-circle-arrow-up back-icon"></a>';
    str += '<p><a href="javascript:;">返回顶部</a></p>';
    str += '</div>';
    $("body").append(str);
    $(".back-to-top").css("display","none");
    $(document).on("mousemove",function(){
        var y = window.pageYOffset;
        if(y > height) {
            $(".back-to-top").fadeIn();
        } else {
            $(".back-to-top").fadeOut();
        }
    });
    //1197  1254   X
    //466  544    Y
    $(".back-to-top").click(function(){
        $("body").animate({scrollTop:0});                
    });
}

/**
 * need to add the css with the name : 'full-screen-shade'
 * need jquery
 */
function fullScreenShade(){
    var html = '<div class="full-screen-shade">';
    html += '</div>';
    $("body").append(html);
}


/**
 * add a comment board into the page
 */
function addComment(shortName){
    /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
    var disqus_shortname = shortName; // Required - Replace example with your forum shortname

    /* * * DON'T EDIT BELOW THIS LINE * * */
    (function() {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();
}


/**
 * get url parameters
 * need to include map.js(user function)
 */
function getParameters() {
    var str = window.location.search;
    var map = new Map();
    params = new Array();
    str = decodeURI(str);
    params = str.split("=");
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
    return map;
}

/**
 * user's include
 * script will to the end of body
 * this is hard to use for different path
 */
function include(jsUrl) {
    if (jsUrl == null || typeof(jsUrl) != 'string') return;
    var js = document.createElement('script');
    js.type = 'text/javascript';
    js.src = jsUrl;
    $.ajaxSetup({ cache : true });
    $('body').append(js);
}
