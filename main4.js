var modes = document.querySelector("#modes_menu1");
var mode_btn = document.querySelector("#modes-btn1");
var modes_height = modes.clientHeight;
modes.style.height = 0;

mode_btn.addEventListener("click", function(){
  var modes_position = modes.style.opacity;
  
  if(modes_position != 1){
    modes.style.height = `${modes_height}px`;
    modes.style.opacity = 1;
  }else{
    modes.style.height = 0;
    modes.style.opacity = 0;
  }
});
