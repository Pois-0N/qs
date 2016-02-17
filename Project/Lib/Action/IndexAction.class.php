<?php
// 本类由系统自动生成，仅供测试用途
class IndexAction extends Action {
    public function index(){
	    $this->display();
    }
	public function reg(){
		$q1 = $_POST["q1"];
		$q2 = $_POST["q2"].$_POST["q2_2"];
		$q3 = $_POST["q3"];
		$q4 = $_POST["q4"];
		$q5 = $_POST["q5"].$_POST["q5_2"];
		$q6 = $_POST["q6"];
		$q7 = $_POST["q7"];
		$q8 = $_POST["q8"];
		$q9 = $_POST["q9"].$_POST["q9_2"];
		$q10 = $_POST["q10"];
		$q11 = $_POST["q11"].$_POST["q11_2"];
		$q12 = $_POST["q12"];
		$q13 = $_POST["q13"];
		$q14 = $_POST["q14"];
		$q15 = $_POST["q15"];
		M('Result')->where(array('tel'=>$q13))->save(array('q1'=>$q1,'q2'=>$q2,'q3'=>$q3,'q4'=>$q4,'q5'=>$q5,'q6'=>$q6,'q7'=>$q7,'q8'=>$q8,'q9'=>$q9,'q10'=>$q10,'q11'=>$q11,'q12'=>$q12,'name'=>$q14,'tname'=>$q15));
		$this->assign('ceshi','提交完成');
	    $this->display();
    }
	public function preg(){
		$phone = $_GET["phone"];
		$user = M('Result')->where(array('tel'=>$phone))->find();
		if(!is_array($user)){
			$aa['tel'] = $phone;
			M('Result')->add($aa);
			$msg['flag'] = 1;
		}else{
		    $msg['flag'] = 2;
		}
		echo json_encode($msg);
    }
}