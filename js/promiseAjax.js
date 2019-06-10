$(function(){
  $.ajax({
      type: "POST",//请求方式
      url: "index.json",//地址，就是json文件的请求路径
      dataType: "json",//数据类型可以为 text xml json  script  jsonp
　　　　　　　　　 success: function(result){//返回的参数就是 action里面所有的有get和set方法的参数
          addBox(result);
      }
  });
  /*$.get("item.json",function(result){
      //result数据添加到box容器中;
      addBox(result);
  });*/
});
function addBox(result){
  //result是一个集合,所以需要先遍历
  $.each(result,function(index,obj){
      $(".goods_container").append("<div class='good_info'>"+//获得图片地址
          "<div class='tag_container clearfix'></div>"+
          "<div class='good_detail_img'>"+
          "<a href="+"detail.html?temp="+index+"><img src="+obj.imgmax+"></a>"+"</div>"+
          "<div class='good_detail_text'>"+
          "<a href="+"detail.html?temp="+index+">"+obj.title+"</a>"+
          "<p class='price'>"+
          "<span class='sale_price'>"+"¥"+
          obj.price+"</span>"+
          "</p>"+
          "</div>"+
          "</div>");
    });
}
