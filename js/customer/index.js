$(document).ready(function(){

    /* read configure from xml file */
    
    var url = 'configure/index.xml';
    $.get(url,"",function(data){
        $(data).find('module').each(function(){
            var path = $(this).children('path').text();// necessary param
            var id = $(this).children('id').text();// necessary param
            var itemNum = $(this).children('itemNum').text();// necessary param
            var imgClass = $(this).children('imgClass').text();// necessary param
            /* Item descriptions */
            var itemDescArray = $(this).children('itemDescArray').children('itemDesc');
            var itemDesc = new Array();
            if (itemDescArray.text() == "") {
                itemDesc = null;
            } else {
                var i = 0;
                $(this).children('itemDescArray').children('itemDesc').each(function(){
                    itemDesc[i++] = $(this).text();
                    // alert(itemDesc[i-1]);
                });
            }
            var tmp = $(this).children('itemDescClass').text();
            var itemDescClass = (tmp == "0") ? null : tmp;
            var control = Boolean(parseInt($(this).children('control').text()));
            var indicator = Boolean(parseInt($(this).children('indicator').text()));
            //alert(path+','+id+','+itemNum+','+imgClass+','+itemDescClass+','+indicator+','+control);
            createCarousel(path, id, itemNum, imgClass, indicator, control, itemDesc, itemDescClass);
        });
        /* click to next the carousel*/
        $("#personal-carousel").click(function(){
            $("#personal-carousel").carousel('next');
        });
    });

    /* add back to top icon */
    backToTopIcon(1000);
});