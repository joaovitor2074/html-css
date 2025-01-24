let nav = document.querySelector("nav");
function menu(){
    
    if(nav.style.display == "block"){
        nav.style.display = "none";
        nav.style.transition = "1s";
    }else{
        nav.style.display = "block";
        nav.style.transition = "1s";
    }
}
