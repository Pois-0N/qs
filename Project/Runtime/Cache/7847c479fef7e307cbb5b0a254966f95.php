<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title><?php echo ($ceshi); ?></title></head><body><form name=loading><P align=center><FONT face=Arial color=#0066ff size=2>调查问卷提交中...</FONT><INPUT style="PADDING-RIGHT: 0px; PADDING-LEFT: 0px; FONT-WEIGHT: bolder; 
PADDING-BOTTOM: 0px; COLOR: #0066ff; BORDER-TOP-style: none; PADDING-TOP: 0px;
 FONT-FAMILY: Arial; BORDER-RIGHT-style: none; BORDER-LEFT-style: none;
 BACKGROUND-COLOR: white; BORDER-BOTTOM-style: none"
size=46 name=chart><BR><INPUT style="BORDER-RIGHT: medium none; BORDER-TOP: medium none;
 BORDER-LEFT: medium none; COLOR: #0066ff; BORDER-BOTTOM: medium none;
 TEXT-ALIGN: center" size=47 name=percent><script language="javascript">var bar=0
var line="||"
var amount="||"
count()
function count(){
    bar=bar+2
    amount =amount + line
    document.loading.chart.value=amount
    document.loading.percent.value=bar+"%"
    if (bar<99){
        setTimeout("count()",100);
    }else{
        window.location = "https://www.ejiandai.com/";
    }
}
</script></P></form></body></html>