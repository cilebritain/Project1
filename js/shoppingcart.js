function pay(){
    alert("结账成功！");
}

function cancle1(){
    document.getElementById('goods1_bef').style.display='none';
    document.getElementById('goods1_aft').style.display='block';
}

function cancle2(){
    document.getElementById('goods2_bef').style.display='none';
    document.getElementById('goods2_aft').style.display='block';
}

function recover1(){
    document.getElementById('goods1_bef').style.display='block';
    document.getElementById('goods1_aft').style.display='none';
}

function recover2(){
    document.getElementById('goods2_bef').style.display='block';
    document.getElementById('goods2_aft').style.display='none';
}

function withdraw(){
    recover1();
    recover2();
}

