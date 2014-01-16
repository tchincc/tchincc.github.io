/* main JS */
function ajax(element,url,fn){
	if(XMLHttpRequest){
		var xhp = new XMLHttpRequest();
	}else{
		var xhp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhp.onreadystatechange = function(){
		if(xhp.readyState == 4 && xhp.status == 200){
			// test.innerHTML = xhp.responseText;
			var li = document.createElement("li");
			li.innerHTML = '<div class="man">匿名</div><div class="c_comment">'+xhp.responseText+'</div><div class="ex"><i class="time">'+clock()+'</i><a href="javascript:;">编辑</a><a href="javascript:;">删除</a></div>';
			ul.appendChild(li);
		}
	}
	xhp.open("POST",url,true);
	xhp.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8"); 
	xhp.send("commit="+element.value);
}
function clock(){
	var t = new Date();
	return t.getHours()+":"+t.getMinutes();
}
var push = document.getElementById("push");
var text = document.getElementById("text");
var ul = document.getElementById("c_ul");
push.onclick = function(){
	console.log("succ");
	ajax(text,"demo.php?a="+new Date().getTime());
}