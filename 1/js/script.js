let i = 0;
function burger(e){
    e.stopPropagation();
    if(i == 0){
        document.querySelectorAll('.menu')[0].style.display = "block";
        i = 1;
    }else{
        document.querySelectorAll('.menu')[0].style.display = "none";
        i = 0;
    }
}
function bodyburger(){
    if(i == 1){
        document.querySelectorAll('.menu')[0].style.display = "none";
        i = 0;
    }
}