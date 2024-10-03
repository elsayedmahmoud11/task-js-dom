// start traffic light section 
document.querySelectorAll("button").forEach( function(item){
    item.onclick = function(){
        document.querySelector("#traffic").style.color = item.dataset.colorr;
    }
});
// end traffic light section 

// start list section 
function listData(){
    var mouse = document.querySelector("#task").value;
    var result = document.querySelector("#result");
    if(mouse==""){
        return false;
    }else{
        var myLi = document.createElement("li");
        myLi.innerHTML = mouse;
        result.appendChild(myLi);
        document.querySelector("#task").value = "";
        return false;
    }
}
// end list section 