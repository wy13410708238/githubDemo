window.onload = function(){
  var p = document.createElement("p");
 document.getElementsByClassName("main")[0].append(p);
 p.setAttribute("class","demo");
 p.innerHTML ="一路路一路路一路路一路路一路路一路路一路路一路路一路路一路路一路路一路路一路路一路路一路路一路路一路路一路路一路路";

 var arr = $("main p label");
 var ss = $(".asasa")[0].innerText.split("")[0];

var laber = $(".select_arr");

laber.forEach(function(element) {
   element.on('click',element,label_onclick(element));
 });

 /* 选项被点击 */
 function label_onclick(item){
   if($("#result").innerText !=null){
     $("#result").innerText =$("#result").innerText +
      ","+item;
   }
    
 }

 function redio_del(data){
  data.innerText.split("")[0];
    return this.innerText;
 }



 
}