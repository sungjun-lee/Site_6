

function restart_btn_click(e){
    location.href=`index.html`;
}


function event_handle(){
    const restart_btn = document.querySelector(".restart_btn");   
    //// 
   restart_btn.addEventListener("click",(e)=>{ restart_btn_click(e); });
}

event_handle();