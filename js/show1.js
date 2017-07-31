function bind(index) {

	//以下是实现点击与打开照片绑定sss
	var fileSelect1 = document.getElementById("rrr" + index),

	fileElem1 = document.getElementById("fileElem" + index);

	fileSelect1.addEventListener("click",
		function(e) {
		    if (fileElem1) {
		        fileElem1.click();
		    }
		    e.preventDefault(); // prevent navigation to "#"
		},
		false);

}
//进度条
function   wait(){
	$("#addshadow").addClass("shadow");
	$("#gif").css("display","block");
}
//以下是实现选择图片并显示

function readAsDataURL(that, showId) {

    if (typeof FileReader == 'undifined') //判断浏览器是否支持filereader  
    {
        result.innerHTML = "<p>抱歉，你的浏览器不支持 FileReader</p>";
        return false;
    }
    var file1 = that.files[0];
    if (!/image\/\w+/.test(file1.type)) //判断获取的是否为图片文件  
    {
        alert("请确保文件为图像文件");
        return false;
    }
    var reader1 = new FileReader();
    reader1.readAsDataURL(file1);
    reader1.onload = function(e) {
        var result1 = $(showId);
        $(result1).find("button").css('display', 'none');
        if($(showId+" img")){
        	$(showId+" img").remove();
        }
        var $img = $("<img/>");
     	$img.css({"width":"200","height":"130"});
        $img.prop("src",this.result);
		result1.append($img);
		console.log(555);
		//result1.innerHTML = '<img src="' + this.result + '" alt="" width="200" height="130"/>'  
    }
}
bind(1);
bind(2);
bind(3);
function uploadImage(that,$index){
	wait();
	var formData = new FormData($("#pic"+$index)[0]);
	$.ajax({
   		type: "POST",
  		url: "http://192.168.199.163:8000/api/venue/photo/"+$index+"/put?venue_id=1",
		data:formData,
		async: false,
   		cache: false,
   		contentType: false,  
   		processData: false,
   		success: function(data) {
   			if(data.c != 0){
   				alert("上传失败啦请检查下网络哦");
   				$("#warning"+$index).text("上传失败啦，请重新上传");
   			}
   			else{
   				alert("上传成功啦");
   				$("#warning"+$index).text("上传成功啦");
   				readAsDataURL(that, "#rrr"+($index+1));
   			}
   			  	 	},
   		error: function(XMLHttpRequest, textStatus, errorThrown) {
       		alert("上传失败，请检查网络后重试");
   		}
   	})
	$("#addshadow").removeClass("shadow");
   	$("#gif").css("display","none");

}
