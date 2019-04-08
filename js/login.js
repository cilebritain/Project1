var code;

function click_login(){

    var user=document.getElementById('username').value;
    var password=document.getElementById('password').value;
    var vert=code.toLowerCase();
    var input=document.getElementById('vertification_input').value.toLowerCase();
    var flag=false;
    if(user.length<=0){alert("请输入用户名");}
    else if(password.length==0){alert("请输入密码");}
    else if(input.length==0){alert("请输入验证码");}
    else if(user!="cilebritain123"){alert("该用户不存在");}
    else if(password!="cilebritain"){alert("密码错误！");}
    else if(vert!=input){
        alert("验证码错误！");
        change_ver();
        document.getElementById('vertification_input').value="";
    }
    else {
        alert("登录成功");
        flag=true;
    }
    if(flag){
        document.cookie="username=cilebritain123";
        document.getElementById('logo_slogan').style.display='none';
        document.getElementById('logo_slogan1').style.display='block';
        document.getElementById('login_dialog').style.display='none';
        document.getElementById('login2').style.display='none';
    }
}

function login() {
    document.getElementById('login_dialog').style.display='block';
    document.getElementById('login2').style.display='block';
}

function logout() {
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT ";
    document.getElementById('logo_slogan').style.display='block';
    document.getElementById('logo_slogan1').style.display='none';
}

function cancel_login() {
    document.getElementById('login_dialog').style.display='none';
    document.getElementById('login2').style.display='none';
}

function generate_code(){
    var a="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    var b="";
    for(var i=1;i<=4;i++){
        var ind=Math.floor(Math.random()*62);
        b+=a.charAt(ind);
    }
    return b;
}

function change_ver(){
    code=generate_code();
    document.getElementById('vertification_code').innerHTML=code;
}

