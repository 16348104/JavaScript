<?php
	header('Content-Type: text/html;charset=utf-8');
	//echo Date('Y-m-d H:i:s');
	print_r($_GET);
	print_r($_POST);
	
	//if ($_GET['name'] == 'Lee') {
	//	echo '李炎恢';
	//}
	if ($_POST['name'] == 'Lee') {
		echo '李炎恢';
	}
?>