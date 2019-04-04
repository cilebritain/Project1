function SearchGoods(){
    if(document.getElementsById("search_dialog").value==""){
        document.getElementById("a").setAttribute("href","Search_none.html");
    }else{
        document.getElementById("a").setAttribute("href","SearchGoods.html");
    }
}

function unlogAlert(){
    alert("请登录！");
}

function showRechage(){
    document.getElementById("body").style.opacity="0.5";
    document.getElementById("Recharge").style.display="block";
}