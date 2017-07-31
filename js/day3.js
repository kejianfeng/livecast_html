$(function(){
    $("#delete").click(function(){
    	for(var i = 1; i<4;i++){
    		var selector = "#choose"+i+" input";
        	if ($(selector).is(":checked")) {
        		$("#rrr"+i+" img").remove();
        		$("#rrr"+i+" button").css('display','inline-block');
        		$(selector).prop("checked",false);
       		}
    	}
    })
})

