function click_register(){
    
    var name=document.getElementById('username2').value;
    var password=document.getElementById('password2').value;
    var check=document.getElementById('check_password').value;
    var email=document.getElementById('email').value;
    var succeed=false;

    if(name.length==0){
        alert("用户名不能为空");
    }else if(password.length==0){
        alert("密码不能为空");
    }else if(password!=check){
        alert("密码不相等");
    }else if(email.length==0){
        alert("邮件不能为空");
    }else if(check_email(email)==false){
        alert("邮件格式不正确");
    }else if(check_password(password)==false){
        alert("密码格式不正确");
    }else if(check_username(name)==false){
        alert("用户名格式不正确");
    }else if(name==password){
        alert("密码不能与用户名相同");
    }else{
        alert("注册成功");
        succeed=true;
    }

    if(succeed){
        document.cookie="username=cilebritain123";
        document.getElementById('register_dialog').style.display='none';
        document.getElementById('register2').style.display='none';
        document.getElementById('logo_slogan').style.display='none';
        document.getElementById('logo_slogan1').style.display='block';
 
        document.getElementById('afterlog_info').style.display='block';
        document.getElementById('beforelog_info').style.display='none';
        document.getElementById('afterlog_upload').style.display='block';
        document.getElementById('beforelog_upload').style.display='none';
        document.getElementById('afterlog_buy').style.display='block';
        document.getElementById('beforelog_buy').style.display='none';
        document.getElementById('afterlog_sell').style.display='block';
        document.getElementById('beforelog_sell').style.display='none';        
    }

}

function register(){
    document.getElementById('register_dialog').style.display='block';
    document.getElementById('register2').style.display='block';
}

function cancle_register(){
    document.getElementById('register_dialog').style.display='none';
    document.getElementById('register2').style.display='none';   
}

function check_username(name){
    var par = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
    var flag = par.test(name);
    return flag;
}

function check_password(password){
    var par = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
    var flag = par.test(password);
    return flag;
}

function check_email(email) {
    var par = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
    var flag = par.test(email);
    return flag;
}

window.onload=check_cookies();//切窗时触发事件

function check_cookies(){
    var name=get_cookie("username");
    if(name!=""){
        document.getElementById('logo_slogan').style.display='none';
        document.getElementById('logo_slogan1').style.display='block';
    }else{
        document.getElementById('logo_slogan').style.display='block';
        document.getElementById('logo_slogan1').style.display='block';
    }
}

function get_cookies(name1){
    var name=name1+"=";
    var p=document.cookie.split(';');
    for(var i=0;i<p.length;i++){
        var c=ca[i].trim();//移除头尾空格
        if(c.indexof(name)==0)
            return c.substring(name.length,c.length);
    }
    return "";
}

function check_username_now(){
    var name=document.getElementById('username2').value;
    if(name.length==0){
        document.getElementById('name_label').innerHTML="<font color='red'>用户名不能为空</font>";
    }else if(check_username(name)==false){
        document.getElementById('name_label').innerHTML="<font color='red'>用户名格式错误</font>";
    }else{
        document.getElementById('name_label').innerHTML="<font color='red'></font>";
    }
}

function check_password_now(){
    var name=document.getElementById('password2').value;
    if(name.length==0){
        document.getElementById('password_label').innerHTML="<font color='red'>密码不能为空</font>";
    }else if(check_password(name)==false){
        document.getElementById('password_label').innerHTML="<font color='red'>密码格式错误</font>";
    }else if(name==document.getElementById('username2')){
        document.getElementById('password_label').innerHTML="<font color='red'>密码不能与用户名相同</font>";
    }else{
        document.getElementById('password_label').innerHTML="<font color='red'></font>";       
    }
}

function check_password_now2(){
    var p1=document.getElementById('password2').value;
    var p2=document.getElementById('check_password').value;
    if(p1!=p2){
        document.getElementById('check_label').innerHTML="<font color='red'>密码不相同</font>";
    }else{
        document.getElementById('check_label').innerHTML="<font color='red'></font>";
    }
}

function check_email_now(){
    var email=document.getElementById('email').value;
    if(email.length==0){
        document.getElementById('email_label').innerHTML="<font color='red'>邮箱不能为空</font>";
    }else if(check_email(email)==false){
        document.getElementById('email_label').innerHTML="<font color='red'>邮箱格式错误</font>";
    }else{
        document.getElementById('email_label').innerHTML="<font color='red'></font>";
    }
}
