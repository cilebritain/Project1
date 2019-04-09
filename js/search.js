function SearchGoods(){
    var p=document.getElementById('search_dialog').value;
    if(p==""){
        window.location.href="SearchGoodsno.html";
    }else{
        window.location.href="SearchGoods.html";
    }
}