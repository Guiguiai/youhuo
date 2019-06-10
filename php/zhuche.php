<?php

mysql_connect("127.0.0.1","root","root");
mysql_query("use sz1903");

$phone=$_POST["phone"];
$pwd=$_POST["pwd"];

$sql="insert into youhuo(username,password) values('$phone','$pwd')";
mysql_query($sql);
$num=mysql_affected_rows();
if($num>0){
    $response=["code"=>200,"message"=>"注册成功"];
}else{
    $response=["code"=>-1,"message"=>"注册失败"];
}

echo json_encode($response);



?>