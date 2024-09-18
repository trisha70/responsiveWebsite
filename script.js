let menu=document.getElementById("menu");
let st=true;
menu.addEventListener('click',function(){
    var links=document.querySelector('.header .links');
    if(st===false){
        links.style.display='none';
        st=true;
    }
    else{
        links.style.display="flex";
        st=false;
    }
})