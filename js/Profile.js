function unlogAlert(){
    alert("请登录！");
}

function showRecharge(){
    document.getElementById('recharge').style.display='block';
}

function cancle_recharge(){
    document.getElementById('recharge').style.display='none';
}

function recharge(){
    alert("充值成功！");
    document.getElementById('recharge').style.display='none';
}
