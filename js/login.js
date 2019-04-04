var code;

function login(){
    
    var user=document.getElementById("username").nodeValue;
    var password=document.getElementById("user_password").nodeValue;
    var vert=code.toLowercase();
    var input=document.getElementById("vertification_input").nodeValue.toLowerCase();
    var flag=false;

    if(user.length==0){alert("请输入用户名");}
    if(password.length==0){alert("请输入密码");}
    if(input.length==0){alert("请输入验证码");}
    
}