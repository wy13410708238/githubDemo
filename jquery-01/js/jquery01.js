$(document).ready(function(){

    /* 
        1、奇数行和偶数行颜色不同。
    */
    /* :odd 匹配所有的偶数行 */
    $("ul:odd li").css("backgroundColor","blue");
    /* even 匹配所有的奇数行 */
    $("ul:even li").css("backgroundColor","red");

    /* 
        2、表头的颜色与其他行颜色不同。
    */
    $("ul:first-child li").css("backgroundColor","yellow");

    /* 3、将内容包含“黑莓手机”的行字体颜色设置为绿色,字体大小：14px。$(‘tr:contains(黑莓手机)’) */
    $("ul:contains(黑莓手机) li").css({color:'green',fontSize:'14'});

    /* 4、鼠标移动到某一行上，当前行颜色高亮显示，鼠标移动开后，恢复原来的颜色。（高亮：添加背景色或者文字颜色） */
    $("ul").mouseover(function(){
        $(this).find("li").addClass("highight");
    }).mouseout(function(){
        $(this).find("li").removeClass("highight");
    });

    /* 点击表头“序号”后面的复选框，将所有记录全选，再次点击，取消全选 */
    $("input:first").change(function(){
        let bool = $(this).prop("checked");
        $("input:gt(0)").prop("checked",bool);
    });
});