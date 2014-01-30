$(document).ready(function(){
    //header-carousel
    var itemNum = 6;
    var path = 'img/header-carousel/tmp';
    var id = 'header-carousel';
    var imgClass = 'header-carousel-img';
    appendItem(path, id, itemNum, imgClass, true, true, null,null);
    //person-carousel
    itemNum = 5;
    path = 'img/person-carousel/intro';
    id = 'person-carousel';
    imgClass = 'person-img';
    var itemDescClass = 'person-carousel-desc';
    var itemDesc = new Array();
    itemDesc[0] = '<h4>程序设计比赛</h4><p>2013年5月份参加省级acm程序设计大赛，图中可见队伍的名字SCAU_MonDaiNai，MonDaiNai是日语没问题的发音，寓意面对比赛，没问题！</p>';
    itemDesc[1] = "<h4>110米跨栏比赛</h4><p>2012年10月份参加学院田径运动会，并在110米跨栏比赛中获得了第八名。</p>";
    itemDesc[2] = "<h4>学院十佳体委</h4><p>2011至2012学年在班上担任体育委员一职，并在学年末获得了学院“十佳体委”和“阳光体育先进个人”的称号，班级也获得“阳光体育先进班级”荣誉称号。</p>";
    itemDesc[3] = "<h4>程序设计比赛</h4><p>2013年5月份参加省级acm程序设计大赛，获得了铜牌。</p>";
    itemDesc[4] = "<h4>各种奖励</h4><p>图中是2012至2013学年一年来所获得的奖励，有acm比赛，有科技创新比赛，有体委相关称号，还有担任院团委网络部副部长所获得的聘书。</p>";
    appendItem(path, id, itemNum, imgClass, false, false, itemDesc, itemDescClass);
    //click to next the carousel
    $("#person-carousel").click(function(){
        $("#person-carousel").carousel('next');
    });
    //add back to top icon
    backToTopIcon();
});