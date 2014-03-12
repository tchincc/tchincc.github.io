<?php
	$city=$_GET["city"];
	$xml="http://api.thinkpage.cn/v1/weather/all.json?city=".$city."&language=zh-chs&unit=c&aqi=city&key=64IG0FBB6F";
	header('Content-type:application/xml');
	$fp=file_get_contents($xml);
	echo $fp;
?>
