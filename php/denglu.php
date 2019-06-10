<?php

mysql_connect("127.0.0.1","root","root");
mysql_query("use sz1903");

$account1=$_POST["account1"];
$password=$_POST["password"];

$sql="select * from youhuo where username='$account1' and password='$password'";

$result=mysql_query($sql);

$row=mysql_fetch_assoc($result);
if($row){
    $response = ['code'=>200,'message'=>'登录成功'];
}else{
    $response = ['code'=>-1,'message'=>'用户名或密码错误'];
}

echo json_encode($response);


?>