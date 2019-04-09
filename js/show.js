window.onload=function(){
    
    var div1=document.getElementById('div1');
    var show=div1.getElementsByTagName('div')[0];
    var div2=document.getElementById('div2');
    var span=div1.getElementsByTagName('span')[0];
    var img=document.getElementById('img2');

    show.onmouseover=function(){
        span.style.display='block';
        div2.style.display='block';
    };

    show.onmouseout=function(){
        span.style.display='none';
        div2.style.display='none';
    };

    show.onmousemove=function(ev){
        var eevent=ev||event;
        var x=eevent.clientX-div1.offsetLeft-span.offsetWidth/2;
        var y=eevent.clientY-div1.offsetTop-span.offsetHeight/2;
        if(x<0){
            x=0;
        }else if(x>show.offsetWidth-span.offsetWidth){
            x=show.offsetWidth-span.offsetWidth;
        }
        if(y<0){
            y=0;
        }else if(y>show.offsetHeight-span.offsetHeight){
            y=show.offsetHeight-span.offsetHeight;
        }

        span.style.left=x+'px';
        span.style.top=y+'px';

        var percentX=x/(show.offsetWidth-span.offsetWidth);
        var percentY=y/(show.offsetHeight-span.offsetHeight);
        img.style.left=-percentX*(img.offsetWidth-div2.offsetWidth)+'px';
        img.style.top=-percentY*(img.offsetHeight-div2.offsetHeight)+'px';
    };
}

function add_shoppingcart(){
    alert("添加购物车成功！");
}
