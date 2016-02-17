/* -*- coding: utf-8-unix -*- */

// fix jquery template with Tidy
$(function(){
    $("script[type='text/x-jquery-tmpl']").each(function(idx){
	var err = false;
	var fun = function(str){ return str.replace(/^\s*<!\[CDATA\[/,'').replace(/\]\]>\s*$/,''); };
	try{
	    $(this).text(fun($(this).text()));
	}catch(ex){ err = true;}
	
	if(err){

	    var txt = fun(this.innerHTML || this.text);

	    try{

		this.innerHTML = txt;

	    }catch(ex){
		this.text = txt;
	    }

	}

    });
});

(function($){
    $.uiform=function(form){
	$(form).find('input:submit').button();
	$(form).find('input:button').button();
	$(form).find('input:text,input:password').each(
	    function(index,el){
		$(el).css({'padding':'5px 5px'}); /* compat with bootstrap3 */
	    }
	);
	/*
  .button()
  .css({
          'font' : 'inherit',
         'color' : 'inherit',
    'text-align' : 'left',
       'outline' : 'none',
        'cursor' : 'text'
  });
  */
    };
})(jQuery);

(function($){
    $.__site_output_email=function(){
	document.write('bian'+'ji@'+'lv'+'xing.'+'fm');
    };
})(jQuery);


function __warningIE8(){
    return '<div class="alert alert-warning text-center">亲，您的浏览器太原始了。请使用IE8以上的浏览器获得最佳浏览效果！</div>';
}
/*  I HAT IE  */
function __BrowserCompatibleWarning(){
    $(function(){
	var ieV=5.8;/*ie8*/
	/*@cc_on ieV = @_jscript_version;@*/
	if(ieV >= 5.8) return;
	$('body').prepend(__warningIE8());
    });
}


var __SearchResultRenderText=function(node,kw){
    var IndexOfArray=function(arr,x){
	for (var i = 0; i < arr.length; i++) {
	    if (arr[i] == x) {
		return i;
	    }
	}
	return -1;
    };
    var isStepByStep=function(n,ss,level){
	var i,ok,n,r;
	ok=1;

	r = IndexOfArray(ss[level],n+1);
	
	if(r == -1) return 0;

	if(ss[level+1])
	    return isStepByStep(n+1,ss,level+1);
	return 1;
    };
    var stepok=function(cis,iss){
	var i,j,ss=[];
	for(i=0;i<iss.length;i++){
	    ss[i]=[];
	    for(j=0;j<iss[i].length;j++){
		ss[i][j]=iss[i][j];
	    }
	}
	ss.push([]);
	for(i=0;i<cis.length;i++)
	    ss[ss.length-1].push(cis[i]);

	for(i=0;i<ss[0].length;i++){
	    var ok = isStepByStep(ss[0][i],ss,1);
	    if(ok) return 1;
	}
	return 0;
    };
    


    var klist = kw.split(''),kmap={},i,c;
    for(i=0;i<klist.length;i++){
	c = klist[i].toLowerCase();
	if(c == ' ') continue;
	if(kmap[c]) 
	    kmap[c].push(i+1);
	else 
	    kmap[c] = [i+1];
    }
    var tarr= node.text().split(''),r=[],wd='',iss=[],cis;
    for(i=0;i<tarr.length;i++){
	c=tarr[i];
	cis = kmap[c.toLowerCase()]
	if(cis && (iss.length < 1 || stepok(cis,iss) ) ){
	    wd+=c;
	    iss.push(cis);
	}else{
	    r.push(wd && (wd.length>1 ||wd.charCodeAt(0) > 127 ) ? ('<b>'+wd+'</b>'):wd);
	    r.push(c);
	    wd='';
	    iss=[];
	}
    }
    r.push(wd && (wd.length>1 || wd.charCodeAt(0) > 127 ) ? ('<b>'+wd+'</b>') : wd);
    node.replaceWith(r.join(''));
};
    
    
    
var __SearchResultRenderNode=function(node,kw){
    if(!node.hasChildNodes()){
	//text node
	if(node.nodeType == 3){
	    __SearchResultRenderText($(node),kw);
	}
	return;
    }	
    var cs = node.childNodes,j;
    for(j=0;j<cs.length;j++){
	__SearchResultRenderNode(cs[j],kw);
    }
};



