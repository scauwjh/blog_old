$(document).ready(function(){

    /* read configure from xml file */
    
    // var url = 'configure/index.xml';
    // $.get(url,"",function(data){
    //     $(data).find('module').each(function(){
    //         var path = $(this).children('path').html();// necessary param
    //         var id = $(this).children('id').html();// necessary param
    //         var itemNum = $(this).children('itemNum').html();// necessary param
    //         var imgClass = $(this).children('imgClass').html();// necessary param
    //         /* Item descriptions */
    //         var itemDescArray = $(this).children('itemDescArray').children('itemDesc');
    //         var itemDesc = new Array();
    //         if (itemDescArray.html() == null) {
    //             itemDesc = null;
    //         } else {
    //             var i = 0;
    //             $(this).children('itemDescArray').children('itemDesc').each(function(){
    //                 itemDesc[i++] = $(this).html();
    //                 // alert(itemDesc[i-1]);
    //             });
    //         }
    //         var tmp = $(this).children('itemDescClass').html();
    //         var itemDescClass = (tmp == "0") ? null : tmp;
    //         var control = Boolean(parseInt($(this).children('control').html()));
    //         var indicator = Boolean(parseInt($(this).children('indicator').html()));
    //         // alert(path+','+id+','+itemNum+','+imgClass+','+itemDescClass+','+indicator+','+control);
    //         createCarousel(path, id, itemNum, imgClass, indicator, control, itemDesc, itemDescClass);
    //     });
    // })

    var itemNum = 6;
    var path = 'img/index/header-carousel/tmp';
    var id = 'header-carousel';
    var imgClass = 'header-carousel-img';
    createCarousel(path, id, itemNum, imgClass, true, true, null, null);
    //person-carousel
    itemNum = 5;
    path = 'img/index/personal/intro';
    id = 'personal-carousel';
    imgClass = 'personal-img';
    var itemDescClass = 'personal-carousel-desc';
    var itemDesc = new Array();
    itemDesc[0] = '<h4>程序设计比赛</h4><p>2013年5月份参加省级acm程序设计大赛，图中可见队伍的名字SCAU_MonDaiNai，MonDaiNai是日语没问题的发音，寓意面对比赛，没问题！</p>';
    itemDesc[1] = "<h4>110米跨栏比赛</h4><p>2012年10月份参加学院田径运动会，并在110米跨栏比赛中获得了第八名。</p>";
    itemDesc[2] = "<h4>学院十佳体委</h4><p>2011至2012学年在班上担任体育委员一职，并在学年末获得了学院“十佳体委”和“阳光体育先进个人”的称号，班级也获得“阳光体育先进班级”荣誉称号。</p>";
    itemDesc[3] = "<h4>程序设计比赛</h4><p>2013年5月份参加省级acm程序设计大赛，获得了铜牌。</p>";
    itemDesc[4] = "<h4>各种奖励</h4><p>图中是2012至2013学年一年来所获得的奖励，有acm比赛，有科技创新比赛，有体委相关称号，还有担任院团委网络部副部长所获得的聘书。</p>";
    createCarousel(path, id, itemNum, imgClass, false, false, itemDesc, itemDescClass);
    //words-carousel
    itemNum = 5;
    id = 'works-carousel';
    path ='img/index/works/works';
    imgClass = 'works-img';
    createCarousel(path, id, itemNum, imgClass, false, false, null, null);

    /* click to next the carousel*/
    $("#personal-carousel").click(function(){
        $("#personal-carousel").carousel('next');
    });
    
    /* add back to top icon */
    backToTopIcon(1000);
});