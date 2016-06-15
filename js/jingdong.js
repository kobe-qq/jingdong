window.onload=function(){
  var win=$(".banzh")[0];
	var imgs=$("a",win);
	var lis=$("li",win);
	var btn=$(".btn")[0];
	var btnl=$(".btnl")[0];
	var btnr=$(".btnr")[0];
	var num=0;
	var t=setInterval(move,2000);
	//点击事件
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onclick=function(){
			num=this.index;
			for(var i=0;i<lis.length;i++){
				imgs[i].style.zIndex=0;
      	        lis[i].style.background="#ccc";
      	        // animate(imgs[i],{opacity:0},1000);
			}
			imgs[num].style.zIndex=3;
            lis[this.index].style.background="#658463";
            // animate(imgs[num],{opacity:1},1000);
		}
	}
	//点击抓手
	btnl.onclick=function(){
	    num--;
       if (num <0) {
           num = imgs.length-1;
       }
       for (var i = 0; i < imgs.length; i++) {
           imgs[i].style.zIndex=0;
           lis[i].style.background="#ccc";
       }
       imgs[num].style.zIndex=3;
       lis[num].style.background="#658463";
	}
	btnr.onclick=function(){
		move();
	}
    //移入移出
    win.onmouseover=function(){
        clearInterval(t);
        btnl.style.opacity=0.3;
        btnr.style.opacity=0.3;
   }
    win.onmouseout=function(){
    	t=setInterval(move,2000);
      btnl.style.opacity=0;
      btnr.style.opacity=0;
    }
    //轮播
	function move(){                 
      num++;
      if(num==imgs.length){
      	num=0;
      }
      for(var i=0;i<imgs.length;i++){
      	imgs[i].style.zIndex=0;
      	// animate(imgs[i],{opacity:0},1000);
      	lis[i].style.background="#ccc";
      }
      imgs[num].style.zIndex=3;
      // animate(imgs[num],{opacity:1},1000);
      lis[num].style.background="#658463";
	}

     
     var lunbo=function(win){
     var imgs=win.firstElementChild.children;
     var lis=$("li",win);
     var zal=$(".zal",win)[0];
     console.log(zal)
     var zar=$(".zar",win)[0];
     console.log(zar)
     var num=0;
     var flag=true;  
     var index=0;
     var imgW=parseInt(getStyle(imgs[0],"width"));
     //轮播
     // var flag1=true;
     var t=setInterval(move1,1000);
     //鼠标移入移出
     win.onmouseover=function(){
      clearInterval(t);
      zal.style.opacity=0.4;
      zar.style.opacity=0.4;
     }
     win.onmouseout=function(){
      t=setInterval(move1,1000);
      zal.style.opacity=0;
      zar.style.opacity=0;
     }
   //   //点击跳转
     for(i=0;i<lis.length;i++){
     lis[i].index=i;
     lis[i].onclick=function(){
      for(i=0;i<lis.length;i++){
        lis[i].style.background="#f4f4f4";
      }
      lis[this.index].style.background="red";
      imgs[this.index].style.left=imgW+"px";
        animate(imgs[index],{left:-imgW},1000);
        animate(imgs[this.index],{left:0},1000);
        index=num=this.index;
     }
   }
   //   //点击左右小爪
     zal.onclick=function(){
      move1();
     }
     zar.onclick=function(){
      mover();
     }
     
     
     //轮播
    
    function move1(){
      if(!flag){
        return
      }
      flag=false;
      num++;
      if(num==imgs.length){
        num=0;
      }
        imgs[num].style.left=imgW+"px";
        animate(imgs[index],{left:-imgW},1000,function(){
          flag=true;
        });
        animate(imgs[num],{left:0},1000,function(){
          flag=true;
        });
          for(var i=0;i<imgs.length;i++){
          lis[i].style.background="#ccc";
         }
           lis[num].style.background="red";
           index=num;
       }

       function mover(){
      if(!flag){
        return
      }
      flag=false;
      num--;
      if(num<0){
        num=imgs.length-1;
      }
        imgs[num].style.left=-imgW+"px";
        animate(imgs[index],{left:imgW},1000,function(){
          flag=true;
        });
        animate(imgs[num],{left:0},1000,function(){
          flag=true;
        });
          for(var i=0;i<imgs.length;i++){
          lis[i].style.background="#ccc";
         }
           lis[num].style.background="red";
           index=num;
       }
   }

   //1楼轮播
   var lou1=$(".lou1yz3")[0];
   lunbo(lou1);
   //3楼轮播
   var lou3=$(".lou3yz1")[0];
   lunbo(lou3);
   // //4楼轮播
   var lou4=$(".lou4yz1")[0];
   lunbo(lou4);
   // //5楼轮播
   var lou5=$(".lou5yz1")[0];
   lunbo(lou5);
   // //10楼轮播
   var lou10=$(".tsyxxyzys")[0];
   lunbo(lou10);
   // //11楼轮播
   var lou11z=$(".fwx2s")[0];
   lunbo(lou11z);
   var lou11y=$(".fwx2s1")[0];
   lunbo(lou11y);
}