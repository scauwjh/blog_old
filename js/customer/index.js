$(document).ready(function(){

    /* read configure from xml file */
    var url = 'configure/index.xml';
    $.get(url,"",function(data){
        $(data).find('module').each(function(){
            var path = $(this).children('path').html();// necessary param
            var id = $(this).children('id').html();// necessary param
            var itemNum = $(this).children('itemNum').html();// necessary param
            var imgClass = $(this).children('imgClass').html();// necessary param
            /* Item descriptions */
            var itemDescArray = $(this).children('itemDescArray').children('itemDesc');
            var itemDesc = new Array();
            if (itemDescArray.html() == null) {
                itemDesc = null;
            } else {
                var i = 0;
                $(this).children('itemDescArray').children('itemDesc').each(function(){
                    itemDesc[i++] = $(this).html();
                    // alert(itemDesc[i-1]);
                });
            }
            var tmp = $(this).children('itemDescClass').html();
            var itemDescClass = (tmp == "0") ? null : tmp;
            var control = Boolean(parseInt($(this).children('control').html()));
            var indicator = Boolean(parseInt($(this).children('indicator').html()));
            // alert(path+','+id+','+itemNum+','+imgClass+','+itemDescClass+','+indicator+','+control);
            createCarousel(path, id, itemNum, imgClass, indicator, control, itemDesc, itemDescClass);
        });
    })

    /* click to next the carousel*/
    $("#personal-carousel").click(function(){
        $("#personal-carousel").carousel('next');
    });
    
    /* add back to top icon */
    backToTopIcon(1000);
});